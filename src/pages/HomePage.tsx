import { Link } from 'react-router';

export const HomePage = () => {
  return (
    <div className="flex flex-col gap-5 h-screen w-screen items-center justify-center">
      <h1>Welcome to the Notes App! Please log in to view your notes.</h1>
      <Link
        to="/login"
        className="ml-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Go to Login
      </Link>
    </div>
  );
};
