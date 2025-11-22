import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [
        {
            imgUrl: "",
            title: "",
            des: "",
        }
    ],
}

export const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState,
  reducers: {
    addImg: (state, action) => {},
    addTitle: (state, action) => {},
    addDes: (state, action) => {},
    del: (state, action) => {},
    edit: (state, action) => {},
  },
});

export const {addImg, addTitle, addDes, del, edit} = ProductSlice.actions;
export default ProductSlice.reducer;