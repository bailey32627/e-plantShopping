import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const item = action.payload;
        const existing = state.items.find( (i)=> i.name === item.name );
        if( existing ) {
            existing.quantity++;
        } else {
            state.items.push( {...item, quantity: 1 } );
        }
    },
    removeItem: (state, action) => {
        const item = action.payload;
        const existing = state.items.find( (i)=>i.name === item.name);
        if( existing ) {
            state.items=state.items.filter((i)=>i.name !== item.name );
        }
    },
    updateQuantity: (state, action) => {
        const { name, quantity } = action.payload;
        const item = state.items.find((i)=> i.name === name );
        item.quantity = quantity;
        if( item.quantity === 0 ) {
            state.items = state.items.filter((i) => i.name !== name );
        }
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
