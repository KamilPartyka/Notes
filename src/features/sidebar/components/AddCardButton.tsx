import { cn } from '@/shared/utils/cn';
import type { CardColor, NoteColorKey } from '../constants/noteColors';

interface AddCardButtonProps {
  color: CardColor;
  colorKey: NoteColorKey;
  onClick: () => void;
}

export const AddCardButton = ({
  color,
  colorKey,
  onClick,
}: AddCardButtonProps) => {
  return (
    <button
      type="button"
      aria-label={`Add ${colorKey} card`}
      title={`Add ${colorKey} card`}
      onClick={onClick}
      className={cn(
        'cursor-pointer rounded-full p-4 transition-transform hover:scale-110'
      )}
      style={{ backgroundColor: color.header }}
    ></button>
  );
};
