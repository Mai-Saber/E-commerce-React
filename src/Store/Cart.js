import { createSlice } from "@reduxjs/toolkit";


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
      state.prices.push(
        Number.parseInt(action.payload.price * action.payload.quantity)
      );
      // handle total
      const initialValue = 0;
      state.total = state.prices.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue
      );
    },

    deleteFromCart: (state, action) => {
      // get obj include action payload & quantity from cart
      const product = state.cart.filter(
        (item) => item.id === action.payload.id
      );

      state.cart = state.cart.filter((item) => item.id !== product.id);
      // handle price
      state.prices = state.prices.filter(
        (item) =>
          item.price !== Number.parseInt(product.price * product.quantity)
      );
      // handle total
      state.total -= Number.parseInt(product.price);
    },
    
  },
});

export default cartReducer;
export const { addToCart, deleteFromCart, setCart } = cartReducer.actions;
