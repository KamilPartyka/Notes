import { useNavigate } from 'react-router';
import {
  RegisterForm,
  type RegisterFormData,
} from '@/features/register/components/RegisterForm';

export const RegisterPage = () => {
  const navigate = useNavigate();

  const onSubmit = (data: RegisterFormData) => {
    // Placeholder: tutaj można podłączyć rzeczywiste API rejestracji.
    console.log('Register:', data);
    // Po rejestracji przejdź do logowania
    navigate('/login');
  };

  return (
    <div className="flex flex-col gap-5 h-screen w-screen items-center justify-center">
      <RegisterForm onSubmit={onSubmit} />
    </div>
  );
};
