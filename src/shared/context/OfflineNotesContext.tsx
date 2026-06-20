import React, { useEffect, useState } from 'react';
import { OfflineNotesContext } from '@/shared/hooks/useOfflineNotes';
import type { NoteModel } from '@/shared/types/noteModel';

const STORAGE_KEY = 'offline_notes_v1';

const generateId = () =>
  `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`;

export const OfflineNotesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [notes, setNotes] = useState<NoteModel[]>(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  }, [notes]);

  const createNote = (partial: Omit<NoteModel, 'id'>): NoteModel => {
    const note: NoteModel = { id: generateId(), ...partial };
    setNotes((s) => [note, ...s]);
    return note;
  };

  const updateNote = (updated: NoteModel) => {
    setNotes((s) => s.map((n) => (n.id === updated.id ? updated : n)));
  };

  const deleteNote = (id: string) => {
    setNotes((s) => s.filter((n) => n.id !== id));
  };

  return (
    <OfflineNotesContext.Provider
      value={{ notes, createNote, updateNote, deleteNote }}
    >
      {children}
    </OfflineNotesContext.Provider>
  );
};
