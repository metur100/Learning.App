import { useEffect, useMemo, useState } from 'react';
import type { GradeResult, Question } from '../types';
import { grade, isAnswered, type Response } from '../services/grading';

interface Props {
  question: Question;
  shuffleOptions: boolean;
  /** Auto-reveal explanation immediately after grading. */
  revealImmediately: boolean;
  /** Hide correctness feedback (used in exam mode until submission). */
  suppressFeedback?: boolean;
  /** Called once the user checks/answers a question. */
  onGraded?: (result: GradeResult) => void;
  /** For exam mode: report the current response as the user edits it. */
  onResponseChange?: (r: Response | null) => void;
  /** Restore a previously typed response (used for previous/next navigation). */
  initialResponse?: Response | null;
  /** Restore whether this question entry was already graded. */
  initialChecked?: boolean;
  /** Restore a previous grading result. */
  initialResult?: GradeResult | null;
  /** Reset internal state when key content changes. */
  resetToken?: string | number;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function QuestionCard({
  question,
  shuffleOptions,
  revealImmediately,
  suppressFeedback = false,
  onGraded,
  onResponseChange,
  initialResponse = null,
  initialChecked = false,
  initialResult = null,
  resetToken,
}: Props) {
  const [selected, setSelected] = useState<string[]>([]);
  const [boolAnswers, setBoolAnswers] = useState<Record<string, boolean>>({});
  const [dragAssignments, setDragAssignments] = useState<Record<string, string>>({});
  const [draggedId, setDraggedId] = useState<string | null>(null);
  const [checked, setChecked] = useState(initialChecked);
  const [result, setResult] = useState<GradeResult | null>(initialResult);

  useEffect(() => {
    if (initialResponse?.kind === 'options') {
      setSelected(initialResponse.selected);
      setBoolAnswers({});
      setDragAssignments({});
    } else if (initialResponse?.kind === 'boolean') {
      setSelected([]);
      setBoolAnswers(initialResponse.answers);
      setDragAssignments({});
    } else if (initialResponse?.kind === 'dragdrop') {
      setSelected([]);
      setBoolAnswers({});
      setDragAssignments(initialResponse.assignments);
    } else {
      setSelected([]);
      setBoolAnswers({});
      setDragAssignments({});
    }
    setChecked(initialChecked);
    setResult(initialResult);
  }, [question.id, resetToken]);

  const options = useMemo(() => {
    if (!question.options) return [];
    return shuffleOptions ? shuffle(question.options) : question.options;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [question.id, shuffleOptions]);

  const isMulti = question.type === 'multiple';
  const isBoolean = question.type === 'hotspot-boolean';
  const isDragDrop = question.type === 'drag-drop';
  const isHotspotDropdown = question.type === 'hotspot-dropdown';

  const currentResponse: Response | null = isBoolean
    ? { kind: 'boolean', answers: boolAnswers }
    : isDragDrop || isHotspotDropdown
      ? { kind: 'dragdrop', assignments: dragAssignments }
      : { kind: 'options', selected };

  useEffect(() => {
    onResponseChange?.(isAnswered(question, currentResponse) ? currentResponse : null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected, boolAnswers, dragAssignments]);

  function toggleOption(id: string) {
    if (checked) return;
    if (isMulti) {
      setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));
    } else {
      setSelected([id]);
    }
  }

  function setBool(sid: string, val: boolean) {
    if (checked) return;
    setBoolAnswers((b) => ({ ...b, [sid]: val }));
  }

  function check() {
    if (!isAnswered(question, currentResponse)) return;
    const r = grade(question, currentResponse!);
    setResult(r);
    setChecked(true);
    onGraded?.(r);
  }

  const showFeedback = checked && !suppressFeedback;
  const correctSet = new Set(question.correct ?? []);
  const expectedAssignments = useMemo(() => {
    const m = new Map<string, string>();
    for (const raw of question.correct ?? []) {
      const i = raw.indexOf(':');
      if (i <= 0) continue;
      m.set(raw.slice(0, i), raw.slice(i + 1));
    }
    return m;
  }, [question.correct]);

  function assignTarget(targetId: string, optionId: string) {
    if (checked) return;
    setDragAssignments((prev) => {
      const next = { ...prev };
      for (const key of Object.keys(next)) {
        if (next[key] === optionId) delete next[key];
      }
      next[targetId] = optionId;
      return next;
    });
  }

  function clearTarget(targetId: string) {
    if (checked) return;
    setDragAssignments((prev) => {
      const next = { ...prev };
      delete next[targetId];
      return next;
    });
  }

  function onDrop(targetId: string, e: React.DragEvent) {
    e.preventDefault();
    if (!draggedId) return;
    assignTarget(targetId, draggedId);
    setDraggedId(null);
  }

  return (
    <article className="qcard">
      <div className="qcard__meta">
        <span className="chip chip--topic">{question.topic}</span>
        <span className="chip chip--type">{labelForType(question.type)}</span>
        {question.keySource === 'domain' && (
          <span className="chip chip--domain" title="Answer supplied from Azure AI domain knowledge (no official key in source).">
            expert key
          </span>
        )}
      </div>

      <div className="qcard__prompt">
        {question.prompt.split('\n').map((line, i) =>
          line.trim() === '' ? <div key={i} className="qcard__gap" /> : <p key={i}>{renderBlank(line)}</p>,
        )}
      </div>

      {question.codeContext && <pre className="qcard__code">{question.codeContext}</pre>}

      {isBoolean ? (
        <table className="boolgrid">
          <thead>
            <tr>
              <th scope="col">Statement</th>
              <th scope="col">Yes</th>
              <th scope="col">No</th>
            </tr>
          </thead>
          <tbody>
            {(question.statements ?? []).map((s) => {
              const chosen = boolAnswers[s.id];
              const isRight = showFeedback && chosen === s.answer;
              const isWrong = showFeedback && chosen !== undefined && chosen !== s.answer;
              return (
                <tr key={s.id} className={isRight ? 'row--right' : isWrong ? 'row--wrong' : ''}>
                  <th scope="row" className="boolgrid__stmt">{s.text}</th>
                  {[true, false].map((val) => {
                    const picked = chosen === val;
                    const markCorrect = showFeedback && s.answer === val;
                    return (
                      <td key={String(val)}>
                        <label className={`boolopt${picked ? ' is-picked' : ''}${markCorrect ? ' is-key' : ''}`}>
                          <input
                            type="radio"
                            name={`q${question.id}-${s.id}`}
                            checked={picked}
                            disabled={checked}
                            onChange={() => setBool(s.id, val)}
                          />
                          <span aria-hidden="true">{val ? 'Yes' : 'No'}</span>
                          <span className="sr-only">{val ? 'Yes' : 'No'}</span>
                        </label>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : isDragDrop ? (
        <div className="dd">
          <div className="dd__pool" aria-label="Values">
            <h3>Values</h3>
            <p className="dd__help">On phone: tap a value, then tap a target box.</p>
            {(question.options ?? []).map((opt) => (
              <button
                key={opt.id}
                type="button"
                className={`dd__chip${Object.values(dragAssignments).includes(opt.id) ? ' is-used' : ''}`}
                draggable={!checked}
                onDragStart={() => setDraggedId(opt.id)}
                onDragEnd={() => setDraggedId(null)}
                onClick={() => setDraggedId((cur) => (cur === opt.id ? null : opt.id))}
                aria-pressed={draggedId === opt.id}
              >
                {opt.text}
              </button>
            ))}
          </div>
          <div className="dd__targets" aria-label="Answer area">
            <h3>Answer area</h3>
            {(question.targets ?? []).map((t) => {
              const assignedId = dragAssignments[t.id];
              const assigned = (question.options ?? []).find((o) => o.id === assignedId);
              const expected = (question.options ?? []).find((o) => o.id === expectedAssignments.get(t.id));
              const right = showFeedback && assignedId === expectedAssignments.get(t.id);
              const wrong = showFeedback && assignedId && assignedId !== expectedAssignments.get(t.id);
              return (
                <div key={t.id} className="dd__row">
                  <span className="dd__label">{t.text}</span>
                  <div
                    className={`dd__drop${right ? ' is-correct' : ''}${wrong ? ' is-wrong' : ''}`}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => onDrop(t.id, e)}
                    onClick={() => {
                      if (draggedId) assignTarget(t.id, draggedId);
                    }}
                    onPointerUp={(e) => {
                      if (e.pointerType === 'touch' && draggedId) assignTarget(t.id, draggedId);
                    }}
                    role="button"
                    aria-label={`Drop target for ${t.text}`}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if ((e.key === 'Enter' || e.key === ' ') && draggedId) {
                        e.preventDefault();
                        assignTarget(t.id, draggedId);
                      }
                    }}
                  >
                    {assigned ? assigned.text : 'Drop value here'}
                  </div>
                  {!checked && assignedId && (
                    <button type="button" className="btn" onClick={() => clearTarget(t.id)}>Clear</button>
                  )}
                  {showFeedback && wrong && expected && (
                    <span className="dd__hint">Correct: {expected.text}</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ) : isHotspotDropdown ? (
        <div className="hsdd" aria-label="Hotspot answer area">
          {(question.targets ?? []).map((t) => {
            const assignedId = dragAssignments[t.id] ?? '';
            const right = showFeedback && assignedId === expectedAssignments.get(t.id);
            const wrong = showFeedback && assignedId && assignedId !== expectedAssignments.get(t.id);
            const expected = (question.options ?? []).find((o) => o.id === expectedAssignments.get(t.id));
            return (
              <label key={t.id} className={`hsdd__row${right ? ' is-correct' : ''}${wrong ? ' is-wrong' : ''}`}>
                <span className="hsdd__label">{t.text}</span>
                <select
                  value={assignedId}
                  disabled={checked}
                  onChange={(e) => assignTarget(t.id, e.target.value)}
                >
                  <option value="">Select...</option>
                  {(question.options ?? []).map((opt) => (
                    <option key={opt.id} value={opt.id}>{opt.text}</option>
                  ))}
                </select>
                {showFeedback && wrong && expected && (
                  <span className="hsdd__hint">Correct: {expected.text}</span>
                )}
              </label>
            );
          })}
        </div>
      ) : (
        <ul className="options" role={isMulti ? 'group' : 'radiogroup'}>
          {options.map((opt) => {
            const picked = selected.includes(opt.id);
            const markCorrect = showFeedback && correctSet.has(opt.id);
            const markWrong = showFeedback && picked && !correctSet.has(opt.id);
            return (
              <li key={opt.id}>
                <label className={`opt${picked ? ' is-picked' : ''}${markCorrect ? ' is-correct' : ''}${markWrong ? ' is-wrong' : ''}`}>
                  <input
                    type={isMulti ? 'checkbox' : 'radio'}
                    name={`q${question.id}`}
                    checked={picked}
                    disabled={checked}
                    onChange={() => toggleOption(opt.id)}
                  />
                  <span className="opt__id">{opt.id}</span>
                  <span className="opt__text">{opt.text}</span>
                  {markCorrect && <span className="opt__flag" aria-label="Correct answer">✓</span>}
                  {markWrong && <span className="opt__flag opt__flag--x" aria-label="Your incorrect choice">✗</span>}
                </label>
              </li>
            );
          })}
        </ul>
      )}

      {!suppressFeedback && !checked && (
        <button
          className="btn btn--primary"
          onClick={check}
          disabled={!isAnswered(question, currentResponse)}
        >
          Check answer
        </button>
      )}

      {showFeedback && result && (
        <div className={`verdict ${result.correct ? 'verdict--ok' : 'verdict--no'}`} role="status">
          <strong>{result.correct ? 'Correct' : 'Not quite'}</strong>
          {result.partial && (
            <span> — {result.partial.got} of {result.partial.total} statements right</span>
          )}
        </div>
      )}

      {showFeedback && (revealImmediately || result) && (
        <div className="explain">
          <span className="explain__label">Why</span>
          <p>{question.explanation}</p>
        </div>
      )}
    </article>
  );
}

function renderBlank(line: string) {
  const parts = line.split('___');
  if (parts.length === 1) return line;
  return parts.map((p, i) => (
    <span key={i}>
      {p}
      {i < parts.length - 1 && <span className="blank">answer</span>}
    </span>
  ));
}

function labelForType(t: Question['type']): string {
  switch (t) {
    case 'single': return 'Single choice';
    case 'multiple': return 'Multiple choice';
    case 'hotspot-select': return 'Hotspot';
    case 'hotspot-dropdown': return 'Hotspot dropdown';
    case 'hotspot-boolean': return 'Yes / No';
    case 'drag-drop': return 'Drag & drop';
  }
}
