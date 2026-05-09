import { useQuery } from '@tanstack/react-query';
import { tablesDB, account, DATABASE_ID, NOTES_TABLE_ID } from '@/appwrite';
import { Query } from 'appwrite';

export interface Note {
  $id: string | number;
  body: string;
  userId: string;
  colorHeader: string;
  colorBody: string;
  colorText: string;
  positionX: number;
  positionY: number;
}

export const useNotes = () => {
  return useQuery({
    queryKey: ['notes'],
    queryFn: async () => {
      const user = await account.get();

      const response = await tablesDB.listRows({
        databaseId: DATABASE_ID,
        tableId: NOTES_TABLE_ID,
        queries: [Query.equal('userId', user.$id)],
      });

      return response.rows;
    },
    select: (data) => data.map((row) => ({ ...row, ...row.data })) as Note[],
  });
};
