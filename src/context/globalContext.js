import { createContext, useReducer } from 'react';

export const Context = createContext();

export function GlobalContext({ children }) {
  const initialState = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  let TOTAL_FEEDBACK = 0;

  const updateStats = (state, action) => {
    switch (action.type) {
      case 'good':
        return { ...state, good: state.good + 1 };
      case 'neutral':
        return { ...state, neutral: state.neutral + 1 };
      case 'bad':
        return { ...state, bad: state.bad + 1 };
      default:
        return;
    }
  };

  const [state, dispatch] = useReducer(updateStats, initialState);

  return (
    <Context.Provider
      value={{
        state,
        dispatch,
        TOTAL_FEEDBACK,
      }}
    >
      {children}
    </Context.Provider>
  );
}
