import React from 'react';
import { useLocation } from 'react-router';
import { ROUTES } from '@/routes';
import { AppModeContext } from '@/shared/hooks/useAppMode';

export const AppModeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { pathname } = useLocation();
  const mode = pathname.startsWith(ROUTES.NOTES_OFFLINE)
    ? 'offline'
    : ('online' as const);

  return (
    <AppModeContext.Provider value={{ mode }}>
      {children}
    </AppModeContext.Provider>
  );
};
