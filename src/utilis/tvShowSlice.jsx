import { createSlice } from "@reduxjs/toolkit";

const tvShowSlice = createSlice({
  name: "tvShows",
  initialState: {
    tvShows: null,
    popularTvShows: null,
  },
  reducers: {
    addTvShows: (state, action) => {
      state.tvShows = action.payload;
    },

    addPopularTvShows: (state, action) => {
      state.popularTvShows = action.payload;
    },
  },
});

export const { addTvShows, addPopularTvShows } = tvShowSlice.actions;

export default tvShowSlice.reducer;
