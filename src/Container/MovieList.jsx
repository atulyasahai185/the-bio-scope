import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className=" ">
      <div className="flex flex-wrap overflow-auto px-10 ">
        <h1 className=" py-5 px-1 text-2xl font-light font-heading text-white ">
          {title}
        </h1>
        <div className="flex ">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} imagePath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
