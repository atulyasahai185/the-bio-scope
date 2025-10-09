import { useSelector } from "react-redux";
import useMovieTrailer from "../custom hooks/useMovieTrailer";

const TrailerBg = ({ trailerId }) => {
  const trailerClip = useSelector((store) => store.movies?.trailerClip);
  console.log(trailerClip);

  useMovieTrailer(trailerId);

  return (
    <div>
      <iframe
        className="w-screen aspect-video "
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
