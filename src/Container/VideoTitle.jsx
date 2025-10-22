import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[30%] md:pt-[14%] px-20 absolute w-screen aspect-video bg-gradient-to-r from-black/90 z-10">
      <h2 className="text-xl md:text-5xl font-bold text-white">{title}</h2>
      <p className="hidden md:text-xl font-medium md:my-3 md:w-4/12 text-white md:line-clamp-4">
        {overview}
      </p>
      <div className="mt-3 md:my-4">
        <button className="bg-white/90 text-sm md:text-lg font-semibold rounded-sm w-17 md:w-28 p-1 md:p-2 cursor-pointer">
          <FontAwesomeIcon icon={faPlay} /> Play
        </button>
        <button className="bg-slate-200/40 text-sm md:text-xl font-semibold rounded-sm w-25 md:w-36 p-1 md:p-2 cursor-pointer mx-3">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
