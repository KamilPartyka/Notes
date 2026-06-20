import { useEffect } from 'react';
import type { NoteModel } from '@/shared/types/noteModel';

interface UseUpdateNoteProps {
  debouncedNote: NoteModel;
  note: NoteModel;
  updateNote: (note: NoteModel) => void;
  setLocalNote: React.Dispatch<React.SetStateAction<NoteModel>>;
  position: { x: number; y: number };
}

export const useUpdateNote = ({
  debouncedNote,
  note,
  position,
  setLocalNote,
  updateNote,
}: UseUpdateNoteProps) => {
  useEffect(() => {
    setLocalNote((prevLocalNote) => ({
      ...prevLocalNote,
      positionX: position.x,
      positionY: position.y,
    }));
  }, [position.x, position.y, setLocalNote]);

  useEffect(() => {
    const isCardChanged =
      debouncedNote.body !== note.body ||
      debouncedNote.colorHeader !== note.colorHeader ||
      debouncedNote.colorBody !== note.colorBody ||
      debouncedNote.colorText !== note.colorText ||
      debouncedNote.positionX !== note.positionX ||
      debouncedNote.positionY !== note.positionY;

    if (isCardChanged) {
      updateNote({ ...debouncedNote });
    }
  }, [debouncedNote, note, updateNote]);
};
