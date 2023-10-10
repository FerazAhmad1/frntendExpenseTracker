import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../feature/Auth/authSlice";
import expenseReducer from "../feature/Expense/expenseSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    expense: expenseReducer,
  },
});

export default store;
