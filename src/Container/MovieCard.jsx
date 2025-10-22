import { img_path } from "../URL/URL";

const MovieCard = ({ imagePath }) => {
  if (!imagePath) return null;

  return (
    <div>
      <img
        className="rounded-md h-36 w-32 md:h-52 md:w-48"
        src={img_path + imagePath}
        alt="img_cover"
      />
    </div>
  );
};

export default MovieCard;
