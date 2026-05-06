import { mocks as notes } from '@/assets/mocks';
import { NoteCard } from '@cards/components/NoteCard';
import { useLayering } from '@cards/hooks/useLayering';

export const NotesPage = () => {
  const { zIndexById, bringToFront } = useLayering<string | number>(
    notes.map((note) => note.$id)
  );

  return (
    <div>
      {notes.map((note) => (
        <NoteCard
          note={note}
          key={note.$id}
          zIndex={zIndexById[note.$id] ?? 1}
          onActivate={() => bringToFront(note.$id)}
        />
      ))}
    </div>
  );
};
