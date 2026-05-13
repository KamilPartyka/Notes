import { useMutation, useQueryClient } from '@tanstack/react-query';
import { USE_GET_NOTES_QUERY_KEY } from '@cards/api/useGetNotes';
import { DATABASE_ID, NOTES_TABLE_ID, tablesDB } from '@/appwrite';

interface DeleteNoteVariables {
  id: string;
}

export const useDeleteNoteMutation = () => {
  const queryClient = useQueryClient();

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
      queryClient.invalidateQueries({ queryKey: [USE_GET_NOTES_QUERY_KEY] });
    },
  });
};
