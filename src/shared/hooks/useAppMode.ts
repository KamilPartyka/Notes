import { createContext, useContext } from 'react';

export type AppMode = 'online' | 'offline';

export const AppModeContext = createContext<{ mode: AppMode }>({ mode: 'online' });

export const useAppMode = () => useContext(AppModeContext);
