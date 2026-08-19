import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import type { Question } from '../types';
import { QuestionCard } from '../components/QuestionCard';
import { useAppData } from '../hooks/useAppData';
import { grade, type Response } from '../services/grading';
import { useQuestionBank } from '../hooks/useQuestionBank';

function sample(arr: Question[], n: number): Question[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a.slice(0, Math.min(n, a.length));
}

type Phase = 'setup' | 'running' | 'done';

export function Exam() {
  const { data, recordAttempt } = useAppData();
  const { questions, meta } = useQuestionBank();
  const [phase, setPhase] = useState<Phase>('setup');
  const [paper, setPaper] = useState<Question[]>([]);
  const [pos, setPos] = useState(0);
  const [responses, setResponses] = useState<Record<number, Response | null>>({});
  const [secondsLeft, setSecondsLeft] = useState(0);
  const timer = useRef<number | null>(null);

  const start = useCallback(() => {
    setPaper(sample(questions, data.settings.examLength));
    setPos(0);
    setResponses({});
    setSecondsLeft(data.settings.examMinutes * 60);
    setPhase('running');
  }, [data.settings.examLength, data.settings.examMinutes]);

  const finish = useCallback(() => {
    if (timer.current) window.clearInterval(timer.current);
    setPhase('done');
    for (const q of paper) {
      const r = responses[q.id];
      const correct = r ? grade(q, r).correct : false;
      recordAttempt({ questionId: q.id, correct, at: new Date().toISOString(), mode: 'exam' });
    }
  }, [paper, responses, recordAttempt]);

  useEffect(() => {
    if (phase !== 'running') return;
    timer.current = window.setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          window.clearInterval(timer.current!);
          finish();
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  const setResp = useCallback((qid: number, r: Response | null) => {
    setResponses((prev) => ({ ...prev, [qid]: r }));
  }, []);

  const scored = useMemo(() => {
    if (phase !== 'done') return { right: 0, total: paper.length };
    let right = 0;
    for (const q of paper) {
      const r = responses[q.id];
      if (r && grade(q, r).correct) right += 1;
    }
    return { right, total: paper.length };
  }, [phase, paper, responses]);

  if (phase === 'setup') {
    return (
      <div className="page">
        <header className="page__head">
          <p className="eyebrow">Exam simulation</p>
          <h1>{meta.code}: timed practice exam</h1>
          <p className="lede">
            {data.settings.examLength} questions in {data.settings.examMinutes} minutes.
            Feedback is hidden until you submit.
          </p>
        </header>
        <div className="exam-setup">
          <ul className="exam-setup__facts">
            <li><strong>{data.settings.examLength}</strong> questions</li>
            <li><strong>{data.settings.examMinutes}</strong> minutes</li>
            <li>Passing target <strong>70%</strong></li>
          </ul>
          <button className="btn btn--primary btn--lg" onClick={start}>Begin exam</button>
          <p className="hint">Change the length and time in <Link to="/settings">Settings</Link>.</p>
        </div>
      </div>
    );
  }

  if (phase === 'done') {
    const pct = scored.total ? Math.round((scored.right / scored.total) * 100) : 0;
    const passed = pct >= 70;
    return (
      <div className="page">
        <div className={`result ${passed ? 'result--pass' : 'result--fail'}`}>
          <p className="result__verdict">{passed ? 'Passed' : 'Keep practicing'}</p>
          <div className="result__score">{pct}%</div>
          <p className="result__detail">{scored.right} of {scored.total} correct</p>
          <div className="result__actions">
            <button className="btn btn--primary" onClick={start}>Retake</button>
            <Link className="btn" to="/">Dashboard</Link>
          </div>
        </div>

        <h2 className="review-heading">Review your answers</h2>
        <div className="exam-review">
          {paper.map((q, i) => (
            <div key={q.id} className="exam-review__item">
              <div className="exam-review__idx">Q{i + 1}</div>
              <QuestionCard
                question={q}
                shuffleOptions={false}
                revealImmediately
                onResponseChange={() => {}}
                resetToken={`done-${q.id}`}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // running
  const q = paper[pos];
  const mm = String(Math.floor(secondsLeft / 60)).padStart(2, '0');
  const ss = String(secondsLeft % 60).padStart(2, '0');
  const answeredCount = paper.filter((p) => responses[p.id]).length;

  return (
    <div className="page">
      <div className="exam-bar">
        <span className="exam-bar__pos">Question {pos + 1} of {paper.length}</span>
        <span className={`exam-bar__timer${secondsLeft <= 60 ? ' is-low' : ''}`} aria-live="polite">
          {mm}:{ss}
        </span>
        <span className="exam-bar__answered">{answeredCount} answered</span>
      </div>

      <QuestionCard
        question={q}
        shuffleOptions={data.settings.shuffleOptions}
        revealImmediately={false}
        suppressFeedback
        onResponseChange={(r) => setResp(q.id, r)}
        resetToken={`exam-${q.id}`}
      />

      <div className="exam-nav">
        <button className="btn" onClick={() => setPos((p) => Math.max(0, p - 1))} disabled={pos === 0}>
          Previous
        </button>
        {pos + 1 < paper.length ? (
          <button className="btn btn--primary" onClick={() => setPos((p) => p + 1)}>Next</button>
        ) : (
          <button className="btn btn--primary" onClick={finish}>Submit exam</button>
        )}
      </div>

      <div className="exam-grid" role="navigation" aria-label="Jump to question">
        {paper.map((p, i) => (
          <button
            key={p.id}
            className={`exam-grid__dot${i === pos ? ' is-current' : ''}${responses[p.id] ? ' is-answered' : ''}`}
            onClick={() => setPos(i)}
            aria-label={`Question ${i + 1}${responses[p.id] ? ', answered' : ''}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
