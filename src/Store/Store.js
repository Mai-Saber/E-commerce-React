import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./Counter";
import authReducer from "./Auth";
import cartReducer from "./Cart";


export const store = configureStore({
  reducer: {
    counterReducer: counterReducer.reducer,
    authReducer: authReducer.reducer,
    cartReducer: cartReducer.reducer,
  
  },
});
