import { useLogout } from '@login/api/useLogout';
import { Link } from 'react-router';
import { AddCardButton } from '@sidebar/components/AddCardButton';
import { NOTE_COLORS, NOTE_COLORS_KEYS } from '@sidebar/constants/noteColors';
import { SIDEBAR_WIDTH } from '@sidebar/constants/sidebarWidth';
import { useAddCard } from '@sidebar/hooks/useAddCard';
import { useAppMode } from '@/shared/hooks/useAppMode';

export const Menu = () => {
  const { addCard } = useAddCard();
  const { mutate: logout } = useLogout();
  const { mode } = useAppMode();

  return (
    <aside
      className="h-screen flex flex-col items-center py-4 bg-gray-200 justify-between"
      style={{ width: `${SIDEBAR_WIDTH}px` }}
    >
      <div className="flex flex-col items-center">
        <p className="pb-4">LOGO</p>
        <Link to="/" className="cursor-pointer">
          <svg
            className="transition-transform hover:scale-110"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.336 2.253a1 1 0 0 1 1.328 0l9 8a1 1 0 0 1-1.328 1.494L20 11.45V19a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7.55l-.336.297a1 1 0 0 1-1.328-1.494zM6 9.67V19h3v-5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5h3V9.671l-6-5.333zM13 19v-4h-2v4z"
              fill="currentColor"
            />
          </svg>
        </Link>

        <div className="flex flex-col items-center mt-4">
          <span>Dodaj</span>
          <ul>
            {NOTE_COLORS_KEYS.map((colorKey) => {
              const color = NOTE_COLORS[colorKey];

              return (
                <li key={colorKey} className="mb-2 text-gray-800 last:mb-0">
                  <AddCardButton
                    color={color}
                    colorKey={colorKey}
                    onClick={() => addCard(colorKey)}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {mode === 'online' ? (
        <button
          type="button"
          onClick={() => logout()}
          className="cursor-pointer mt-2 rounded-full py-1 px-3 transition-transform hover:scale-110 text-red-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 52 52"
            fill="currentColor"
          >
            <path d="M21 48.5v-3c0-.8-.7-1.5-1.5-1.5h-10c-.8 0-1.5-.7-1.5-1.5v-33C8 8.7 8.7 8 9.5 8h10c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5H6C3.8 2 2 3.8 2 6v40c0 2.2 1.8 4 4 4h13.5c.8 0 1.5-.7 1.5-1.5" />
            <path d="M49.6 27c.6-.6.6-1.5 0-2.1L36.1 11.4c-.6-.6-1.5-.6-2.1 0l-2.1 2.1c-.6.6-.6 1.5 0 2.1l5.6 5.6c.6.6.2 1.7-.7 1.7H15.5c-.8 0-1.5.6-1.5 1.4v3c0 .8.7 1.6 1.5 1.6h21.2c.9 0 1.3 1.1.7 1.7l-5.6 5.6c-.6.6-.6 1.5 0 2.1l2.1 2.1c.6.6 1.5.6 2.1 0z" />
          </svg>
        </button>
      ) : (
        <div className="mt-2 text-xs text-gray-500">Offline</div>
      )}
    </aside>
  );
};
