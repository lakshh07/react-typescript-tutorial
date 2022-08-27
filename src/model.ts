import React from "react";

export interface Todo {
    id: number,
    todo: string,
    isDone: boolean
}

export interface props {
    state: Todo[],
    dispatch: React.Dispatch<Actions>
}

export const initialState: Todo[] = [{
    id: 0,
    todo: "",
    isDone: false
}];

export type Actions =
    | { type: "add"; payload: string }
    | { type: "done"; payload: number }
    | { type: "remove"; payload: number }
    | { type: "edit"; payload: number; data: string };

export const Reducer = (state: Todo[], action: Actions) => {
    switch (action.type) {
        case "add":
            return [
                ...state,
                { id: Date.now(), todo: action.payload, isDone: false },
            ];
        case "done":
            return state.map((todo) =>
                todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
            );
        case "remove":
            return state.filter((todo) => todo.id !== action.payload);
        case "edit":
            return state.map((todo) =>
                todo.id === action.payload ? { ...todo, todo: action.data } : todo
            );
        default:
            return state;
    }
};



