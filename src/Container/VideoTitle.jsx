const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[15%] px-20 absolute w-screen aspect-video bg-gradient-to-r from-black/90">
      <h2 className="text-5xl font-bold text-white">{title}</h2>
      <p className="text-lg font-medium py-6 w-4/12 text-white">{overview}</p>
      <div className="">
        <button className="bg-white/90 text-lg font-semibold rounded-sm w-28 p-2 cursor-pointer">
          ▶️ Play
        </button>
        <button className="bg-slate-200/40 text-xl font-semibold rounded-sm w-36 p-2 cursor-pointer mx-3">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
