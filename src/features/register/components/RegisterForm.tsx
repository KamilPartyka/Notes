import { useForm } from 'react-hook-form';
import { Link } from 'react-router';

export type RegisterFormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

interface RegisterFormProps {
  onSubmit: (data: RegisterFormData) => void;
}

export const RegisterForm = ({ onSubmit }: RegisterFormProps) => {
  const { register, handleSubmit } = useForm<RegisterFormData>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  return (
    <form
      className="flex flex-col gap-3 items-center w-full max-w-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-2xl font-bold">Zarejestruj się</h1>
      <input
        placeholder="Imię"
        className="w-full rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        {...register('name')}
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        {...register('email')}
      />
      <input
        type="password"
        placeholder="Hasło"
        className="w-full rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        {...register('password')}
      />
      <input
        type="password"
        placeholder="Powtórz hasło"
        className="w-full rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        {...register('confirmPassword')}
      />
      <button
        type="submit"
        className="w-full rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
      >
        Zarejestruj
      </button>

      <p className="text-sm text-gray-600 mt-2">
        Masz już konto?{' '}
        <Link to="/login" className="text-indigo-600 hover:underline">
          Zaloguj się
        </Link>
      </p>
    </form>
  );
};
