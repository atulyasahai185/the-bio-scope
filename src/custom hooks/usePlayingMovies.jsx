import { useDispatch, useSelector } from "react-redux";
import { fetchMovieAPI } from "../URL/URL";
import { movie_API } from "../utilis/fetchAPI";
import { addPlayingMovies } from "../utilis/movieSlice";
import { useEffect } from "react";

const usePlayingMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector((store) => store.movies.playingMovies);

  const moviePlayingList = async () => {
    const data = await fetch(fetchMovieAPI, movie_API);
    const result = await data.json();

    dispatch(addPlayingMovies(result.results));
  };

  useEffect(() => {
    !nowPlayingMovies && moviePlayingList();
  }, []);
};

export default usePlayingMovies;
