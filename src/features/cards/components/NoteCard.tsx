import { memo } from 'react';
import { Trash } from '@/shared/icons/Trash';
import { useAutoGrow } from '@cards/hooks/useAutoGrow';
import { usePosition } from '@cards/hooks/usePosition';

interface NoteCardProps {
  note: {
    $id: string | number;
    body: string;
    colors: string;
    position: string;
  };
  onActivate: () => void;
  zIndex: number;
}

export const NoteCard = memo(({ note, onActivate, zIndex }: NoteCardProps) => {
  const body = JSON.parse(note.body);
  const colors = JSON.parse(note.colors);
  const initialPosition = JSON.parse(note.position);

  const { autoGrow, textAreaRef } = useAutoGrow();
  const { position, cardRef, handleMouseDown, isDragging } = usePosition({
    initialPosition,
  });

  return (
    <div
      className="absolute w-100 rounded-[5px] shadow-md"
      ref={cardRef}
      onMouseDown={onActivate}
      style={{
        backgroundColor: colors.colorBody,
        left: `${position.x}px`,
        top: `${position.y}px`,
        zIndex,
      }}
    >
      {/* Header */}
      <div
        onMouseDown={handleMouseDown}
        className={`flex items-center justify-between rounded-tl-[5px] rounded-tr-[5px] p-1.5 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        style={{ backgroundColor: colors.colorHeader }}
      >
        <Trash />
      </div>
      {/* Body */}
      <div className="rounded-tl-[5px] rounded-tr-[5px] p-1">
        <textarea
          ref={textAreaRef}
          className="h-full w-full resize-none border-none bg-inherit text-base focus:outline-none"
          style={{ color: colors.colorText }}
          defaultValue={body}
          onInput={autoGrow}
        ></textarea>
      </div>
    </div>
  );
});
