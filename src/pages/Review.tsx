import { useMemo } from 'react';
import { StudySession } from '../components/StudySession';
import { useAppData } from '../hooks/useAppData';
import { useQuestionBank } from '../hooks/useQuestionBank';

export function Review() {
  const { data } = useAppData();
  const { questions, selectedCertificate } = useQuestionBank();
  const queue = useMemo(() => {
    return questions
      .filter((q) => {
        const c = data.cards[q.id];
        return c && c.status === 'review';
      })
      .sort((a, b) => +new Date(data.cards[a.id].due) - +new Date(data.cards[b.id].due));
  }, [data.cards]);

  return (
    <StudySession
      queue={queue}
      mode="review"
      certificateKey={selectedCertificate}
      sessionTitle="Review mode"
      sessionBody="This queue contains questions in review. Correct review answers move to mastered, and missed answers move to learning."
      emptyTitle="No questions in review yet"
      emptyBody="Answer questions correctly in Learn to move them into Review."
    />
  );
}
