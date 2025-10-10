import { useDispatch } from "react-redux";
import { fetchUpcomingMovieAPI } from "../URL/URL";
import { movie_API } from "../utilis/fetchAPI";
import { addUpcomingMovies } from "../utilis/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const upcomingMovieList = async () => {
    const data = await fetch(fetchUpcomingMovieAPI, movie_API);
    const result = await data.json();

    dispatch(addUpcomingMovies(result.results));
  };

  useEffect(() => {
    upcomingMovieList();
  }, []);
};

export default useUpcomingMovies;
