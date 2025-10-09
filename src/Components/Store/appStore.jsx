import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../../utilis/userSlice";
import movieReducer from "../../utilis/movieSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
  },
});

export default appStore;
