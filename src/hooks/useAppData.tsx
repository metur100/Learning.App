import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import type { AppData, AttemptRecord, CardState, CertificateId, Settings } from '../types';
import { loadData, resetAll, resetProgressForCertificate, saveData } from '../services/storage';

interface AppDataContextValue {
  data: AppData;
  updateCard: (card: CardState) => void;
  recordAttempt: (attempt: AttemptRecord) => void;
  updateSettings: (patch: Partial<Settings>) => void;
  doResetProgress: (certificateId: CertificateId) => void;
  doResetAll: () => void;
}

const AppDataContext = createContext<AppDataContextValue | null>(null);

export function AppDataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<AppData>(() => loadData());
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    saveData(data);
  }, [data]);

  const updateCard = useCallback((card: CardState) => {
    setData((d) => ({ ...d, cards: { ...d.cards, [card.questionId]: card } }));
  }, []);

  const recordAttempt = useCallback((attempt: AttemptRecord) => {
    setData((d) => ({ ...d, attempts: [...d.attempts, attempt].slice(-2000) }));
  }, []);

  const updateSettings = useCallback((patch: Partial<Settings>) => {
    setData((d) => ({ ...d, settings: { ...d.settings, ...patch } }));
  }, []);

  const doResetProgress = useCallback(
    (certificateId: CertificateId) => setData((d) => resetProgressForCertificate(certificateId, d)),
    [],
  );
  const doResetAll = useCallback(() => setData(resetAll()), []);

  const value = useMemo(
    () => ({ data, updateCard, recordAttempt, updateSettings, doResetProgress, doResetAll }),
    [data, updateCard, recordAttempt, updateSettings, doResetProgress, doResetAll],
  );

  return <AppDataContext.Provider value={value}>{children}</AppDataContext.Provider>;
}

export function useAppData(): AppDataContextValue {
  const ctx = useContext(AppDataContext);
  if (!ctx) throw new Error('useAppData must be used within AppDataProvider');
  return ctx;
}
