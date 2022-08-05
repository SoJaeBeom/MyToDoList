import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const detailSlice = createSlice({
  name: "detailSlice",
  initialState,
  reducers: {
    getTodoById: (previousState, action) => {
      return action.payload.todos
        .filter((target) => target.id === Number(action.payload.id))
        .reduce((prevObj, curObj) => prevObj + curObj);
    },
  },
});

export const { getTodoById } = detailSlice.actions;

export default detailSlice.reducer;
