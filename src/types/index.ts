/** Domain and app-wide type definitions for the AI-901 study app. */

export type CertificateId = 'ai-901' | 'az-204' | 'az-305';

export type QuestionType =
  | 'single' // one correct option
  | 'multiple' // two or more correct options
  | 'hotspot-select' // "complete the sentence" — pick one option
  | 'hotspot-dropdown' // one or more dropdown blanks
  | 'hotspot-boolean' // per-statement Yes/No grid
  | 'drag-drop'; // assign values to one or more targets

/** Where a question's answer key came from. */
export type KeySource = 'source' | 'domain';

export interface Option {
  id: string; // 'A' | 'B' | ...
  text: string;
}

export interface BooleanStatement {
  id: string;
  text: string;
  answer: boolean; // true = Yes, false = No
}

export interface DragDropTarget {
  id: string;
  text: string;
}

export interface Question {
  id: number;
  certificateId?: CertificateId;
  number: number;
  type: QuestionType;
  topic: string;
  prompt: string;
  /** Optional code block shown above the options (hotspot code fills). */
  codeContext?: string;
  /** Present for single / multiple / hotspot-select. */
  options?: Option[];
  /** IDs of the correct options (single/multiple/hotspot-select). */
  correct?: string[];
  /** Present for hotspot-boolean. */
  statements?: BooleanStatement[];
  /** Present for drag-drop. */
  targets?: DragDropTarget[];
  keySource: KeySource;
  explanation: string;
}

/** Spaced-repetition scheduling state for a single question. */
export type SrsStatus = 'new' | 'learning' | 'review' | 'mastered';

export interface CardState {
  questionId: number;
  status: SrsStatus;
  /** ISO date string of the next time this card is due. */
  due: string;
  /** Current interval in days. */
  interval: number;
  /** Ease factor (SM-2 style), starts at 2.5. */
  ease: number;
  /** Consecutive correct answers. */
  streak: number;
  /** Total times answered. */
  reps: number;
  /** Total times answered correctly. */
  correctReps: number;
  /** ISO date string of the last review, or null. */
  lastReviewed: string | null;
}

export interface AttemptRecord {
  questionId: number;
  correct: boolean;
  /** ISO timestamp. */
  at: string;
  /** Which mode produced the attempt. */
  mode: 'learn' | 'review' | 'exam' | 'browse';
}

export interface Settings {
  selectedCertificate: CertificateId;
  showExplanationImmediately: boolean;
  shuffleOptions: boolean;
  examLength: number;
  examMinutes: number;
  theme: 'system' | 'light' | 'dark';
}

export interface AppData {
  version: number;
  cards: Record<number, CardState>;
  attempts: AttemptRecord[];
  settings: Settings;
}

/** Result of grading a user's response to a question. */
export interface GradeResult {
  correct: boolean;
  /** For hotspot-boolean: number of statements answered correctly. */
  partial?: { got: number; total: number };
}
