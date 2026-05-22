import { BrowserRouter, Route, Routes } from 'react-router';
import { HomePage } from '@/pages/HomePage';
import { LoginPage } from '@/pages/LoginPage';
import { NotesPage } from '@/pages/NotesPage';
import { ROUTES } from './routes';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.home} element={<HomePage />} />
        <Route path={ROUTES.login} element={<LoginPage />} />
        <Route path={ROUTES.notes} element={<NotesPage />} />
      </Routes>
    </BrowserRouter>
  );
}
