import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async function (category) {
        const response = await fetch(category ? `https://fakestoreapi.com/products/category/${category}` : `https://fakestoreapi.com/products`);
        const data = await response.json()

        return data;
    }
)
export const fetchCategories = createAsyncThunk(
    'products/fetchCategories',
    async function () {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const data = await response.json()

        return data;
    }
)