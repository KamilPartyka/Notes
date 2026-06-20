import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getNotesQueryKey } from '@cards/api/useGetNotes';
import { DATABASE_ID, NOTES_TABLE_ID, tablesDB } from '@/appwrite';
import { useAuth } from '@/shared/hooks/useAuth';

interface DeleteNoteVariables {
  id: string;
}

export const useDeleteNoteMutation = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  return useMutation({
    mutationFn: async ({ id }: DeleteNoteVariables) => {
      const response = await tablesDB.deleteRow({
        databaseId: DATABASE_ID,
        tableId: NOTES_TABLE_ID,
        rowId: id,
      });

      return response;
    },
    onSuccess: () => {
      if (user) queryClient.invalidateQueries({ queryKey: getNotesQueryKey(user.$id) });
    },
  });
};
