import { mocks as notes } from '@/assets/mocks';
import { NoteCard } from '@cards/components/NoteCard';

export const NotesPage = () => {
  return (
    <div>
      {notes.map((note) => (
        <NoteCard note={note} key={note.$id} />
      ))}
    </div>
  );
};
