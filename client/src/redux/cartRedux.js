import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products:[],
        quantity:0,
        total:0,
    },
    reducers:{
        addProduct:(state,actions) =>{
            state.quantity +=1;
            state.products.push(actions.payload);
            state.total += actions.payload.price * actions.payload.quantity;
        }, 
    }

})

export const {addProduct} = cartSlice.actions;
export default cartSlice.reducer;