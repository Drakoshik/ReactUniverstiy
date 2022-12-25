import {createSlice} from "@reduxjs/toolkit";
import {productsSlice} from "./productsSlice";
import {fetchCategories} from "../actions/categoriesActions";

const initialState = {
    categories: [],
    isLoading: false,
    error: null,
}

export const categoriesSlice = createSlice({
    name: "categoriesSlice",
    initialState: initialState,
    reducers: {

    },
    extraReducers: {
        [fetchCategories.pending]: (state) => {
            state.isLoading = true
        },
        [fetchCategories.fulfilled]: (state, action) => {
            state.isLoading = false
            state.error = null
            state.categories = action.payload
        },
        [fetchCategories.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },
     }
})

export default categoriesSlice.reducer