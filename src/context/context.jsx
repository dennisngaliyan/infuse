import { createContext } from "react";

export const StateContext = createContext({
  date: new Date(),
});

function ContextHandler({ children }) {
  return <StateContext.Provider>{children}</StateContext.Provider>;
}

export default ContextHandler;
