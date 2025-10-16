import { useDispatch, useSelector } from "react-redux";
import LanguageType from "../utilis/languageType";
import { useRef } from "react";
import { movie_API } from "../utilis/fetchAPI";
import {
  addSearchedMovie,
  clearMovieRes,
  isLoading,
} from "./Utilis/GenaiSlice";
import GenAI from "./Utilis/GenAI";

const SearchBar = () => {
  const langState = useSelector((store) => store.language.type);
  const searchedText = useRef(null);
  const dispatch = useDispatch();

  const searchedMovie = async (picture) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${picture}&include_adult=false&language=en-US&page=1`,
      movie_API
    );
    const result = await data.json();

    return result.results;
  };

  const handleOutput = async () => {
    dispatch(clearMovieRes());
    dispatch(isLoading(true));

    const Query =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchedText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const result = await GenAI.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [{ role: "user", parts: [{ text: Query }] }],
    });

    const suggestedMovie = result?.candidates?.[0]?.content?.parts?.[0]?.text;

    const moveiList = suggestedMovie.split(",").map((e) => e.trim());

    const arrayOfMovies = moveiList.map((movie) => searchedMovie(movie));

    const arrayResult = await Promise.all(arrayOfMovies);

    dispatch(
      addSearchedMovie({
        pictureName: moveiList,
        pictureResult: arrayResult,
      })
    );

    dispatch(isLoading(false));
  };

  return (
    <div className="pt-48">
      <form
        className="bg-black p-5 flex justify-center drop-shadow-lg  drop-shadow-white/10"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <input
          ref={searchedText}
          type="text"
          placeholder={LanguageType[langState].searchPlaceHolder}
          className="bg-white w-xl p-2 outline-0"
        />
        <button
          type="submit"
          className="bg-indigo-500 p-2 w-32"
          onClick={handleOutput}
        >
          {LanguageType[langState].searchText}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
