import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    playingMovies: null,
    trailerClip: null,
  },
  reducers: {
    addPlayingMovies: (state, action) => {
      state.playingMovies = action.payload;
    },

    addTrailerClip: (state, action) => {
      state.trailerClip = action.payload;
    },
  },
});

export const { addPlayingMovies, addTrailerClip } = movieSlice.actions;

export default movieSlice.reducer;
