import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
}

export const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState,
  reducers: {
    addProduct: (state, action) => {
     state.products = [action.payload, ...state.products];
      // state.products = action.payload.title;
      // state.products = action.payload.des;
   
     
     
    },
    del: (state, action) => {
     state.products = state.products.filter((product)=>product.id!==action.payload);
    },
    edit: (state, action) => {
     state.products.map((product)=>{
      if(product.id == action.payload.id){
        return []
      }
     })
    },
  },
});

export const { addProduct, del, edit } = ProductSlice.actions;
export default ProductSlice.reducer;