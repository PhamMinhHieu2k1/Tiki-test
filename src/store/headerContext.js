import { createContext } from 'react';

export const HeaderContext = createContext({
    setShowLogin: () => {},
    showLogin: () => {},
});
