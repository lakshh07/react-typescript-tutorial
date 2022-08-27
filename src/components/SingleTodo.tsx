import React, { useEffect, useRef, useState } from "react";
import { MdDelete, MdEditNote, MdDone } from "react-icons/md";
import { useTodosContext } from "../context/todos";
import { Todo } from "../model";

interface Props {
  list: Todo;
}

const SingleTodo: React.FC<Props> = ({ list }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(list.todo);
  const inputRef = useRef<HTMLInputElement>(null);

  const { dispatch } = useTodosContext();

  const handleDone = (id: number) => {
    dispatch({ type: "done", payload: id });
  };

  const handleDelete = (id: number) => {
    dispatch({ type: "remove", payload: id });
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    dispatch({ type: "edit", payload: id, data: editTodo });

    setEdit(false);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <>
      <form
        onSubmit={(e) => handleEdit(e, list.id)}
        className={`todos__single `}
      >
        {edit ? (
          <input
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
            className="todos__single--text"
            ref={inputRef}
          />
        ) : list.isDone ? (
          <s className="todos__single--text">{list.todo}</s>
        ) : (
          <span className="todos__single--text">{list.todo}</span>
        )}
        <div>
          <span
            className="icon"
            onClick={() => {
              if (!edit && !list.isDone) {
                setEdit(!edit);
              }
            }}
          >
            <MdEditNote />
          </span>
          <span className="icon" onClick={() => handleDelete(list.id)}>
            <MdDelete />
          </span>
          <span className="icon" onClick={() => handleDone(list.id)}>
            <MdDone />
          </span>
        </div>
      </form>
    </>
  );
};

export default SingleTodo;
