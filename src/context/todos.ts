import { createContext, useContext } from "react";
import { props, initialState } from "../model";

const TodosContext = createContext<props>({ state: initialState, dispatch: () => undefined });

export function useTodosContext() {
  return useContext(TodosContext);
}

export default TodosContext;
