import { BrowserRouter, Route, Routes } from 'react-router';
import { HomePage } from '@/pages/HomePage';
import { LoginPage } from '@/pages/LoginPage';
import { NotesPage } from '@/pages/NotesPage';
import { ProtectedRoute } from './ProtectedRoute';
import { ROUTES } from './routes';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />

        <Route element={<ProtectedRoute />}>
          <Route path={ROUTES.NOTES} element={<NotesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
