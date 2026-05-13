import type { Note } from '@cards/api/useGetNotes';
import { NoteCardContainer } from '@cards/components/NoteCardContainer';
import { useLayering } from '@cards/hooks/useLayering';

interface NotesListProps {
  data: Note[];
}

export const NotesList = ({ data }: NotesListProps) => {
  const { zIndexById, bringToFront } = useLayering<string | number>(
    data.map((note) => note.$id)
  );

  return (
    <div>
      {data.map((note) => (
        <NoteCardContainer
          key={note.$id}
          note={note}
          zIndex={zIndexById[note.$id] ?? 1}
          onActivate={() => bringToFront(note.$id)}
        />
      ))}
    </div>
  );
};
