import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cart: JSON.parse(localStorage.getItem("cart")) ?? []
    },
    reducers:{
        addToCart(state,action){
            state.cart.push(action.payload)
        },
        deleteToCart(state,action){
            const next = state.cart.filter(item => item.id !== action.payload.id);
            state.cart = next;
        }
    }
})

export const { addToCart , deleteToCart } = cartSlice.actions;

export default cartSlice.reducer;