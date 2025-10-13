import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "search",
  initialState: {
    searchClick: false,
  },
  reducers: {
    toggleSearchClick: (state) => {
      state.searchClick = !state.searchClick;
    },
  },
});

export const { toggleSearchClick } = GptSlice.actions;

export default GptSlice.reducer;
