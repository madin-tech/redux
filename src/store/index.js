import { configureStore } from "@reduxjs/toolkit";
import  todoSlice  from "./todoSlice";
import userSlice from "./userSlice";
import  ProductSlice  from "./ProductSlice";
export const store = configureStore({
  reducer: {
    todoReducer: todoSlice,
    userReducer: userSlice,
    productReducer: ProductSlice,
  },
});