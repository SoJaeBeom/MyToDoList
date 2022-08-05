import todoReducer from "../modules/todoSlice";
import detailReducer from "../modules/detailSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    todoSlice: todoReducer,
    detailSlice: detailReducer,
  },
});

export default store;
