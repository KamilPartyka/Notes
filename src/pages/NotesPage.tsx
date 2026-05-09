import { useNotes } from '@/features/cards/api/useNotes';
import { NotesList } from '@/features/cards/components/NoteList';

export const NotesPage = () => {
  const { data, isPending, isError } = useNotes();

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error loading notes.</div>;

  return <NotesList data={data} />;
};
