import React from "react";
import { useTodosContext } from "../context/todos";
import SingleTodo from "./SingleTodo";

export const TodoList: React.FC = () => {
  const { state } = useTodosContext();

  return (
    <>
      <div className="todos">
        {state.map((list) => {
          return <SingleTodo list={list} key={list.id} />;
        })}
      </div>
    </>
  );
};
