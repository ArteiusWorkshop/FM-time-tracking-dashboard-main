import { createContext } from "react";

interface ContextProps {
  display: string;

  //Methods
  dailyDisplay: () => void;
  weeklyDisplay: () => void;
  monthlyDisplay: () => void;
}

export const UIContext = createContext({} as ContextProps);
