import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  token: "",
  email: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state = initialState, actions) => {
      state.isLoggedIn = !!actions.payload.token;
      state.token = actions.payload.token;
      state.email = actions.payload.email;
      console.log(state.email, state.isLoggedIn, state.token);
    },

    logOut: (state = initialState, actions) => {
      state.email = "";
      state.isLoggedIn = false;
      state.token = "";
    },
  },
});

export default authSlice.reducer;
export const { logOut, login } = authSlice.actions;
