import { configureStore } from "@reduxjs/toolkit";
import Cart from "../Reducer/Reducer";

const Store = configureStore({
  reducer: Cart,
});

export default Store;
