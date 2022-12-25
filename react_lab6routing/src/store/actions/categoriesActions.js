import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async function (category) {
        const response = await fetch("https://dummyjson.com/products/categories");
        const data = await response.json()

        return data;
    }
)