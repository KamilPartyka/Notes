import { useLayering } from '@cards/hooks/useLayering';
import { NoteCardContainer } from './NoteCardContainer';
import type { Note } from '../api/useGetNotes';

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
