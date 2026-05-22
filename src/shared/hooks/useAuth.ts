import { useGetUser } from '@/features/login/api/useAuth';

export const useAuth = () => {
  const { data, isPending, isError } = useGetUser();

  if (isPending || isError || !data) {
    return {
      isAuthenticated: false,
      user: null,
    };
  }

  return {
    isAuthenticated: !!data?.$id,
    user: data,
  };
};
