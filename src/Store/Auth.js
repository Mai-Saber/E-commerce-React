import { createSlice } from "@reduxjs/toolkit";

const authReducer = createSlice({
  name: "authReducer",
  initialState: { isLogged: false },
  reducers: {
    login: (state) => {
      state.isLogged = true;
      console.log("login", state.isLogged)
    },
    logout: (state) => {
      state.isLogged = false;
    },
  },
});

export default authReducer;
export const { login, logout } = authReducer.actions;
