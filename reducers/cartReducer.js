import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id == action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      const removeFrromCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      state.cart = removeFrromCart;
    },
    // incrementQuantity: (state, action) => {
    //   const itemInCart = state.cart.find(
    //     (item) => item.id == action.payload.id
    //   );
    //   itemInCart.quantity++;
    // },
    // decreamentQuantity: (state, action) => {
    //   const itemInCart = state.cart.find(
    //     (item) => item.id == action.payload.id
    //   );
    //   if (itemInCart.quantity == 1) {
    //     const removeFromCart = state.cart.filter(
    //       (item) => item.id !== action.payload.id
    //     );
    //   } else {
    //     itemInCart.quantity--;
    //   }
    // },
  },
});
export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decreamentQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
