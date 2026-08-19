import { useEffect, useState } from 'react';
import { useAppData } from '../hooks/useAppData';
import { certificates } from '../data/certificates';
import { useQuestionBank } from '../hooks/useQuestionBank';

export function SettingsPage() {
  const { data, updateSettings, doResetProgress, doResetAll } = useAppData();
  const { questions } = useQuestionBank();
  const s = data.settings;
  const [confirm, setConfirm] = useState<null | 'progress' | 'all'>(null);

  useEffect(() => {
    const max = Math.max(5, questions.length);
    if (s.examLength > max) updateSettings({ examLength: max });
  }, [questions.length, s.examLength, updateSettings]);

  return (
    <div className="page">
      <header className="page__head">
        <p className="eyebrow">Preferences</p>
        <h1>Settings</h1>
      </header>

      <section className="settings-group">
        <h2>Certificate</h2>
        <p className="certpick__label">Active certificate</p>
        <div className="certpick__grid certpick__grid--settings">
          {certificates.map((c) => (
            <button
              key={c.id}
              className={`certpick__card${s.selectedCertificate === c.id ? ' is-active' : ''}`}
              onClick={() => updateSettings({ selectedCertificate: c.id })}
              aria-pressed={s.selectedCertificate === c.id}
            >
              <span className="certpick__code">{c.code}</span>
              <span className="certpick__name">{c.name}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="settings-group">
        <h2>Studying</h2>
        <label className="toggle">
          <input
            type="checkbox"
            checked={s.showExplanationImmediately}
            onChange={(e) => updateSettings({ showExplanationImmediately: e.target.checked })}
          />
          <span>Show explanation as soon as I check an answer</span>
        </label>
        <label className="toggle">
          <input
            type="checkbox"
            checked={s.shuffleOptions}
            onChange={(e) => updateSettings({ shuffleOptions: e.target.checked })}
          />
          <span>Shuffle answer options</span>
        </label>
      </section>

      <section className="settings-group">
        <h2>Exam</h2>
        <label className="field">
          <span>Questions per exam</span>
          <input
            type="number"
            min={5}
            max={Math.max(5, questions.length)}
            value={s.examLength}
            onChange={(e) => updateSettings({ examLength: clamp(+e.target.value, 5, Math.max(5, questions.length)) })}
          />
        </label>
        <label className="field">
          <span>Time limit (minutes)</span>
          <input
            type="number"
            min={5}
            max={120}
            value={s.examMinutes}
            onChange={(e) => updateSettings({ examMinutes: clamp(+e.target.value, 5, 120) })}
          />
        </label>
      </section>

      <section className="settings-group">
        <h2>Appearance</h2>
        <div className="segmented" role="radiogroup" aria-label="Theme">
          {(['system', 'light', 'dark'] as const).map((t) => (
            <button
              key={t}
              className={`segmented__btn${s.theme === t ? ' is-on' : ''}`}
              role="radio"
              aria-checked={s.theme === t}
              onClick={() => updateSettings({ theme: t })}
            >
              {t[0].toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
      </section>

      <section className="settings-group settings-group--danger">
        <h2>Reset</h2>
        <p className="danger-note">These actions clear data stored in this browser and cannot be undone.</p>
        <div className="danger-actions">
          <button className="btn btn--danger" onClick={() => setConfirm('progress')}>
            Reset progress
          </button>
          <button className="btn btn--danger" onClick={() => setConfirm('all')}>
            Reset everything
          </button>
        </div>
      </section>

      {confirm && (
        <div className="modal" role="dialog" aria-modal="true" aria-labelledby="confirm-title">
          <div className="modal__box">
            <h3 id="confirm-title">
              {confirm === 'progress' ? 'Reset selected certificate progress?' : 'Reset everything?'}
            </h3>
            <p>
                  {confirm === 'progress'
                    ? 'Only the selected certificate progress and history will be cleared. Other certificates are kept.'
                : 'Progress, history, and settings will all be restored to defaults.'}
            </p>
            <div className="modal__actions">
              <button className="btn" onClick={() => setConfirm(null)}>Cancel</button>
              <button
                className="btn btn--danger"
                onClick={() => {
                      if (confirm === 'progress') doResetProgress(s.selectedCertificate);
                  else doResetAll();
                  setConfirm(null);
                }}
              >
                Yes, reset
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function clamp(n: number, lo: number, hi: number): number {
  if (Number.isNaN(n)) return lo;
  return Math.min(hi, Math.max(lo, n));
}
