import { useGetNotes } from '@/features/cards/api/useGetNotes';
import { NotesList } from '@/features/cards/components/NoteList';

export const NotesPage = () => {
  const { data, isPending, isError } = useGetNotes();

  if (isPending)
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        Loading...
      </div>
    );

  if (isError)
    return (
      <div className="flex h-screen w-screen items-center justify-center text-red-600">
        Error loading notes.
      </div>
    );

  return <NotesList data={data} />;
};
