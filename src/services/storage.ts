import type { AppData, CardState, CertificateId, Settings } from '../types';
import { questionBanks } from '../data/certificates';

const STORAGE_KEY = 'azure-cert-study-v2';
const LEGACY_STORAGE_KEY = 'ai901-study-v1';
const SESSION_KEY_PREFIX = 'ai901-study-session-v1-';
const SESSION_KEYS = ['ai901-study-session-v1-learn', 'ai901-study-session-v1-review'];
const DATA_VERSION = 2;

const allQuestions = Object.values(questionBanks).flat();

export const defaultSettings: Settings = {
  selectedCertificate: 'ai-901',
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
  for (const q of allQuestions) cards[q.id] = freshCard(q.id);
  return { version: DATA_VERSION, cards, attempts: [], settings: { ...defaultSettings } };
}

/** Load app data, tolerating corrupt or partial storage. */
export function loadData(): AppData {
  let parsed: Partial<AppData> | null = null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY) ?? localStorage.getItem(LEGACY_STORAGE_KEY);
    if (raw) parsed = JSON.parse(raw) as Partial<AppData>;
  } catch {
    parsed = null;
  }

  const base = makeInitialData();
  if (!parsed || typeof parsed !== 'object') return base;

  // Merge cards, ensuring every current question has a card.
  const cards: Record<number, CardState> = {};
  for (const q of allQuestions) {
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

function clearSessionSnapshots(certificateId?: CertificateId): void {
  try {
    for (const key of SESSION_KEYS) localStorage.removeItem(key);
    for (let i = localStorage.length - 1; i >= 0; i -= 1) {
      const key = localStorage.key(i);
      if (!key || !key.startsWith(SESSION_KEY_PREFIX)) continue;
      if (!certificateId || key.includes(`-${certificateId}-`)) localStorage.removeItem(key);
    }
  } catch {
    /* ignore */
  }
}

export function resetProgressForCertificate(certificateId: CertificateId, currentData?: AppData): AppData {
  const current = currentData ?? loadData();
  const certQuestions = questionBanks[certificateId] ?? [];
  const certQuestionIds = new Set(certQuestions.map((q) => q.id));

  const cards = { ...current.cards };
  for (const q of certQuestions) cards[q.id] = freshCard(q.id);

  const data: AppData = {
    ...current,
    cards,
    attempts: current.attempts.filter((a) => !certQuestionIds.has(a.questionId)),
  };

  saveData(data);
  clearSessionSnapshots(certificateId);
  return data;
}

/** Reset everything including settings (full wipe). */
export function resetAll(): AppData {
  try {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(LEGACY_STORAGE_KEY);
    clearSessionSnapshots();
  } catch {
    /* ignore */
  }
  return makeInitialData();
}
