import { useQuery } from '@tanstack/react-query';
import { Query, type Models } from 'appwrite';
import { DATABASE_ID, NOTES_TABLE_ID, tablesDB } from '@/appwrite';

export const USE_GET_NOTES_QUERY_KEY = 'GET_NOTES' as const;

export const getNotesQueryKey = (userId: string) =>
  [USE_GET_NOTES_QUERY_KEY, userId] as const;

const mapRowToNoteModel = (row: Models.DefaultRow) => ({
  id: row.$id,
  body: row.body as string,
  colorHeader: row.colorHeader as string,
  colorBody: row.colorBody as string,
  colorText: row.colorText as string,
  positionX: row.positionX as number,
  positionY: row.positionY as number,
});

export const useGetNotes = ({
  userId,
  enabled = true,
}: {
  userId: string;
  enabled?: boolean;
}) => {
  return useQuery({
    queryKey: getNotesQueryKey(userId),
    queryFn: async () => {
      const response = await tablesDB.listRows({
        databaseId: DATABASE_ID,
        tableId: NOTES_TABLE_ID,
        queries: [Query.equal('userId', userId)],
      });
      return response.rows;
    },
    select: (data) => data.map(mapRowToNoteModel),

    enabled: !!userId && enabled,
  });
};
