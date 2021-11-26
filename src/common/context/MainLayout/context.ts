import { createContext, useContext } from "react";

export const MainLayoutContext = createContext({
  latestResearch: []
});

export const useMainLayout = () => {
  return useContext(MainLayoutContext);
};
