import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async function (settings) {
        const response = await fetch(settings.category ? `https://dummyjson.com/products/category/${settings.category}` : settings.search ? `https://dummyjson.com/products/search?q=${settings.search}` : `https://dummyjson.com/products`);
        const data = await response.json()

        return data;
    }
)

export const fetchProduct = createAsyncThunk(
    'products/fetchProduct',
    async function (id) {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json()

        return data;
    }
)