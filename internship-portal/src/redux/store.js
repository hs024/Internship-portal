import { configureStore } from "@reduxjs/toolkit";
import internshipReducer from "./internshipSlice";

export const store = configureStore({
  reducer: {
    internships: internshipReducer,
  },
});
