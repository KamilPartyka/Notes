import { Link } from 'react-router';

export const HomePage = () => {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-linear-to-tr from-indigo-500 via-purple-500 to-pink-500 p-6">
      <div className="max-w-3xl w-full bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="px-4">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
            Notes — Twoje szybkie notatki
          </h1>
          <p className="text-gray-700 mb-6">
            Szybkie i proste notatki w chmurze. Zaloguj się, aby synchronizować,
            albo korzystaj lokalnie bez logowania.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/login"
              className="inline-block text-center rounded bg-blue-600 px-5 py-3 text-white font-semibold shadow hover:bg-blue-700"
            >
              Zaloguj
            </Link>

            <Link
              to="/notes-offline"
              className="inline-block text-center rounded border border-gray-200 bg-white px-5 py-3 text-gray-800 font-medium shadow-sm hover:shadow"
            >
              Używaj offline
            </Link>
          </div>
        </div>

        <div className="px-4">
          <div className="rounded-lg bg-linear-to-tr from-white to-white/80 p-6 shadow-inner">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Funkcje
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Szybkie tworzenie notatek</li>
              <li>Kolorowe karty i organizacja</li>
              <li>Synchronizacja po zalogowaniu</li>
              <li>Dostęp offline bez konta</li>
            </ul>
          </div>
          <p className="mt-6 text-sm text-gray-600">
            Nie masz konta?{' '}
            <Link to="/register" className="text-blue-600 hover:underline">
              Zarejestruj się
            </Link>{' '}
            — zajmie to chwilę.
          </p>
        </div>
      </div>
    </div>
  );
};
