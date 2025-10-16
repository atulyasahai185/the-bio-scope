import { useDispatch, useSelector } from "react-redux";
import { fetchTopRatedMovieAPI } from "../URL/URL";
import { movie_API } from "../utilis/fetchAPI";
import { addTopRatedMovies } from "../utilis/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const topRatedFilm = useSelector((store) => store.movies.topRatedMovies);

  const topRatedMovies = async () => {
    const data = await fetch(fetchTopRatedMovieAPI, movie_API);
    const result = await data.json();

    dispatch(addTopRatedMovies(result.results));
  };

  useEffect(() => {
    !topRatedFilm && topRatedMovies();
  }, []);
};

export default useTopRatedMovies;
