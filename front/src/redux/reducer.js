import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    userData: {},
    userAppointments: []
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginUser: (state,action) => {
            state.userData = action.payload;
        },
        userAppointmentChange: (state,action) => {
            state.userAppointments = action.payload;
        }
    },
});

export const { loginUser, userAppointmentChange } = userSlice.actions;
export default userSlice;