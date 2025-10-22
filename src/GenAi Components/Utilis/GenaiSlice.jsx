import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "search",
  initialState: {
    searchClick: false,
    movieResult: null,
    movieName: null,
    awaiting: false,
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

    clearMovieRes: (state) => {
      state.movieResult = [];
      state.movieName = [];
    },

    isLoading: (state, action) => {
      state.awaiting = action.payload;
    },
  },
});

export const { toggleSearchClick, addSearchedMovie, isLoading, clearMovieRes } =
  GptSlice.actions;

export default GptSlice.reducer;
