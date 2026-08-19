import { useMemo } from 'react';
import { StudySession } from '../components/StudySession';
import { useAppData } from '../hooks/useAppData';
import { useQuestionBank } from '../hooks/useQuestionBank';

export function Learn() {
  const { data } = useAppData();
  const { questions, selectedCertificate } = useQuestionBank();
  const queue = useMemo(
    () => questions.filter((q) => data.cards[q.id]?.status === 'new').slice(0, 15),
    [data.cards],
  );
  return (
    <StudySession
      queue={queue}
      mode="learn"
      certificateKey={selectedCertificate}
      emptyTitle="No new questions left"
      emptyBody="You have started every question at least once. Head to Review to reinforce them."
    />
  );
}
