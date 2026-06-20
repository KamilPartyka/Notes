import {
  useEffect,
  useLayoutEffect,
  useRef,
  type Dispatch,
  type SetStateAction,
} from 'react';
import type { NoteModel } from '@/shared/types/noteModel';

interface UseUpdateNoteProps {
  debouncedNote: NoteModel;
  note: NoteModel;
  updateNote: (note: NoteModel) => void;
  setLocalNote: Dispatch<SetStateAction<NoteModel>>;
  position: { x: number; y: number };
}

export const useUpdateNote = ({
  debouncedNote,
  note,
  position,
  setLocalNote,
  updateNote,
}: UseUpdateNoteProps) => {
  const updateNoteRef = useRef(updateNote);
  useLayoutEffect(() => {
    updateNoteRef.current = updateNote;
  });

  useEffect(() => {
    setLocalNote((prev) => ({
      ...prev,
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
      updateNoteRef.current({ ...debouncedNote });
    }
  }, [debouncedNote, note]);
};
