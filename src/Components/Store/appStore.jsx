import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../../utilis/userSlice";
import movieReducer from "../../utilis/movieSlice";
import tvShowsReducer from "../../utilis/tvShowSlice";
import gptSearchReducer from "../../GPT Components/Utilis/GptSlice";
import langTypeReducer from "../../utilis/languageSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    tvShows: tvShowsReducer,
    search: gptSearchReducer,
    language: langTypeReducer,
  },
});

export default appStore;
