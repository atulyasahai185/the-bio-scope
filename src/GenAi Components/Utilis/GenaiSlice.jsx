import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "search",
  initialState: {
    searchClick: false,
    movieResult: null,
    movieName: null,
  },
  reducers: {
    toggleSearchClick: (state) => {
      state.searchClick = !state.searchClick;
    },

    addSearchedMovie: (state, action) => {
      const { pictureName, pictureResult } = action.payload;
      state.movieResult = pictureResult;
      state.movieName = pictureName;
    },
  },
});

export const { toggleSearchClick, addSearchedMovie } = GptSlice.actions;

export default GptSlice.reducer;
