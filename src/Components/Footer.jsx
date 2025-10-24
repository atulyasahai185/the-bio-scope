import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { supportedLanguages } from "../URL/URL";
import { useDispatch } from "react-redux";
import { langType } from "../utilis/languageSlice";

const Footer = () => {
  const dispatch = useDispatch();

  const handleLangChange = (e) => {
    dispatch(langType(e.target.value));
  };

  return (
    <div className="bg-black px-14 md:px-36 py-10">
      <div className="mb-8">
        <span className="text-gray-400">Questions? Call 000-800-919-1743</span>
      </div>
      <div>
        <ul className="text-gray-400 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 mb-8 underline ">
          <li className="cursor-pointer">FAQ</li>
          <li className="cursor-pointer">Investor Relation</li>
          <li className="cursor-pointer">Privacy</li>
          <li className="cursor-pointer">Speed Test</li>
          <li className="cursor-pointer">Help Centre</li>
          <li className="cursor-pointer">Jobs</li>
          <li className="cursor-pointer">Cookie Preference</li>
          <li className="cursor-pointer">Legal Notice</li>
          <li className="cursor-pointer">Account</li>
          <li className="cursor-pointer">Ways to Watch</li>
          <li className="cursor-pointer">Corporate Information</li>
          <li className="cursor-pointer">Only on Bio Scope</li>
          <li className="cursor-pointer">Media Centre</li>
          <li className="cursor-pointer">Terms of Use</li>
          <li className="cursor-pointer">Contact Us</li>
        </ul>
      </div>
      <div className="border-2 h-9 w-36 px-3 border-white/75 rounded-md gap-1 flex items-center">
        <FontAwesomeIcon className="text-white" icon={faLanguage} />
        <select
          className="text-white font-language text-lg font-medium italic "
          onChange={handleLangChange}
        >
          {supportedLanguages.map((lang) => (
            <option key={lang.Name} value={lang.identifier}>
              {lang.Name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col my-5 gap-7 pt-3">
        <span className="text-gray-400">The Bio Scope India</span>

        <p className="text-gray-400">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <a className="text-blue-500 underline cursor-pointer">Learn more</a>.
        </p>
      </div>
    </div>
  );
};

export default Footer;
