import { createContext, useContext } from 'react';

export const MainLayoutContext = createContext()

export const useMainLayout = () => {
	return useContext(MainLayoutContext);
}