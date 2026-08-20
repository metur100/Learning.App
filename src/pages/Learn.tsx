import { useMemo } from 'react';
import { StudySession } from '../components/StudySession';
import { useAppData } from '../hooks/useAppData';
import { useQuestionBank } from '../hooks/useQuestionBank';

export function Learn() {
  const { data } = useAppData();
  const { questions, selectedCertificate } = useQuestionBank();
  const queue = useMemo(
    () =>
      questions.filter((q) => {
        const status = data.cards[q.id]?.status;
        return status === 'new' || status === 'learning';
      }),
    [data.cards],
  );
  return (
    <StudySession
      queue={queue}
      mode="learn"
      certificateKey={selectedCertificate}
      emptyTitle="No questions to learn right now"
      emptyBody="You have started every question and none are stuck in learning. Head to Review to reinforce them."
    />
  );
}
