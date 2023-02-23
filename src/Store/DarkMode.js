import { createSlice } from "@reduxjs/toolkit";

const DarkModeReducer = createSlice({
  name: "DarkModeREducer",
  initialState: { theme: "light" },
  reducers: {
    lightMode: (state) => {
      state.theme = "light";
    },
    darkMode: (state) => {
      state.theme = "dark";
    },
  },
});

export default DarkModeReducer;
export const { lightMode, darkMode } = DarkModeReducer.actions;
