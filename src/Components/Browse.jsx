import Content from "../Container/content";
import TrailerVideo from "../Container/trailerVideo";
import usePlayingMovies from "../custom hooks/usePlayingMovies";
import Header from "./Header";

const Browse = () => {
  usePlayingMovies();

  return (
    <div>
      <Header />
      <TrailerVideo />
      <Content />
    </div>
  );
};

export default Browse;
