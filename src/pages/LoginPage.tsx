import { useLogin, type LoginFormData } from '@login/api/useLogin';
import { LoginForm } from '@login/components/LoginForm';
import { Navigate } from 'react-router';
import { useAuth } from '@shared/hooks/useAuth';
import { ROUTES } from '@/routes';

export const LoginPage = () => {
  const { mutate } = useLogin();
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to={ROUTES.NOTES} replace />;
  }

  const onSubmit = (data: LoginFormData) => {
    mutate(data);
  };

  return (
    <div className="flex flex-col gap-5 h-screen w-screen items-center justify-center">
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
};
