import { img_path } from "../URL/URL";

const MovieCard = ({ imagePath }) => {
  if (!imagePath) return null;

  return (
    <div className="w-60">
      <img
        className="rounded-md h-52 w-48"
        src={img_path + imagePath}
        alt="img_cover"
      />
    </div>
  );
};

export default MovieCard;
