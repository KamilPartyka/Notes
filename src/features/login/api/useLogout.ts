import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { account } from '@/appwrite';
import { ROUTES } from '@/routes';

export const useLogout = () => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      await account.deleteSession({ sessionId: 'current' });
    },
    onSuccess: () => {
      queryClient.clear();
      navigate(ROUTES.LOGIN);
    },
  });
};
