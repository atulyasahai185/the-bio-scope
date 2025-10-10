import Content from "../Container/content";
import TrailerVideo from "../Container/trailerVideo";
import usePlayingMovies from "../custom hooks/usePlayingMovies";
import usePopularMovies from "../custom hooks/usePopularMovies";
import usePopularTvShows from "../custom hooks/usePopularTvShows";
import useTopRatedMovies from "../custom hooks/useTopRatedMovies";
import useTvShows from "../custom hooks/useTvShows";
import useUpcomingMovies from "../custom hooks/useUpcomingMovies";
import Header from "./Header";

const Browse = () => {
  usePlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  useTvShows();
  usePopularTvShows();

  return (
    <div>
      <Header />
      <TrailerVideo />
      <Content />
    </div>
  );
};

export default Browse;
