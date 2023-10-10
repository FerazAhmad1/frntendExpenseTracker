import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: JSON.parse(localStorage.getItem("allExpense")) || [],
};

const expenseSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    createExpense: (state = initialState, action) => {
      state.data.push(action.payload);
      localStorage.setItem("allExpense", JSON.stringify(state.data));
    },
    updateExpense: (state = initialState, action) => {},
    deleteExpense: (state = initialState, action) => {},
  },
});

export default expenseSlice.reducer;
export const { createExpense, updateExpense, deleteExpense } =
  expenseSlice.actions;
