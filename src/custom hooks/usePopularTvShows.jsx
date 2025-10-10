import { useDispatch } from "react-redux";
import { fetchPopularTvShowsAPI } from "../URL/URL";
import { movie_API } from "../utilis/fetchAPI";
import { addPopularTvShows } from "../utilis/tvShowSlice";
import { useEffect } from "react";

const usePopularTvShows = () => {
  const dispatch = useDispatch();

  const popularTvShow = async () => {
    const data = await fetch(fetchPopularTvShowsAPI, movie_API);
    const result = await data.json();

    dispatch(addPopularTvShows(result.results));
  };

  useEffect(() => {
    popularTvShow();
  }, []);
};

export default usePopularTvShows;
