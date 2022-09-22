import { FC, useReducer } from "react";
import { UIContext, uiReducer } from "./";

export interface UIState {
  display: string;
}

interface Props {
  children?: React.ReactNode | undefined;
}

const UI_INITIAL_STATE: UIState = {
  display: "daily",
};

export const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const dailyDisplay = () => {
    dispatch({ type: "UI - Daily" });
  };
  const weeklyDisplay = () => {
    dispatch({ type: "UI - Weekly" });
  };
  const monthlyDisplay = () => {
    dispatch({ type: "UI - Monthly" });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,

        //Methods
        dailyDisplay,
        weeklyDisplay,
        monthlyDisplay,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
