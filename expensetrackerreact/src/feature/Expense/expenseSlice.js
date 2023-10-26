import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: JSON.parse(localStorage.getItem("allExpense")) || [],
  totalPages: JSON.parse(localStorage.getItem("totalPages")) || 1,
};

const expenseSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    setData: (state = initialState, action) => {
      state.data = action.payload.data;
      state.totalPages = action.payload.totalPages;
    },
    createExpense: (state = initialState, action) => {
      state.data.push(action.payload);
      localStorage.setItem("allExpense", JSON.stringify(state.data));
    },
    updateExpense: (state = initialState, action) => {
      state.data = state.data.map((exp) => {
        if (action.payload.id === exp.id) {
          return { ...exp, ...action.payload.body };
        } else return exp;
      });

      localStorage.setItem("allExpense", JSON.stringify(state.data));
    },
    deleteExpense: (state = initialState, action) => {
      state.data = state.data.filter((exp) => exp.id !== action.payload.id);
      console.log(action.payload, "ppppppppppppppppppppp");
      localStorage.setItem("allExpense", JSON.stringify(state.data));
    },
  },
});

export default expenseSlice.reducer;
export const { createExpense, updateExpense, deleteExpense, setData } =
  expenseSlice.actions;
