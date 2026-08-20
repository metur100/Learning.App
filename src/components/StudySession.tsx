import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import type { GradeResult, Question } from '../types';
import { QuestionCard } from './QuestionCard';
import { useAppData } from '../hooks/useAppData';
import { schedule } from '../services/scheduler';
import type { Response } from '../services/grading';

interface Props {
  queue: Question[];
  mode: 'learn' | 'review';
  certificateKey: string;
  sessionTitle?: string;
  sessionBody?: string;
  emptyTitle: string;
  emptyBody: string;
}

interface SessionEntry {
  entryId: number;
  question: Question;
}

interface EntryState {
  response: Response | null;
  graded: boolean;
  result: GradeResult | null;
}

const REPEAT_GAP_MIN = 5;
const REPEAT_GAP_MAX = 10;
const SESSION_KEY_PREFIX = 'ai901-study-session-v1-';

function randomRepeatGap(): number {
  return REPEAT_GAP_MIN + Math.floor(Math.random() * (REPEAT_GAP_MAX - REPEAT_GAP_MIN + 1));
}

interface SessionSnapshot {
  entries: Array<{ entryId: number; questionId: number }>;
  nextEntryId: number;
  index: number;
  entryStates: Record<number, EntryState>;
  correctByQuestion: Record<number, boolean>;
  baseQuestionIds: number[];
}

interface InitialSessionState {
  entries: SessionEntry[];
  nextEntryId: number;
  index: number;
  entryStates: Record<number, EntryState>;
  correctByQuestion: Record<number, boolean>;
  baseQuestionIds: number[];
  resumed: boolean;
}

function snapshotKey(mode: 'learn' | 'review', certificateKey: string): string {
  return `${SESSION_KEY_PREFIX}${certificateKey}-${mode}`;
}

function makeFreshState(queue: Question[]): InitialSessionState {
  const baseQuestionIds = queue.map((q) => q.id);
  return {
    entries: queue.map((question, i) => ({ entryId: i + 1, question })),
    nextEntryId: queue.length + 1,
    index: 0,
    entryStates: {},
    correctByQuestion: Object.fromEntries(baseQuestionIds.map((id) => [id, false])),
    baseQuestionIds,
    resumed: false,
  };
}

function sameIds(a: number[], b: number[]): boolean {
  return a.length === b.length && a.every((id, i) => id === b[i]);
}

function loadInitialState(queue: Question[], mode: 'learn' | 'review', certificateKey: string): InitialSessionState {
  const fresh = makeFreshState(queue);
  if (queue.length === 0) return fresh;

  const qById = new Map(queue.map((q) => [q.id, q]));
  const baseQuestionIds = queue.map((q) => q.id);

  try {
    const raw = localStorage.getItem(snapshotKey(mode, certificateKey));
    if (!raw) return fresh;
    const parsed = JSON.parse(raw) as SessionSnapshot;
    if (!parsed || !Array.isArray(parsed.entries)) return fresh;
    if (!Array.isArray(parsed.baseQuestionIds)) return fresh;

    const sameBase = sameIds(parsed.baseQuestionIds, baseQuestionIds);
    if (!sameBase) return fresh;

    const entries: SessionEntry[] = [];
    for (const e of parsed.entries) {
      if (!e || typeof e.entryId !== 'number' || typeof e.questionId !== 'number') return fresh;
      const q = qById.get(e.questionId);
      if (!q) return fresh;
      entries.push({ entryId: e.entryId, question: q });
    }

    if (entries.length === 0) return fresh;

    const maxEntryId = entries.reduce((m, e) => Math.max(m, e.entryId), 0);
    const nextEntryId = Math.max(maxEntryId + 1, Number(parsed.nextEntryId) || 1);
    const index = Math.min(Math.max(0, Number(parsed.index) || 0), entries.length - 1);

    const correctByQuestion: Record<number, boolean> = {};
    for (const qid of baseQuestionIds) {
      correctByQuestion[qid] = Boolean(parsed.correctByQuestion?.[qid]);
    }

    return {
      entries,
      nextEntryId,
      index,
      entryStates: parsed.entryStates ?? {},
      correctByQuestion,
      baseQuestionIds,
      resumed: true,
    };
  } catch {
    return fresh;
  }
}

