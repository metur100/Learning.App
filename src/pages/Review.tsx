import { useMemo } from 'react';
import { StudySession } from '../components/StudySession';
import { useAppData } from '../hooks/useAppData';
import { questions } from '../data/questions';
import { isDue } from '../services/scheduler';

export function Review() {
  const { data } = useAppData();
  const queue = useMemo(() => {
    const now = new Date();
    return questions
      .filter((q) => {
        const c = data.cards[q.id];
        return c && c.status !== 'new' && isDue(c, now);
      })
      .sort((a, b) => +new Date(data.cards[a.id].due) - +new Date(data.cards[b.id].due));
  }, [data.cards]);

  return (
    <StudySession
      queue={queue}
      mode="review"
      emptyTitle="Nothing due right now"
      emptyBody="Come back later, or learn new questions to add more to your review pool."
    />
  );
}
