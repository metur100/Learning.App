import type { CardState, SrsStatus } from '../types';

const DAY_MS = 24 * 60 * 60 * 1000;

function addDays(from: Date, days: number): string {
  return new Date(from.getTime() + days * DAY_MS).toISOString();
}

/** True if the card is due on or before `now`. */
export function isDue(card: CardState, now = new Date()): boolean {
  return new Date(card.due).getTime() <= now.getTime();
}

/**
 * Anki-style scheduling. A correct answer graduates the card through
 * learning -> review -> mastered and grows the interval by the ease factor.
 * An incorrect answer resets the card to learning and schedules it soon.
 */
export function schedule(card: CardState, correct: boolean, now = new Date()): CardState {
  const next: CardState = {
    ...card,
    reps: card.reps + 1,
    correctReps: card.correctReps + (correct ? 1 : 0),
    lastReviewed: now.toISOString(),
  };

  if (!correct) {
    next.streak = 0;
    next.ease = Math.max(1.3, card.ease - 0.2);
    next.status = 'learning';
    next.interval = 0;
    // See again in ~10 minutes.
    next.due = new Date(now.getTime() + 10 * 60 * 1000).toISOString();
    return next;
  }

  next.streak = card.streak + 1;
  next.ease = Math.min(3.0, card.ease + 0.05);

  let status: SrsStatus;
  let interval: number;

  if (card.status === 'new' || card.status === 'learning') {
    if (next.streak >= 2) {
      status = 'review';
      interval = 1;
    } else {
      status = 'learning';
      interval = 0;
      next.due = new Date(now.getTime() + 10 * 60 * 1000).toISOString();
      next.status = status;
      next.interval = interval;
      return next;
    }
  } else {
    // review or mastered
    interval = Math.max(1, Math.round((card.interval || 1) * next.ease));
    status = interval >= 21 ? 'mastered' : 'review';
  }

  next.status = status;
  next.interval = interval;
  next.due = addDays(now, interval);
  return next;
}
