import { useSelector } from "react-redux";
import LanguageType from "../utilis/languageType";

const SearchBar = () => {
  const langState = useSelector((store) => store.language.type);

  return (
    <div className="pt-48">
      <form
        className="bg-black p-5 flex justify-center drop-shadow-lg  drop-shadow-white/10"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder={LanguageType[langState].searchPlaceHolder}
          className="bg-white w-xl p-2 outline-0"
        />
        <button type="submit" className="bg-indigo-500 p-2 w-32">
          {LanguageType[langState].searchText}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
