import { NOTE_COLORS, NOTE_COLORS_KEYS } from '@sidebar//constants/noteColors';
import { AddCardButton } from '@sidebar/components/AddCardButton';
import { useAddCard } from '@sidebar/hooks/useAddCard';

export const Menu = () => {
  const { addCard } = useAddCard();

  return (
    <div className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-gray-200 p-2">
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
  );
};
