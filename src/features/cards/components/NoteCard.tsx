import { memo, useState } from 'react';
import { Trash } from '@/shared/icons/Trash';
import { useAutoGrow } from '@cards/hooks/useAutoGrow';
import { usePosition } from '@cards/hooks/usePosition';
import type { Note } from '@/features/cards/api/useGetNotes';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { useUpdateNoteMutation } from '@/features/cards/api/useUpdateNoteMutation';
import { useUpdateNote } from '@/features/cards/hooks/useUpdateNote';

interface NoteCardProps {
  note: Note;
  onActivate: () => void;
  zIndex: number;
}

export const NoteCard = memo(({ note, onActivate, zIndex }: NoteCardProps) => {
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
    <div
      className="absolute w-100 rounded-[5px] shadow-md"
      ref={cardRef}
      onMouseDown={onActivate}
      style={{
        backgroundColor: localNote.colorBody,
        left: `${position.x}px`,
        top: `${position.y}px`,
        zIndex,
      }}
    >
      {/* Header */}
      <div
        onMouseDown={handleMouseDown}
        className={`flex items-center justify-between rounded-tl-[5px] rounded-tr-[5px] p-1.5 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        style={{ backgroundColor: localNote.colorHeader }}
      >
        <Trash />
      </div>
      {/* Body */}
      <div className="rounded-tl-[5px] rounded-tr-[5px] p-1">
        <textarea
          ref={textAreaRef}
          className="h-full w-full resize-none border-none bg-inherit text-base focus:outline-none"
          style={{ color: localNote.colorText }}
          value={localNote.body}
          onChange={(e) => setLocalNote({ ...localNote, body: e.target.value })}
          onInput={autoGrow}
        ></textarea>
      </div>
    </div>
  );
});
