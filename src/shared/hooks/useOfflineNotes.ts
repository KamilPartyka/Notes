import { createContext, useContext } from 'react';
import type { NoteModel } from '@/shared/types/noteModel';

export type OfflineNotesValue = {
  notes: NoteModel[];
  createNote: (partial: Omit<NoteModel, 'id'>) => NoteModel;
  updateNote: (updated: NoteModel) => void;
  deleteNote: (id: string) => void;
};

export const OfflineNotesContext = createContext<OfflineNotesValue | null>(null);

export const useOfflineNotes = (): OfflineNotesValue => {
  const ctx = useContext(OfflineNotesContext);
  if (!ctx) throw new Error('useOfflineNotes must be used inside OfflineNotesProvider');
  return ctx;
};
