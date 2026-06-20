import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getNotesQueryKey } from '@cards/api/useGetNotes';
import { DATABASE_ID, NOTES_TABLE_ID, tablesDB } from '@/appwrite';
import type { NoteModel } from '@/shared/types/noteModel';
import { useAuth } from '@/shared/hooks/useAuth';

export const useUpdateNoteMutation = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  return useMutation({
    mutationFn: async (note: NoteModel) => {
      const response = await tablesDB.updateRow({
        databaseId: DATABASE_ID,
        tableId: NOTES_TABLE_ID,
        rowId: note.id,
        data: {
          body: note.body,
          colorHeader: note.colorHeader,
          colorBody: note.colorBody,
          colorText: note.colorText,
          positionX: note.positionX,
          positionY: note.positionY,
        },
      });
      return response;
    },
    onSuccess: () => {
      if (user) queryClient.invalidateQueries({ queryKey: getNotesQueryKey(user.$id) });
    },
  });
};
