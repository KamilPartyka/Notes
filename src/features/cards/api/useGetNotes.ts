import { useQuery } from '@tanstack/react-query';
import { Query } from 'appwrite';
import { DATABASE_ID, NOTES_TABLE_ID, tablesDB } from '@/appwrite';

export interface Note {
  $id: string;
  body: string;
  userId: string;
  colorHeader: string;
  colorBody: string;
  colorText: string;
  positionX: number;
  positionY: number;
}

export const USE_GET_NOTES_QUERY_KEY = 'GET_NOTES' as const;

export const useGetNotes = () => {
  return useQuery({
    queryKey: [USE_GET_NOTES_QUERY_KEY],
    queryFn: async () => {
      // const user = await account.get();

      const response = await tablesDB.listRows({
        databaseId: DATABASE_ID,
        tableId: NOTES_TABLE_ID,
        queries: [
          // TODO: Replace with dynamic user ID from auth context
          Query.equal('userId', import.meta.env.VITE_APPWRITE_MY_USER_ID),
        ],
      });

      return response.rows;
    },
    select: (data) => data.map((row) => ({ ...row, ...row.data })) as Note[],
  });
};
