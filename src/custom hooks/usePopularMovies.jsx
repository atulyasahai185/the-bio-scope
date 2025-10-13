import { useDispatch } from "react-redux";
import { fetchPopularMovieAPI } from "../URL/URL";
import { movie_API } from "../utilis/fetchAPI";
import { addPopularMovies } from "../utilis/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const popularMovieList = async () => {
    const data = await fetch(fetchPopularMovieAPI, movie_API);
    const result = await data.json();

    dispatch(addPopularMovies(result.results));
  };

  useEffect(() => {
    popularMovieList();
  }, []);
};

export default usePopularMovies;
