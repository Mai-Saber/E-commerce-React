const { createSlice } = require("@reduxjs/toolkit");

const counterReducer = createSlice({
  name: "counterReducer",
  initialState: { value: 1 },
  reducers: {
    increase: (state, action) => {
      state.value += action.payload;
    },
    decrease: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { increase, decrease } = counterReducer.actions;
export default counterReducer;
