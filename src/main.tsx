import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import './styles.css';
import { AppDataProvider } from './hooks/useAppData';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Learn } from './pages/Learn';
import { Review } from './pages/Review';
import { Exam } from './pages/Exam';
import { Browse } from './pages/Browse';
import { SettingsPage } from './pages/SettingsPage';

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'learn', element: <Learn /> },
      { path: 'review', element: <Review /> },
      { path: 'exam', element: <Exam /> },
      { path: 'browse', element: <Browse /> },
      { path: 'settings', element: <SettingsPage /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppDataProvider>
      <RouterProvider router={router} />
    </AppDataProvider>
  </StrictMode>,
);
