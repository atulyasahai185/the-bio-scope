import { useSelector } from "react-redux";
import Content from "../Container/content";
import TrailerVideo from "../Container/trailerVideo";
import usePlayingMovies from "../custom hooks/usePlayingMovies";
import usePopularMovies from "../custom hooks/usePopularMovies";
import usePopularTvShows from "../custom hooks/usePopularTvShows";
import useTopRatedMovies from "../custom hooks/useTopRatedMovies";
import useTvShows from "../custom hooks/useTvShows";
import useUpcomingMovies from "../custom hooks/useUpcomingMovies";
import GptSearch from "../GPT Components/GptSearch";
import Header from "./Header";

const Browse = () => {
  const showSearchComponent = useSelector((store) => store.search.searchClick);

  usePlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  useTvShows();
  usePopularTvShows();

  return (
    <div>
      <Header />
      {showSearchComponent ? (
        <GptSearch />
      ) : (
        <>
          <TrailerVideo />
          <Content />
        </>
      )}
    </div>
  );
};

export default Browse;
