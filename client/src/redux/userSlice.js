import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, actions) => {
      return {
        user: actions.payload,
      };
    },
    logout: () => {
      return { user: null };
    },
  },
});

export default userSlice.reducer;

export const { login, logout } = userSlice.actions;
