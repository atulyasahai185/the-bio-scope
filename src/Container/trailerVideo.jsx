import { useSelector } from "react-redux";
import TrailerBg from "./TrailerBg";
import VideoTitle from "./VideoTitle";

const TrailerVideo = () => {
  const movies = useSelector((store) => store.movies?.playingMovies);

  if (!movies) return;

  const mainMovies = movies[0];
  console.log(mainMovies);

  const { original_title, overview, id } = mainMovies;

  return (
    <div>
      {/* trailerVideo */}
      <VideoTitle title={original_title} overview={overview} />
      <TrailerBg trailerId={id} />
    </div>
  );
};

export default TrailerVideo;
