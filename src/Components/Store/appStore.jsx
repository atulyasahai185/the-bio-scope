import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../../utilis/userSlice";
import movieReducer from "../../utilis/movieSlice";
import tvShowsReducer from "../../utilis/tvShowSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    tvShows: tvShowsReducer,
  },
});

export default appStore;
