import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    playingMovies: null,
    popularMovies: null,
    upcomingMovies: null,
    topRatedMovies: null,
    trailerClip: null,
  },
  reducers: {
    addPlayingMovies: (state, action) => {
      state.playingMovies = action.payload;
    },

    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },

    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },

    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },

    addTrailerClip: (state, action) => {
      state.trailerClip = action.payload;
    },
  },
});

export const {
  addPlayingMovies,
  addTrailerClip,
  addPopularMovies,
  addUpcomingMovies,
  addTopRatedMovies,
} = movieSlice.actions;

export default movieSlice.reducer;
