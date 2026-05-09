import { memo, useState } from 'react';
import { useAutoGrow } from '@cards/hooks/useAutoGrow';
import { usePosition } from '@cards/hooks/usePosition';
import type { Note } from '@/features/cards/api/useGetNotes';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { useUpdateNoteMutation } from '@/features/cards/api/useUpdateNoteMutation';
import { useUpdateNote } from '@/features/cards/hooks/useUpdateNote';
import { NoteCard } from './NoteCard';

interface NoteCardContainerProps {
  note: Note;
  onActivate: () => void;
  zIndex: number;
}

export const NoteCardContainer = memo(
  ({ note, onActivate, zIndex }: NoteCardContainerProps) => {
    /**
     * Position has to be passed to usePosition as initialPosition,
     * because position is being updated in useUpdateNote and if we
     * pass position directly to usePosition, it will cause position
     * to reset on every update
     */
    const { positionX, positionY } = note;
    const initialPosition = { x: positionX, y: positionY };

    const [localNote, setLocalNote] = useState(note);
    const debouncedNote = useDebounce(localNote, 1000);
    const { mutate: updateNote } = useUpdateNoteMutation();
    const { autoGrow, textAreaRef } = useAutoGrow();
    const { position, cardRef, handleMouseDown, isDragging } = usePosition({
      initialPosition,
    });

    useUpdateNote({ debouncedNote, note, updateNote, setLocalNote, position });

    return (
      <NoteCard
        note={localNote}
        position={position}
        isDragging={isDragging}
        zIndex={zIndex}
        textAreaRef={textAreaRef}
        onHeaderMouseDown={handleMouseDown}
        onCardMouseDown={onActivate}
        onBodyChange={(body) => setLocalNote({ ...localNote, body })}
        onBodyInput={autoGrow}
        cardRef={cardRef}
      />
    );
  }
);
