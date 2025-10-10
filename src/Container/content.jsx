import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const Content = () => {
  const movies = useSelector((store) => store.movies);
  const shows = useSelector((store) => store.tvShows);

  return (
    movies.playingMovies && (
      <div className="bg-black/95">
        <div className="-mt-36 relative z-10">
          <MovieList
            title={"Now Playing on Bio Scope"}
            movies={movies.playingMovies}
          />
          <MovieList
            title={"Popular Flick on Bio Scope"}
            movies={movies.popularMovies}
          />
          <MovieList
            title={"Upcoming Flick on Bio Scope"}
            movies={movies.upcomingMovies}
          />
          <MovieList
            title={"Goated Flick on Bio Scope"}
            movies={movies.topRatedMovies}
          />
          <MovieList title={"TV Shows on Bio Scope"} movies={shows.tvShows} />
          <MovieList
            title={"Popular TV Shows on Bio Scope"}
            movies={shows.popularTvShows}
          />
        </div>
      </div>
    )
  );
};

export default Content;
