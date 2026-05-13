import { useCreateNoteMutation } from '@sidebar/api/useCreateNoteMutation';
import { ID } from 'appwrite';
import { NOTE_COLORS, type NoteColorKey } from '../constants/noteColors';

export const useAddCard = () => {
  const { mutate: createNote } = useCreateNoteMutation();

  const addCard = (selectedColor: NoteColorKey) => {
    createNote({
      $id: ID.unique(),
      userId: import.meta.env.VITE_APPWRITE_MY_USER_ID, // TODO
      body: 'New note',
      colorHeader: NOTE_COLORS[selectedColor].header,
      colorBody: NOTE_COLORS[selectedColor].body,
      colorText: NOTE_COLORS[selectedColor].text,
      positionX: Math.floor(Math.random() * screen.width * 0.6), // Random position, but not too close to the right edge
      positionY: Math.floor(Math.random() * screen.height * 0.6), // Random position, but not too close to the bottom edge
    });
  };

  return { addCard };
};
