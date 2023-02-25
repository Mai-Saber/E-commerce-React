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
    // add to cart
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
      // remove item
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      // handle price & total
      state.prices = [];

      for (let i = 0; i < state.cart.length; i++) {
        const ele = state.cart[i];

        if (ele.quantity) {
          const actualPrice = Number.parseInt(ele.price) * ele.quantity;
          state.prices.push(actualPrice);
        } else {
          state.prices.push(Number.parseInt(ele.price));
        }
      }
      // handle total
      const initialValue = 0;
      state.total = state.prices.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue
      );
      // toast
      toast.success("deleted Successfully");
    },

    // handle quantity
    handleQuantity: (state, action) => {
      // find item & index form cart
      const product = state.cart.find((item) => item.id === action.payload.id);
      const index = state.cart.indexOf(product);
      // remove this item (will add it with quantity in the same index)
      // splice (index, The number of items that we need to remove)
      state.cart.splice(index, 1);
      const newEle = {
        ...action.payload.product,
        quantity: action.payload.value,
      };
      // add the same item in the same index with quantity
      // splice(index,start count form which index, element that will be added)
      state.cart.splice(index, 0, newEle);
      ////////////////////////////////////////////////////
      // handle prices & total
       state.prices = [];

       for (let i = 0; i < state.cart.length; i++) {
         const ele = state.cart[i];

         if (ele.quantity) {
           const actualPrice = Number.parseInt(ele.price) * ele.quantity;
           state.prices.push(actualPrice);
         } else {
           console.log("no");
           state.prices.push(Number.parseInt(ele.price));
         }
       }
       // handle total
       const initialValue = 0;
       state.total = state.prices.reduce(
         (previousValue, currentValue) => previousValue + currentValue,
         initialValue
       );
    },

    handlePrice: (state) => {
      console.log("start");
      state.prices = [];

      for (let i = 0; i < state.cart.length; i++) {
        const ele = state.cart[i];

        if (ele.quantity) {
          const actualPrice = Number.parseInt(ele.price) * ele.quantity;
          state.prices.push(actualPrice);
        } else {
          console.log("no");
          state.prices.push(Number.parseInt(ele.price));
        }
      }
      // handle total
      const initialValue = 0;
      state.total = state.prices.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue
      );
    },
  },
});

export default cartReducer;
export const { addToCart, deleteFromCart, handleQuantity } =
  cartReducer.actions;
