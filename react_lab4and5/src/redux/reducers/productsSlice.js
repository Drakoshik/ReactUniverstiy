import {createSlice} from "@reduxjs/toolkit";
import {fetchCategories, fetchProducts} from "../actions/ProductsActions";

const initialState = {
    products: [],
    categories: [],
    isLoading: false,
    error: null
}

export const productsSlice = createSlice({
    name: "productSlice",
    initialState: initialState,
    reducers: {
        SORT_PRODUCTS_BY_PRICE_ASC(state){
            state.products = state.products.sort((a, b) => {
                return a.price === b.price ? 0 : a.price > b.price ? -1 : 1
            })
        },
        SORT_PRODUCTS_BY_PRICE_DESC(state){
            state.products = state.products.sort((a, b) => {
                return a.price === b.price ? 0 : a.price > b.price ? 1 : -1
            })
        },
    },
    extraReducers: {
        [fetchProducts.pending]: (state) => {
            state.isLoading = true
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.isLoading = false
            state.products = action.payload
            state.error = null
        },
        [fetchProducts.rejected]: (state, action) => {
            state.error = action.payload
            state.isLoading = false
        },
        [fetchCategories.pending]: (state) => {

        },
        [fetchCategories.fulfilled]: (state, action) => {
            state.categories = action.payload
        },
        [fetchCategories.rejected]: (state, action) => {

        },
    }
})

export default productsSlice.reducer