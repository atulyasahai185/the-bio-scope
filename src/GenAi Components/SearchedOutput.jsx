import { useSelector } from "react-redux";
import MovieList from "../Container/MovieList";

const SearchedOutput = () => {
  const { movieResult, movieName } = useSelector((store) => store.search);

  if (!movieName) return null;

  console.log("moviename:", movieResult);

  // if (isLoading) return <Shimmer />;

  return (
    <div className="text-black bg-black/70 mt-10">
      <div>
        {movieName.map((picture, index) => (
          <MovieList
            key={movieName}
            title={picture}
            movies={movieResult[index]}
            hide_Title={true}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchedOutput;
