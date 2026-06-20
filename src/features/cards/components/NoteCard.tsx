import { memo } from 'react';
import { DeleteCardButton } from '@cards/components/DeleteCardButton';
import type { NoteModel } from '@/shared/types/noteModel';

interface NoteCardProps {
  note: NoteModel;
  position: { x: number; y: number };
  isDragging: boolean;
  zIndex: number;
  textAreaRef: React.RefObject<HTMLTextAreaElement | null>;
  onHeaderMouseDown: (e: React.MouseEvent) => void;
  onCardMouseDown: () => void;
  onBodyChange: (body: string) => void;
  onBodyInput: () => void;
  onDelete: () => void;
  isUpdating: boolean;
  cardRef: React.RefObject<HTMLDivElement | null>;
}

export const NoteCard = memo(
  ({
    note,
    position,
    isDragging,
    zIndex,
    textAreaRef,
    onHeaderMouseDown,
    onCardMouseDown,
    onBodyChange,
    onBodyInput,
    onDelete,
    isUpdating,
    cardRef,
  }: NoteCardProps) => (
    <div
      className="absolute w-100 rounded-[5px] shadow-md"
      ref={cardRef}
      onMouseDown={onCardMouseDown}
      style={{
        backgroundColor: note.colorBody,
        left: `${position.x}px`,
        top: `${position.y}px`,
        zIndex,
      }}
    >
      {/* Header */}
      <div
        onMouseDown={onHeaderMouseDown}
        className={`flex items-center justify-between rounded-tl-[5px] rounded-tr-[5px] ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        style={{ backgroundColor: note.colorHeader }}
      >
        <DeleteCardButton onClick={onDelete} />
        {isUpdating ? (
          <span className="text-sm text-gray-500">Saving...</span>
        ) : null}
      </div>

      {/* Body */}
      <div className="rounded-tl-[5px] rounded-tr-[5px] p-1">
        <textarea
          ref={textAreaRef}
          className="h-full w-full resize-none border-none bg-inherit text-base focus:outline-none"
          style={{ color: note.colorText }}
          value={note.body}
          onChange={(e) => onBodyChange(e.target.value)}
          onInput={onBodyInput}
        ></textarea>
      </div>
    </div>
  )
);
