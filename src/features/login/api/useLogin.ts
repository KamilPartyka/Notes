import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { account } from '@/appwrite';
import { ROUTES } from '@/routes';
import { AUTH_QUERY_KEY } from './useAuth';

export type LoginFormData = {
  email: string;
  password: string;
};

export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (data: LoginFormData) => {
      const { email, password } = data;
      const loggedIn = await account.createEmailPasswordSession({
        email,
        password,
      });

      return loggedIn;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [AUTH_QUERY_KEY] });
      navigate(ROUTES.NOTES);
    },
  });
};
