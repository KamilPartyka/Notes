import {
  RegisterForm,
  type RegisterFormData,
} from '@register/components/RegisterForm';
import { useNavigate } from 'react-router';

export const RegisterPage = () => {
  const navigate = useNavigate();

  const onSubmit = (data: RegisterFormData) => {
    console.log('Register:', data);

    navigate('/login');
  };

  return (
    <div className="flex flex-col gap-5 h-screen w-screen items-center justify-center">
      <RegisterForm onSubmit={onSubmit} />
    </div>
  );
};
