import type { CertificateId, Question } from '../types';
import { questions as ai901Base } from './questions';
import { az204Questions } from './banks/az204.generated';
import { az305Questions } from './banks/az305.generated';

export interface CertificateMeta {
  id: CertificateId;
  code: string;
  name: string;
}

export const certificates: CertificateMeta[] = [
  { id: 'ai-901', code: 'AI-901', name: 'Azure AI Fundamentals' },
  { id: 'az-204', code: 'AZ-204', name: 'Developing Solutions for MS Azure' },
  { id: 'az-305', code: 'AZ-305', name: 'Designing Microsoft Azure Infrastructure Solutions' },
];

function withCertId(items: Question[], certificateId: CertificateId, idOffset: number): Question[] {
  return items.map((q) => ({
    ...q,
    id: q.id + idOffset,
    certificateId,
  }));
}

export const questionBanks: Record<CertificateId, Question[]> = {
  'ai-901': withCertId(ai901Base, 'ai-901', 0),
  'az-204': withCertId(az204Questions, 'az-204', 200000),
  'az-305': withCertId(az305Questions, 'az-305', 300000),
};

export function getCertificateMeta(id: CertificateId): CertificateMeta {
  return certificates.find((c) => c.id === id) ?? certificates[0];
}

export function getQuestionsForCertificate(id: CertificateId): Question[] {
  return questionBanks[id] ?? questionBanks['ai-901'];
}