export function StudySession({
  queue,
  mode,
  certificateKey,
  sessionTitle,
  sessionBody,
  emptyTitle,
  emptyBody,
}: Props) {
  const { data, updateCard, recordAttempt } = useAppData();
  const initial = useMemo(() => loadInitialState(queue, mode, certificateKey), [queue, mode, certificateKey]);
  const [entries, setEntries] = useState<SessionEntry[]>(initial.entries);
  const [nextEntryId, setNextEntryId] = useState(initial.nextEntryId);
  const [index, setIndex] = useState(initial.index);
  const [entryStates, setEntryStates] = useState<Record<number, EntryState>>(initial.entryStates);
  const [correctByQuestion, setCorrectByQuestion] = useState<Record<number, boolean>>(initial.correctByQuestion);
  const [baseQuestionIds] = useState<number[]>(initial.baseQuestionIds);
  const [resumed] = useState(initial.resumed);

  const current = entries[index];

  const correctCount = useMemo(
    () => Object.values(correctByQuestion).filter(Boolean).length,
    [correctByQuestion],
  );
  const totalQuestions = baseQuestionIds.length;
  const unresolvedCount = totalQuestions - correctCount;
  const isComplete = totalQuestions > 0 && unresolvedCount === 0 && index >= entries.length - 1;

  const questionsSeen = useMemo(() => {
    const seen = new Set<number>();
    for (let i = 0; i <= index && i < entries.length; i += 1) {
      seen.add(entries[i].question.id);
    }
    return seen.size;
  }, [entries, index]);

  useEffect(() => {
    if (queue.length === 0 || isComplete) {
      try {
        localStorage.removeItem(snapshotKey(mode, certificateKey));
      } catch {
        /* ignore storage failures */
      }
      return;
    }

    const snap: SessionSnapshot = {
      entries: entries.map((e) => ({ entryId: e.entryId, questionId: e.question.id })),
      nextEntryId,
      index,
      entryStates,
      correctByQuestion,
      baseQuestionIds,
    };
    try {
      localStorage.setItem(snapshotKey(mode, certificateKey), JSON.stringify(snap));
    } catch {
      /* ignore storage failures */
    }
  }, [queue, mode, certificateKey, isComplete, entries, nextEntryId, index, entryStates, correctByQuestion, baseQuestionIds]);

  const onGraded = useCallback(
    (r: GradeResult) => {
      if (!current) return;
      const qid = current.question.id;
      const card = data.cards[qid];
      if (!card) return;
      updateCard(schedule(card, r.correct));
      recordAttempt({ questionId: qid, correct: r.correct, at: new Date().toISOString(), mode });
      setEntryStates((prev) => {
        const existing = prev[current.entryId] ?? { response: null, graded: false, result: null };
        return {
          ...prev,
          [current.entryId]: { ...existing, graded: true, result: r },
        };
      });
      if (r.correct) {
        setCorrectByQuestion((prev) => ({ ...prev, [qid]: true }));
      }
    },
    [current, data.cards, updateCard, recordAttempt, mode],
  );

  const onResponseChange = useCallback((entryId: number, r: Response | null) => {
    setEntryStates((prev) => {
      const existing = prev[entryId] ?? { response: null, graded: false, result: null };
      return {
        ...prev,
        [entryId]: { ...existing, response: r },
      };
    });
  }, []);

  const previous = useCallback(() => {
    setIndex((i) => Math.max(0, i - 1));
  }, []);

  const next = useCallback(() => {
    if (!current) return;

    const qid = current.question.id;
    const st = entryStates[current.entryId] ?? { response: null, graded: false, result: null };
    const isCorrectNow = Boolean(st.graded && st.result?.correct);
    const isResolved = Boolean(correctByQuestion[qid] || isCorrectNow);

    let nextEntries = entries;
    let idSeed = nextEntryId;

    if (isResolved) {
      nextEntries = entries.filter((e, i) => i <= index || e.question.id !== qid);
    } else {
      const alreadyQueuedLater = entries.some((e, i) => i > index && e.question.id === qid);
      if (!alreadyQueuedLater) {
        const wantedGap = randomRepeatGap();
        const gap = Math.min(wantedGap, Math.max(0, entries.length - index - 1));
        const insertAt = Math.min(entries.length, index + 1 + gap);
        const repeatEntry: SessionEntry = { entryId: idSeed, question: current.question };
        idSeed += 1;
        nextEntries = [...entries];
        nextEntries.splice(insertAt, 0, repeatEntry);
      }
    }

    setEntries(nextEntries);
    setNextEntryId(idSeed);
    setIndex((i) => Math.min(i + 1, nextEntries.length - 1));
  }, [current, entryStates, correctByQuestion, entries, index, nextEntryId]);

  if (entries.length === 0) {
    return (
      <div className="empty">
        <h2>{emptyTitle}</h2>
        <p>{emptyBody}</p>
        <Link className="btn btn--primary" to="/">Back to dashboard</Link>
      </div>
    );
  }

  if (isComplete) {
    const pct = totalQuestions ? Math.round((correctCount / totalQuestions) * 100) : 0;
    return (
      <div className="empty">
        <h2>Session complete</h2>
        <p>{correctCount} of {totalQuestions} correct ({pct}%).</p>
        <div className="empty__actions">
          <Link className="btn btn--primary" to="/">Dashboard</Link>
          <Link className="btn" to="/review">More review</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      {(sessionTitle || sessionBody) && (
        <section className="session-intro" aria-label="Session info">
          {sessionTitle && <h2>{sessionTitle}</h2>}
          {sessionBody && <p>{sessionBody}</p>}
        </section>
      )}
      {resumed && (
        <p className="hint" role="status">Resumed your previous {mode} session.</p>
      )}
      <div className="session__bar">
        <span className="session__count">{Math.min(questionsSeen, totalQuestions)} / {totalQuestions}</span>
        <div className="session__progress" aria-hidden="true">
          <div style={{ width: `${totalQuestions ? (questionsSeen / totalQuestions) * 100 : 0}%` }} />
        </div>
        <span className="session__score">{correctCount} / {totalQuestions} correct</span>
      </div>

      <QuestionCard
        question={current.question}
        shuffleOptions={data.settings.shuffleOptions}
        revealImmediately={data.settings.showExplanationImmediately}
        onGraded={onGraded}
        onResponseChange={(r) => onResponseChange(current.entryId, r)}
        initialResponse={entryStates[current.entryId]?.response ?? null}
        initialChecked={Boolean(entryStates[current.entryId]?.graded)}
        initialResult={entryStates[current.entryId]?.result ?? null}
        resetToken={current.entryId}
      />

      <div className="session__next">
        <button className="btn" onClick={previous} disabled={index === 0}>Previous</button>
        <button className="btn btn--primary" onClick={next}>
          {unresolvedCount === 0 && index >= entries.length - 1 ? 'Finish' : 'Next question'}
        </button>
      </div>
    </div>
  );
}
