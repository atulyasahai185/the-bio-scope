import { bg_img } from "../URL/URL";
import SearchBar from "./SearchBar";
import SearchedOutput from "./SearchedOutput";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10 ">
        <img src={bg_img} alt="bg-netflix" className=" w-screen h-screen  " />
      </div>
      <SearchBar />
      <SearchedOutput />
    </div>
  );
};

export default GptSearch;
