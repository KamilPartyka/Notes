import { useDeleteNoteMutation } from '@/features/cards/api/useDeleteNoteMutation';
import { useGetNotes } from '@/features/cards/api/useGetNotes';
import { useUpdateNoteMutation } from '@/features/cards/api/useUpdateNoteMutation';
import { useCreateNoteMutation } from '@/features/sidebar/api/useCreateNoteMutation';
import { useAppMode } from '@/shared/hooks/useAppMode';
import { useAuth } from '@/shared/hooks/useAuth';
import { useOfflineNotes } from '@/shared/hooks/useOfflineNotes';
import type { NoteModel } from '@/shared/types/noteModel';

export const useNotesService = () => {
  const { mode } = useAppMode();
  const { user } = useAuth();
  const isOnline = mode === 'online';

  const offline = useOfflineNotes();

  const getNotesQuery = useGetNotes({
    userId: user?.$id || '',
    enabled: isOnline,
  });
  const createMutation = useCreateNoteMutation();
  const updateMutation = useUpdateNoteMutation();
  const deleteMutation = useDeleteNoteMutation();

  if (isOnline) {
    return {
      notes: (getNotesQuery.data ?? []) as NoteModel[],
      isPending: getNotesQuery.isPending,
      isError: getNotesQuery.isError,
      create: (note: Omit<NoteModel, 'id'>) =>
        createMutation.mutate({
          ...note,
          id: crypto.randomUUID(),
          userId: user?.$id ?? '',
        }),
      update: (note: NoteModel) => updateMutation.mutate(note),
      remove: (id: string) => deleteMutation.mutate({ id }),
      updatePending: updateMutation.isPending,
    } as const;
  }

  return {
    notes: offline.notes,
    isPending: false,
    isError: false,
    create: (note: Omit<NoteModel, 'id'>) => offline.createNote(note),
    update: (note: NoteModel) => offline.updateNote(note),
    remove: (id: string) => offline.deleteNote(id),
    updatePending: false,
  } as const;
};
