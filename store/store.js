import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reducers/cartReducer";
import searchInputReducer from "../reducers/searchInputReducer";

export default configureStore({
  reducer: {
    cart: cartReducer,
    searchInput: searchInputReducer,
  },
});
