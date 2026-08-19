import { NavLink, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppData } from '../hooks/useAppData';

const links = [
  { to: '/', label: 'Dashboard', end: true },
  { to: '/learn', label: 'Learn' },
  { to: '/review', label: 'Review' },
  { to: '/exam', label: 'Exam' },
  { to: '/browse', label: 'Browse' },
  { to: '/settings', label: 'Settings' },
];

export function Layout() {
  const { data } = useAppData();

  useEffect(() => {
    const t = data.settings.theme;
    const root = document.documentElement;
    if (t === 'system') root.removeAttribute('data-theme');
    else root.setAttribute('data-theme', t);
  }, [data.settings.theme]);

  return (
    <div className="shell">
      <a href="#main" className="skip">Skip to content</a>
      <header className="topbar">
        <div className="brand">
          <span className="brand__mark" aria-hidden="true">901</span>
          <span className="brand__name">Azure&nbsp;AI Fundamentals</span>
        </div>
        <nav className="nav" aria-label="Primary">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className="nav__link">
              {l.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main id="main" className="content">
        <Outlet />
      </main>
    </div>
  );
}
