import type { AppData, CardState, Settings } from '../types';
import { questions } from '../data/questions';

const STORAGE_KEY = 'ai901-study-v1';
const SESSION_KEYS = ['ai901-study-session-v1-learn', 'ai901-study-session-v1-review'];
const DATA_VERSION = 1;

export const defaultSettings: Settings = {
  showExplanationImmediately: true,
  shuffleOptions: false,
  examLength: 20,
  examMinutes: 30,
  theme: 'system',
};

function freshCard(questionId: number): CardState {
  return {
    questionId,
    status: 'new',
    due: new Date().toISOString(),
    interval: 0,
    ease: 2.5,
    streak: 0,
    reps: 0,
    correctReps: 0,
    lastReviewed: null,
  };
}

export function makeInitialData(): AppData {
  const cards: Record<number, CardState> = {};
  for (const q of questions) cards[q.id] = freshCard(q.id);
  return { version: DATA_VERSION, cards, attempts: [], settings: { ...defaultSettings } };
}

/** Load app data, tolerating corrupt or partial storage. */
export function loadData(): AppData {
  let parsed: Partial<AppData> | null = null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) parsed = JSON.parse(raw) as Partial<AppData>;
  } catch {
    parsed = null;
  }

  const base = makeInitialData();
  if (!parsed || typeof parsed !== 'object') return base;

  // Merge cards, ensuring every current question has a card.
  const cards: Record<number, CardState> = {};
  for (const q of questions) {
    const existing = parsed.cards?.[q.id];
    cards[q.id] = existing && typeof existing === 'object'
      ? { ...freshCard(q.id), ...existing, questionId: q.id }
      : freshCard(q.id);
  }

  return {
    version: DATA_VERSION,
    cards,
    attempts: Array.isArray(parsed.attempts) ? parsed.attempts.slice(-2000) : [],
    settings: { ...defaultSettings, ...(parsed.settings ?? {}) },
  };
}

export function saveData(data: AppData): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    /* storage may be unavailable; fail silently */
  }
}

export function resetProgress(): AppData {
  const data = makeInitialData();
  saveData(data);
  try {
    for (const key of SESSION_KEYS) localStorage.removeItem(key);
  } catch {
    /* ignore */
  }
  return data;
}

/** Reset everything including settings (full wipe). */
export function resetAll(): AppData {
  try {
    localStorage.removeItem(STORAGE_KEY);
    for (const key of SESSION_KEYS) localStorage.removeItem(key);
  } catch {
    /* ignore */
  }
  return makeInitialData();
}
