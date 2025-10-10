import { useDispatch } from "react-redux";
import { fetchTvShowsAPI } from "../URL/URL";
import { movie_API } from "../utilis/fetchAPI";
import { addTvShows } from "../utilis/tvShowSlice";
import { useEffect } from "react";

const useTvShows = () => {
  const dispatch = useDispatch();

  const tvShows = async () => {
    const data = await fetch(fetchTvShowsAPI, movie_API);
    const result = await data.json();

    dispatch(addTvShows(result.results));
  };

  useEffect(() => {
    tvShows();
  }, []);
};

export default useTvShows;
