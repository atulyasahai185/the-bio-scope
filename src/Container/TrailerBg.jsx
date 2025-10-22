import { useSelector } from "react-redux";
import useMovieTrailer from "../custom hooks/useMovieTrailer";

const TrailerBg = ({ trailerId }) => {
  const trailerClip = useSelector((store) => store.movies?.trailerClip);

  useMovieTrailer(trailerId);

  return (
    <div className="relative w-full pt-[56%] md:pt-[45%]">
      <iframe
        className="absolute top-0 left-0 w-full h-full object-cover "
        src={
          "https://www.youtube.com/embed/" +
          trailerClip?.key +
          "?autoplay=1&mute=1&controls=0&loop=1&playlist=" +
          trailerClip?.key
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default TrailerBg;
