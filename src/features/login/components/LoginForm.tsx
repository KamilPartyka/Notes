import { useForm } from 'react-hook-form';
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
      className="flex flex-col gap-3 items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-2xl font-bold">Login</h1>
      <input
        type="email"
        placeholder="Email"
        className="rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...register('email')}
      />
      <input
        type="password"
        placeholder="Password"
        className="rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...register('password')}
      />
      <button
        type="submit"
        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Log In
      </button>
    </form>
  );
};
