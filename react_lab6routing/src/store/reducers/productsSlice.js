import {createSlice} from "@reduxjs/toolkit";
import {fetchProduct, fetchProducts} from "../actions/productsActions";

const initialState = {
    products: [],
    isLoading: false,
    error: null,
    product: {
        isLoading: false,
        error: null,
        product: null,
    }
}

export const productsSlice = createSlice({
    name: "productsSlice",
    initialState: initialState,
    reducers: {

    },
    extraReducers: {
        [fetchProducts.pending]: (state) => {
          state.isLoading = true
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.isLoading = false
            state.error = null
            state.products = action.payload.products
        },
        [fetchProducts.rejected]: (state, payload) => {
            state.isLoading = false
            state.error = null
        },
        [fetchProduct.pending]: (state) => {
            state.product.isLoading = true
        },
        [fetchProduct.fulfilled]: (state, action) => {
            state.product.isLoading = false
            state.product.error = null
            state.product.product = action.payload
        },
        [fetchProduct.rejected]: (state, payload) => {
            state.product.isLoading = false
            state.product.error = null
        },
    }
})

export default productsSlice.reducer