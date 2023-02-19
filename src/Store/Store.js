import { configureStore } from "@reduxjs/toolkit";


import authReducer from "./Auth";
import cartReducer from "./Cart";
import wishListReducer from "./WishList";

export const store = configureStore({
  reducer: {
    authReducer: authReducer.reducer,
    cartReducer: cartReducer.reducer,
    wishListReducer: wishListReducer.reducer,
  },
});
