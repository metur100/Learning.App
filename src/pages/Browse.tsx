import { useMemo, useState } from 'react';
import type { Question } from '../types';
import { QuestionCard } from '../components/QuestionCard';
import { useAppData } from '../hooks/useAppData';
import { questions } from '../data/questions';

const TYPES: { value: string; label: string }[] = [
  { value: 'all', label: 'All types' },
  { value: 'single', label: 'Single choice' },
  { value: 'multiple', label: 'Multiple choice' },
  { value: 'hotspot-select', label: 'Hotspot' },
  { value: 'hotspot-boolean', label: 'Yes / No' },
  { value: 'drag-drop', label: 'Drag & drop' },
];

export function Browse() {
  const { data } = useAppData();
  const [q, setQ] = useState('');
  const [topic, setTopic] = useState('all');
  const [type, setType] = useState('all');
  const [status, setStatus] = useState('all');
  const [openId, setOpenId] = useState<number | null>(null);

  const topics = useMemo(
    () => ['all', ...Array.from(new Set(questions.map((x) => x.topic))).sort()],
    [],
  );

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return questions.filter((item) => {
      if (topic !== 'all' && item.topic !== topic) return false;
      if (type !== 'all' && item.type !== type) return false;
      if (status !== 'all' && data.cards[item.id]?.status !== status) return false;
      if (needle) {
        const hay = (item.prompt + ' ' + (item.options?.map((o) => o.text).join(' ') ?? '')).toLowerCase();
        if (!hay.includes(needle)) return false;
      }
      return true;
    });
  }, [q, topic, type, status, data.cards]);

  return (
    <div className="page page--browse">
      <header className="page__head">
        <p className="eyebrow">Question bank</p>
        <h1>Browse all {questions.length} questions</h1>
      </header>

      <div className="filters">
        <input
          className="filters__search"
          type="search"
          placeholder="Search text…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          aria-label="Search questions"
        />
        <select value={topic} onChange={(e) => setTopic(e.target.value)} aria-label="Filter by topic">
          {topics.map((t) => <option key={t} value={t}>{t === 'all' ? 'All topics' : t}</option>)}
        </select>
        <select value={type} onChange={(e) => setType(e.target.value)} aria-label="Filter by type">
          {TYPES.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
        </select>
        <select value={status} onChange={(e) => setStatus(e.target.value)} aria-label="Filter by status">
          <option value="all">Any status</option>
          <option value="new">New</option>
          <option value="learning">Learning</option>
          <option value="review">Review</option>
          <option value="mastered">Mastered</option>
        </select>
      </div>

      <p className="filters__count">{filtered.length} matching</p>

      <ul className="browse-list">
        {filtered.map((item) => (
          <li key={item.id}>
            <BrowseRow
              item={item}
              status={data.cards[item.id]?.status ?? 'new'}
              open={openId === item.id}
              onToggle={() => setOpenId((cur) => (cur === item.id ? null : item.id))}
              shuffle={data.settings.shuffleOptions}
            />
          </li>
        ))}
      </ul>
      {filtered.length === 0 && <p className="empty-inline">No questions match those filters.</p>}
    </div>
  );
}

function BrowseRow({
  item,
  status,
  open,
  onToggle,
  shuffle,
}: {
  item: Question;
  status: string;
  open: boolean;
  onToggle: () => void;
  shuffle: boolean;
}) {
  const firstLine = item.prompt.split('\n').find((l) => l.trim()) ?? '';
  return (
    <div className={`brow${open ? ' is-open' : ''}`}>
      <button className="brow__head" onClick={onToggle} aria-expanded={open}>
        <span className="brow__num">{item.number}</span>
        <span className="brow__summary">{firstLine}</span>
        <span className={`dot dot--${status}`} title={status} aria-label={status} />
        <span className="brow__chev" aria-hidden="true">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="brow__body">
          <QuestionCard
            question={item}
            shuffleOptions={shuffle}
            revealImmediately
            resetToken={open ? 'open' : 'closed'}
          />
        </div>
      )}
    </div>
  );
}
