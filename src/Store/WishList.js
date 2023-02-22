import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const wishListReducer = createSlice({
  name: "wishListReducer",
  initialState: { wishList: [] },
  reducers: {
    addToLovelyList: (state, action) => {
      state.wishList.push(action.payload);
      toast.success("Added to Wish List Successfully");
    },
    removeFromLovelyList: (state, action) => {
      state.wishList = state.wishList.filter(
        (item) => item.id !== action.payload.id
      );
      toast.success("Deleted Successfully");
    },
  },
});

export default wishListReducer;
export const { addToLovelyList, removeFromLovelyList } =
  wishListReducer.actions;
