import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("initialState")) || {
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
      localStorage.setItem(
        "initialState",
        JSON.stringify({
          token: state.token,
          isLoggedIn: state.isLoggedIn,
          email: state.email,
        })
      );
    },

    logOut: (state = initialState, actions) => {
      state.email = "";
      state.isLoggedIn = false;
      state.token = "";
      localStorage.clear();
    },
  },
});

export default authSlice.reducer;
export const { logOut, login } = authSlice.actions;
