import { createSlice } from "@reduxjs/toolkit";

const Cart = {
  Item: [],
  Count: 0,
  ShowCart: false,
};

const CartSlice = createSlice({
  name: "Books",
  initialState: Cart,
  reducers: {
    AddCart: function (state, action) {
      state.Item.push(action.payload);
      state.Count = state.Item.length;
    },
    ShowCart: function (state, action) {
      state.ShowCart = !state.ShowCart;
    },
  },
});

export const CartActions = CartSlice.actions;

export default CartSlice.reducer;
