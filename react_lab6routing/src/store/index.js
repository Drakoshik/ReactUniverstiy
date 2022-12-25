import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import productsSlice from "./reducers/productsSlice";
import categoriesSlice from "./reducers/categoriesSlice";

const rootReducer = combineReducers({
    productsSlice,
    categoriesSlice,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: [thunk]
    })
}
