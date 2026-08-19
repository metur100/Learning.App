import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import { useAppData } from '../hooks/useAppData';
import { isDue } from '../services/scheduler';
import { useQuestionBank } from '../hooks/useQuestionBank';

export function Dashboard() {
  const { data } = useAppData();
  const { questions, meta } = useQuestionBank();

  const stats = useMemo(() => {
    const cards = questions
      .map((q) => data.cards[q.id])
      .filter((c): c is NonNullable<typeof c> => Boolean(c));
    const by = { new: 0, learning: 0, review: 0, mastered: 0 };
    for (const c of cards) by[c.status] += 1;
    const now = new Date();
    const due = cards.filter((c) => c.status !== 'new' && isDue(c, now)).length;
    const seen = cards.filter((c) => c.reps > 0).length;
    const totalReps = cards.reduce((s, c) => s + c.reps, 0);
    const correctReps = cards.reduce((s, c) => s + c.correctReps, 0);
    const accuracy = totalReps ? Math.round((correctReps / totalReps) * 100) : 0;
    return { by, due, seen, accuracy, total: questions.length };
  }, [data.cards, questions]);

  const completion = Math.round((stats.seen / stats.total) * 100);
  const newCount = stats.by.new;

  return (
    <div className="page">
      <header className="page__head">
        <p className="eyebrow">Your progress</p>
        <h1>Study dashboard</h1>
        <p className="lede">
          {meta.code}: {stats.total} questions, spaced so the ones you miss come back sooner.
        </p>
      </header>

      <section className="hero-stat" aria-label="Cards due now">
        <div className="hero-stat__num">{stats.due}</div>
        <div className="hero-stat__body">
          <p className="hero-stat__label">due for review right now</p>
          {stats.due > 0 ? (
            <Link className="btn btn--primary" to="/review">Start review</Link>
          ) : newCount > 0 ? (
            <Link className="btn btn--primary" to="/learn">Learn {newCount} new</Link>
          ) : (
            <span className="hero-stat__done">All caught up. Nicely done.</span>
          )}
        </div>
      </section>

      <div className="statgrid">
        <StatTile label="New" value={stats.by.new} tone="new" />
        <StatTile label="Learning" value={stats.by.learning} tone="learning" />
        <StatTile label="Review" value={stats.by.review} tone="review" />
        <StatTile label="Mastered" value={stats.by.mastered} tone="mastered" />
      </div>

      <section className="bars">
        <Bar label="Questions attempted" value={completion} caption={`${stats.seen} / ${stats.total}`} />
        <Bar label="Overall accuracy" value={stats.accuracy} caption={`${stats.accuracy}%`} />
      </section>

      <section className="quicklinks">
        <QuickLink to="/learn" title="Learn" desc="Work through new questions at your pace." />
        <QuickLink to="/exam" title="Exam simulation" desc="Timed, scored, exam-style run." />
        <QuickLink to="/browse" title="Browse" desc="Filter and jump to any question." />
      </section>
    </div>
  );
}

function StatTile({ label, value, tone }: { label: string; value: number; tone: string }) {
  return (
    <div className={`tile tile--${tone}`}>
      <span className="tile__value">{value}</span>
      <span className="tile__label">{label}</span>
    </div>
  );
}

function Bar({ label, value, caption }: { label: string; value: number; caption: string }) {
  return (
    <div className="bar">
      <div className="bar__top">
        <span>{label}</span>
        <span className="bar__cap">{caption}</span>
      </div>
      <div className="bar__track" role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100}>
        <div className="bar__fill" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function QuickLink({ to, title, desc }: { to: string; title: string; desc: string }) {
  return (
    <Link to={to} className="qlink">
      <span className="qlink__title">{title}</span>
      <span className="qlink__desc">{desc}</span>
      <span className="qlink__arrow" aria-hidden="true">→</span>
    </Link>
  );
}
