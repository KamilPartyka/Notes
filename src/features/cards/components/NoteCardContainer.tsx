import { memo, useState } from 'react';
import { useDebounce } from '@shared/hooks/useDebounce';
import type { Note } from '@cards/api/useGetNotes';
import { useUpdateNoteMutation } from '@cards/api/useUpdateNoteMutation';
import { NoteCard } from '@cards/components/NoteCard';
import { useAutoGrow } from '@cards/hooks/useAutoGrow';
import { useDeleteNote } from '@cards/hooks/useDeleteNote';
import { usePosition } from '@cards/hooks/usePosition';
import { useUpdateNote } from '@cards/hooks/useUpdateNote';

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
    const debouncedNote = useDebounce(localNote, 600);
    const { mutate: updateNote, isPending: isUpdating } =
      useUpdateNoteMutation();
    const { handleDeleteNote } = useDeleteNote();
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
        isUpdating={isUpdating}
        onDelete={() => handleDeleteNote(note.$id)}
      />
    );
  }
);
