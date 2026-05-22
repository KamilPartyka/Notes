import { useQuery } from '@tanstack/react-query';
import { account } from '@/appwrite';

export const AUTH_QUERY_KEY = 'AUTH' as const;

export const useGetUser = () => {
  return useQuery({
    queryKey: [AUTH_QUERY_KEY],
    queryFn: async () => {
      const loggedIn = await account.get();

      return loggedIn;
    },
    retry: false,
  });
};
