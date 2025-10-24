import MovieCard from "./MovieCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const MovieList = ({ title, movies, hide_Title = false }) => {
  const movies_result = movies?.filter((movie) => movie.poster_path);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },

      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="px-15 my-6 md:px-10">
      {!hide_Title && (
        <h1 className=" py-5 px-1 font-medium text-lg md:text-3xl font-heading text-white  ">
          {title}
        </h1>
      )}
      <Slider {...settings}>
        {movies_result?.map((movie) => (
          <div key={movie.id} className=" px-2 ">
            <MovieCard imagePath={movie.poster_path} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MovieList;
