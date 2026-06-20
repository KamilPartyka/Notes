import { BrowserRouter, Route, Routes } from 'react-router';
import { HomePage } from '@/pages/HomePage';
import { LoginPage } from '@/pages/LoginPage';
import { NotesPage } from '@/pages/NotesPage';
import { RegisterPage } from '@/pages/RegisterPage';
import { AppModeProvider } from '@/shared/context/AppModeContext';
import { OfflineNotesProvider } from '@/shared/context/OfflineNotesContext';
import { ProtectedRoute } from './ProtectedRoute';
import { ROUTES } from './routes';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <AppModeProvider>
        <OfflineNotesProvider>
          <Routes>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
            <Route path={ROUTES.NOTES_OFFLINE} element={<NotesPage />} />
            <Route element={<ProtectedRoute />}>
              <Route path={ROUTES.NOTES} element={<NotesPage />} />
            </Route>
          </Routes>
        </OfflineNotesProvider>
      </AppModeProvider>
    </BrowserRouter>
  );
}
