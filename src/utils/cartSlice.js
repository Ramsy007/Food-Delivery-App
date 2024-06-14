import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: { 
    addItem: (state, action) => {
      // Redux Toolkit uses immer library behind the scenes)
      // mutating the state over hear
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop(); // like if you need to remove a specific item perform some ation otherwise it will work default
    },
    //originalState = {items: ["pizza"]}
    clearCart: (state, action) => {
      //RTK - either Mutate the existing  state or return a new State
      // state.items.length = 0; // originalState = []

      return { items: [] }; // this new object will be replaced inside originalState = { items: [] }
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
  // this addItem, removeItem, clearCart is reducers functions