import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expression: "",
};

const todoSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    appendValue: (state, action) => {
      state.expression += action.payload;
    },
    resetValue: (state) => {
      state.expression = "";
    },
    evaluateExpression: (state) => {
      try {
        state.expression = eval(state.expression).toString();
      } catch (e) {
        state.expression = "Error";
      }
    },
  },
});

export const { appendValue, resetValue, evaluateExpression } = todoSlice.actions;
export default todoSlice.reducer;
