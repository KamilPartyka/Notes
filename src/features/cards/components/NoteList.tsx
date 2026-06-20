import { NoteCardContainer } from '@cards/components/NoteCardContainer';
import { useLayering } from '@cards/hooks/useLayering';
import type { NoteModel } from '@/shared/types/noteModel';

interface NotesListProps {
  data: NoteModel[];
}

export const NotesList = ({ data }: NotesListProps) => {
  const { zIndexById, bringToFront } = useLayering<string>(
    data.map((note) => note.id)
  );

  return (
    <div>
      {data.map((note) => (
        <NoteCardContainer
          key={note.id}
          note={note}
          zIndex={zIndexById[note.id] ?? 1}
          onActivate={() => bringToFront(note.id)}
        />
      ))}
    </div>
  );
};
