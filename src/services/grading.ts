import type { GradeResult, Question } from '../types';

/** Response shapes by question type. */
export type Response =
  | { kind: 'options'; selected: string[] }
  | { kind: 'boolean'; answers: Record<string, boolean> }
  | { kind: 'dragdrop'; assignments: Record<string, string> };

export function isAnswered(q: Question, r: Response | null): boolean {
  if (!r) return false;
  if (r.kind === 'options') return r.selected.length > 0;
  if (r.kind === 'dragdrop') {
    return q.targets ? q.targets.every((t) => Boolean(r.assignments[t.id])) : false;
  }
  return q.statements ? q.statements.every((s) => s.id in r.answers) : false;
}

function sameSet(a: string[], b: string[]): boolean {
  if (a.length !== b.length) return false;
  const sb = new Set(b);
  return a.every((x) => sb.has(x));
}

export function grade(q: Question, r: Response): GradeResult {
  if (r.kind === 'options') {
    const correct = q.correct ?? [];
    return { correct: sameSet(r.selected, correct) };
  }
  if (r.kind === 'dragdrop') {
    const targets = q.targets ?? [];
    // A few source questions assign the identical correct value to two
    // different targets (e.g. two dropdowns that both resolve to "SAS
    // token") via two distinct option rows with the same text. The user
    // can't tell those rows apart, so correctness is judged by the text
    // they picked for each target, not which specific row's id happened to
    // land there.
    const textById = new Map((q.options ?? []).map((o) => [o.id, o.text]));
    const expectedText = new Map<string, string>();
    for (const raw of q.correct ?? []) {
      const idx = raw.indexOf(':');
      if (idx <= 0) continue;
      const targetId = raw.slice(0, idx);
      const optionId = raw.slice(idx + 1);
      expectedText.set(targetId, textById.get(optionId) ?? optionId);
    }
    let got = 0;
    for (const t of targets) {
      const assignedId = r.assignments[t.id];
      if (assignedId && textById.get(assignedId) === expectedText.get(t.id)) got += 1;
    }
    return { correct: got === targets.length, partial: { got, total: targets.length } };
  }
  // boolean grid — all statements must match
  const statements = q.statements ?? [];
  let got = 0;
  for (const s of statements) if (r.answers[s.id] === s.answer) got += 1;
  return { correct: got === statements.length, partial: { got, total: statements.length } };
}
