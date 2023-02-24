import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartReducer = createSlice({
  name: "cartReducer",
  initialState: {
    cart: [],
    prices: [],
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      // push it
      state.cart.push(action.payload);
      // handle price
      state.prices.push(Number.parseInt(action.payload.price));
      // handle total
      const initialValue = 0;
      state.total = state.prices.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue
      );
      // toast
      toast.success("Added to Cart Successfully");
    },

    // delete
    deleteFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      // handle price
      state.prices = state.prices.filter(
        (item) => item.price !== Number.parseInt(action.payload.price)
      );
      // handle total
      state.total -= Number.parseInt(action.payload.price);
      // toast
      toast.success("deleted Successfully");
    },

    // handle quantity
    handleQuantity: (state, action) => {
      const cart = state.cart;
      cart.filter((item) => item.id !== action.payload.id);
      cart.push({ ...action.payload.product, quantity: action.payload.value });
    },
  },
});

export default cartReducer;
export const { addToCart, deleteFromCart, handleQuantity } = cartReducer.actions;
