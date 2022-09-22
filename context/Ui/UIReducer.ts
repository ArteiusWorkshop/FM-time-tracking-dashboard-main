import { UIState } from "./";

type UIActionType =
  | { type: "UI - Daily" }
  | { type: "UI - Weekly" }
  | { type: "UI - Monthly" };

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case "UI - Daily":
      return {
        ...state,
        display: "dayly",
      };
    case "UI - Weekly":
      return {
        ...state,
        display: "weekly",
      };
    case "UI - Monthly":
      return {
        ...state,
        display: "monthly",
      };

    default:
      return state;
  }
};
