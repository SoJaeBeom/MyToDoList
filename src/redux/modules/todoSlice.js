import { createSlice } from "@reduxjs/toolkit";

let nextId = 1;
export const todoSlice = createSlice({
  name: "todoSlice",
  initialState: [],
  reducers: {
    addTodo: (previousState, action) => {
      return [
        ...previousState,
        {
          id: nextId++,
          title: action.payload.title,
          body: action.payload.body,
          isDone: false,
        },
      ];
    },

    deleteTodo: (previousState, action) => {
      return previousState.filter((todo) => todo.id !== action.payload);
    },

    toggleTodo: (previousState, action) => {
      return previousState.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
