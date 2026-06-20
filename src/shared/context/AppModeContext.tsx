import React from 'react';
import { useLocation } from 'react-router';
import { ROUTES } from '@/routes';
import { AppModeContext } from '@/shared/hooks/useAppMode';

interface AppModeProviderProps {
  children: React.ReactNode;
}

export const AppModeProvider = ({ children }: AppModeProviderProps) => {
  const { pathname } = useLocation();
  const mode = pathname.startsWith(ROUTES.NOTES_OFFLINE) ? 'offline' : 'online';

  return (
    <AppModeContext.Provider value={{ mode }}>
      {children}
    </AppModeContext.Provider>
  );
};
