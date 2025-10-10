import { useDispatch } from "react-redux";
import { fetchTopRatedMovieAPI } from "../URL/URL";
import { movie_API } from "../utilis/fetchAPI";
import { addTopRatedMovies } from "../utilis/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const topRatedMovies = async () => {
    const data = await fetch(fetchTopRatedMovieAPI, movie_API);
    const result = await data.json();

    dispatch(addTopRatedMovies(result.results));
  };

  useEffect(() => {
    topRatedMovies();
  }, []);
};

export default useTopRatedMovies;
