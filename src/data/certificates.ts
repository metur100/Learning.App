import type { CertificateId, Question } from '../types';
import { questions as ai901Base } from './questions';
import { ai901NewQuestions } from './banks/ai901.generated';
import { az104Questions } from './banks/az104.generated';
import { az204Questions } from './banks/az204.generated';
import { az305Questions } from './banks/az305.generated';
import { az400Questions } from './banks/az400.generated';

export interface CertificateMeta {
  id: CertificateId;
  code: string;
  name: string;
}

export const certificates: CertificateMeta[] = [
  { id: 'ai-901', code: 'AI-901', name: 'Azure AI Fundamentals' },
  { id: 'az-104', code: 'AZ-104', name: 'MS Azure Administrator' },
  { id: 'az-204', code: 'AZ-204', name: 'Developing Solutions for MS Azure' },
  { id: 'az-305', code: 'AZ-305', name: 'MS Azure Infrastructure Solutions' },
  { id: 'az-400', code: 'AZ-400', name: 'MS DevOps Solutions' },
];

function withCertId(items: Question[], certificateId: CertificateId, idOffset: number): Question[] {
  return items.map((q) => ({
    ...q,
    id: q.id + idOffset,
    certificateId,
  }));
}

function mergeAi901(base: Question[], imported: Question[]): Question[] {
  const byNumber = new Map<number, Question>();

  for (const q of base) {
    byNumber.set(q.number, q);
  }

  // Only append numbers above the legacy base range (1-52).
  for (const q of imported) {
    if (q.number > 52) {
      byNumber.set(q.number, q);
    }
  }

  return [...byNumber.values()].sort((a, b) => a.number - b.number);
}

export const questionBanks: Record<CertificateId, Question[]> = {
  'ai-901': withCertId(mergeAi901(ai901Base, ai901NewQuestions), 'ai-901', 0),
  'az-104': withCertId(az104Questions, 'az-104', 100000),
  'az-204': withCertId(az204Questions, 'az-204', 200000),
  'az-305': withCertId(az305Questions, 'az-305', 300000),
  'az-400': withCertId(az400Questions, 'az-400', 400000),
};

export function getCertificateMeta(id: CertificateId): CertificateMeta {
  return certificates.find((c) => c.id === id) ?? certificates[0];
}

export function getQuestionsForCertificate(id: CertificateId): Question[] {
  return questionBanks[id] ?? questionBanks['ai-901'];
}
