import { NOTE_COLORS, type NoteColorKey } from '@sidebar/constants/noteColors';
import { useNotesService } from '@/shared/hooks/useNotesService';

export const useAddCard = () => {
  const svc = useNotesService();

  const addCard = (selectedColor: NoteColorKey) => {
    svc.create({
      body: 'New note',
      colorHeader: NOTE_COLORS[selectedColor].header,
      colorBody: NOTE_COLORS[selectedColor].body,
      colorText: NOTE_COLORS[selectedColor].text,
      positionX: Math.floor(Math.random() * window.innerWidth * 0.6),
      positionY: Math.floor(Math.random() * window.innerHeight * 0.6),
    });
  };

  return { addCard };
};
