import { createSlice } from "@reduxjs/toolkit";
import mockData from "../mockData";

const initialState = {
  list: mockData,
  filters: {
    location: "",
    company: "",
    skill: "",
    title: "",
  },
  filtered: mockData,
};

const internshipSlice = createSlice({
  name: "internships",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
      const { location, company, skill,title } = state.filters;

      state.filtered = state.list.filter((item) => {
        return (
          item.location.toLowerCase().includes(location.toLowerCase()) &&
          item.company.toLowerCase().includes(company.toLowerCase()) &&
          item.title.toLowerCase().includes(title.toLowerCase()) &&
          item.skills.join(" ").toLowerCase().includes(skill.toLowerCase())
        );
      });
    },
    resetFilters: (state) => {
      state.filters = { location: "", company: "", skill: "" ,title:""};
      state.filtered = state.list;
    },
  },
});

export const { setFilter, resetFilters } = internshipSlice.actions;
export default internshipSlice.reducer;
