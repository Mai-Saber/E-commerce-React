import { createSlice } from "@reduxjs/toolkit";

const wishListReducer = createSlice({
  name: "wishListReducer",
  initialState: { wishList: [] },
  reducers: {
    addToLovelyList: (state, action) => {
      state.wishList.push(action.payload);
    },
    removeFromLovelyList: (state, action) => {
      state.wishList = state.wishList.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export default wishListReducer;
export const { addToLovelyList, removeFromLovelyList } =
  wishListReducer.actions;
