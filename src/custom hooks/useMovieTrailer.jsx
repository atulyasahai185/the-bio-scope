import { useDispatch } from "react-redux";
import { movie_API } from "../utilis/fetchAPI";
import { addTrailerClip } from "../utilis/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (trailerId) => {
  const dispatch = useDispatch();
  const getTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${trailerId}/videos?language=en-US`,
      movie_API
    );
    const result = await data.json();
    console.log(result.results);

    const filteredData = result.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailerVd = filteredData.length ? filteredData[0] : result.results[0];
    console.log(trailerVd);

    dispatch(addTrailerClip(trailerVd));
  };

  useEffect(() => {
    if (!trailerId) return;
    getTrailer();
  }, [trailerId]);

  console.log(trailerId);
};

export default useMovieTrailer;
