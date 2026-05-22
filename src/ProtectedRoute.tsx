import { Navigate, Outlet } from 'react-router';
import { ROUTES } from './routes';
import { useAuth } from './shared/hooks/useAuth';

export const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  return <Outlet />;
};
