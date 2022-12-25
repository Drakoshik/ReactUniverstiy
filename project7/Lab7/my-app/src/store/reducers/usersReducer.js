import {createSlice} from "@reduxjs/toolkit";

const defaultState = {
    mass: []
}

const usersSlice = createSlice({
    name: 'users',
    initialState: defaultState,
    reducers: {
        addUsersAction: (state, action) => {
            state.mass.push(...action.payload);
        },

        removeUserAction: (state, action) => {
            state.mass = state.mass.filter(user => user.id !== action.payload);
        },

        addUserAction: (state, action) => {
            state.mass.push(action.payload);
        },

    }
})

export const {addUserAction, addUsersAction, removeUserAction} = usersSlice.actions;
export default usersSlice.reducer;