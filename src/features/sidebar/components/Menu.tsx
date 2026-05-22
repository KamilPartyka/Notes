import { NOTE_COLORS, NOTE_COLORS_KEYS } from '@sidebar//constants/noteColors';
import { AddCardButton } from '@sidebar/components/AddCardButton';
import { useAddCard } from '@sidebar/hooks/useAddCard';
import { useLogout } from '@/features/login/api/useLogout';
import { cn } from '@/shared/utils/cn';

export const Menu = () => {
  const { addCard } = useAddCard();
  const { mutate } = useLogout();

  return (
    <div className="absolute top-1/2 left-2 -translate-y-1/2">
      <div className="rounded-full bg-gray-200 p-2 w-12">
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
      <button
        type="button"
        onClick={() => mutate()}
        className={cn(
          'cursor-pointer mt-2 rounded-full py-1 px-3 transition-transform hover:scale-110'
        )}
      >
        Logout
      </button>
    </div>
  );
};
