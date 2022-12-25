import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import productsSlice from "./reducers/productsSlice";

const rootReducer = combineReducers({
    productsSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: [thunk]
    })
}
