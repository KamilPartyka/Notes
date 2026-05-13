import { useDeleteNoteMutation } from '@cards/api/useDeleteNoteMutation';

export const useDeleteNote = () => {
  const { mutate: deleteNote } = useDeleteNoteMutation();

  const handleDeleteNote = (id: string) => {
    deleteNote({ id });
  };

  return { handleDeleteNote };
};
