import { NotesList } from '@/features/cards/components/NoteList';
import { Menu } from '@/features/sidebar/components/Menu';
import { useNotesService } from '@/shared/hooks/useNotesService';

export const NotesPage = () => {
  const { notes, isPending, isError } = useNotesService();

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
      <NotesList data={notes} />
    </>
  );
};
