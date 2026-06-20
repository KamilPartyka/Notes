import { memo, useState } from 'react';
import { useDebounce } from '@shared/hooks/useDebounce';
import { NoteCard } from '@cards/components/NoteCard';
import { useAutoGrow } from '@cards/hooks/useAutoGrow';
import { usePosition } from '@cards/hooks/usePosition';
import { useUpdateNote } from '@cards/hooks/useUpdateNote';
import { useNotesService } from '@/shared/hooks/useNotesService';
import type { NoteModel } from '@/shared/types/noteModel';

interface NoteCardContainerProps {
  note: NoteModel;
  onActivate: () => void;
  zIndex: number;
}

export const NoteCardContainer = memo(
  ({ note, onActivate, zIndex }: NoteCardContainerProps) => {
    const { positionX, positionY } = note;
    const initialPosition = { x: positionX, y: positionY };

    const [localNote, setLocalNote] = useState(note);
    const debouncedNote = useDebounce(localNote, 600);
    const svc = useNotesService();
    const { autoGrow, textAreaRef } = useAutoGrow();
    const { position, cardRef, handleMouseDown, isDragging } = usePosition({
      initialPosition,
    });

    useUpdateNote({
      debouncedNote,
      note,
      updateNote: svc.update,
      setLocalNote,
      position,
    });

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
        isUpdating={svc.updatePending}
        onDelete={() => svc.remove(note.id)}
      />
    );
  }
);
