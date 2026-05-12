import { useEffect } from 'react';
import type { Note } from '../api/useGetNotes';
import type { UseMutateFunction } from '@tanstack/react-query';
import type { Models } from 'appwrite';

interface UseUpdateNoteProps {
  debouncedNote: Note;
  note: Note;
  updateNote: UseMutateFunction<Models.DefaultRow, Error, Note, unknown>;
  setLocalNote: React.Dispatch<React.SetStateAction<Note>>;
  position: {
    x: number;
    y: number;
  };
}

/**
 * This hook is responsible for updating the note in the database when the
 * debouncedNote changes. It also updates the localNote's position when the
 * position changes.
 */
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
      updateNote({
        ...debouncedNote,
      });
    }
  }, [debouncedNote, note, updateNote]);
};
