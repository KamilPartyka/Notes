import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import type { LoginFormData } from '../api/useLogin';

interface LoginFormProps {
  onSubmit: (data: LoginFormData) => void;
}

export const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <form
      className="flex flex-col gap-3 items-center w-full max-w-sm"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-2xl font-bold">Zaloguj się</h1>
      <input
        type="email"
        placeholder="Email"
        className="w-full rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...register('email')}
      />
      <input
        type="password"
        placeholder="Hasło"
        className="w-full rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...register('password')}
      />
      <button
        type="submit"
        className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Zaloguj
      </button>

      <p className="text-sm text-gray-600 mt-2">
        Nie masz konta?{' '}
        <Link to="/register" className="text-blue-600 hover:underline">
          Zarejestruj się
        </Link>
      </p>
    </form>
  );
};
