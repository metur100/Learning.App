import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAppData } from '../hooks/useAppData';
import { certificates, getCertificateMeta } from '../data/certificates';

const links = [
  { to: '/', label: 'Dashboard', end: true },
  { to: '/learn', label: 'Learn' },
  { to: '/review', label: 'Review' },
  { to: '/exam', label: 'Exam' },
  { to: '/browse', label: 'Browse' },
  { to: '/settings', label: 'Settings' },
];

export function Layout() {
  const { data, updateSettings } = useAppData();
  const cert = getCertificateMeta(data.settings.selectedCertificate);
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const t = data.settings.theme;
    const root = document.documentElement;
    if (t === 'system') root.removeAttribute('data-theme');
    else root.setAttribute('data-theme', t);
  }, [data.settings.theme]);

  useEffect(() => {
    document.title = `${cert.code} Study - ${cert.name}`;
  }, [cert.code, cert.name]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="shell">
      <a href="#main" className="skip">Skip to content</a>
      <header className="topbar">
        <div className="brand">
          <span className="brand__mark" aria-hidden="true">{cert.code}</span>
          <span className="brand__name">{cert.name}</span>
        </div>
        <button
          className="nav-toggle"
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <span className="nav-toggle__bars" aria-hidden="true">{menuOpen ? 'X' : '≡'}</span>
        </button>
        <nav id="primary-nav" className={`nav${menuOpen ? ' is-open' : ''}`} aria-label="Primary">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className="nav__link"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <label className="nav__cert" aria-label="Select certificate">
            <span>Certificate</span>
            <select
              value={data.settings.selectedCertificate}
              onChange={(e) => {
                updateSettings({ selectedCertificate: e.target.value as typeof data.settings.selectedCertificate });
                setMenuOpen(false);
              }}
            >
              {certificates.map((c) => (
                <option key={c.id} value={c.id}>{c.code}</option>
              ))}
            </select>
          </label>
        </nav>
      </header>
      <main id="main" className="content">
        <Outlet />
      </main>
    </div>
  );
}
