import { configureStore } from "@reduxjs/toolkit";
 import  todoSlice from "../features/todo/todoSlice";


export const store =  configureStore({
    reducer: todoSlice ,
})
export default store; // Ensure this line is present
