import React, { useReducer, useState } from "react";
import "./App.css";
import { InputField } from "./components/InputField";
import { TodoList } from "./components/TodoList";
import TodosContext from "./context/todos";
import { Reducer } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [state, dispatch] = useReducer(Reducer, []);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      dispatch({ type: "add", payload: todo });
      setTodo("");
    }
  };

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <span className="heading">Taskify</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList />
      </div>
    </TodosContext.Provider>
  );
};

export default App;
