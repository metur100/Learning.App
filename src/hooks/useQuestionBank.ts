import { useMemo } from 'react';
import { getCertificateMeta, getQuestionsForCertificate } from '../data/certificates';
import { useAppData } from './useAppData';

export function useQuestionBank() {
  const { data } = useAppData();
  const selectedCertificate = data.settings.selectedCertificate;

  return useMemo(() => {
    const meta = getCertificateMeta(selectedCertificate);
    const questions = getQuestionsForCertificate(selectedCertificate);
    return { selectedCertificate, meta, questions };
  }, [selectedCertificate]);
}
