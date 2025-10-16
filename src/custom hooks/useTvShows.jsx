import { useDispatch, useSelector } from "react-redux";
import { fetchTvShowsAPI } from "../URL/URL";
import { movie_API } from "../utilis/fetchAPI";
import { addTvShows } from "../utilis/tvShowSlice";
import { useEffect } from "react";

const useTvShows = () => {
  const dispatch = useDispatch();

  const playingTvShows = useSelector((store) => store.tvShows.tvShows);

  const tvShows = async () => {
    const data = await fetch(fetchTvShowsAPI, movie_API);
    const result = await data.json();

    dispatch(addTvShows(result.results));
  };

  useEffect(() => {
    !playingTvShows && tvShows();
  }, []);
};

export default useTvShows;
