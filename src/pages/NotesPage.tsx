import { useAuth } from '@shared/hooks/useAuth';
import { useGetNotes } from '@/features/cards/api/useGetNotes';
import { NotesList } from '@/features/cards/components/NoteList';
import { Menu } from '@/features/sidebar/components/Menu';

export const NotesPage = () => {
  const { user } = useAuth();
  const { data, isPending, isError } = useGetNotes({
    userId: user?.$id || '',
  });

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

  return (
    <>
      <Menu />
      <NotesList data={data} />
    </>
  );
};
