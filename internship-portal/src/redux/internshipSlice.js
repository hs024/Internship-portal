import { createSlice } from "@reduxjs/toolkit";
import mockData from "../mockData";

const internshipSlice = createSlice({
  name: "internships",
  initialState: {
    list: mockData,
    filters: {},
  },
  reducers: {
    setFilter(state, action) {
      state.filters = action.payload;
    },
  },
});

export const { setFilter } = internshipSlice.actions;
export default internshipSlice.reducer;
