import { useLayering } from '@cards/hooks/useLayering';
import { NoteCard } from './NoteCard';
import type { Note } from '../api/useGetNotes';

export const NotesList = ({ data }: { data: Note[] }) => {
  const { zIndexById, bringToFront } = useLayering<string | number>(
    data.map((note) => note.$id)
  );

  return (
    <div>
      {data.map((note) => (
        <NoteCard
          key={note.$id}
          note={note}
          zIndex={zIndexById[note.$id] ?? 1}
          onActivate={() => bringToFront(note.$id)}
        />
      ))}
    </div>
  );
};
