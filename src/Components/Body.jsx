import { useNavigate } from "react-router-dom";
import { bg_img, logo, supportedLanguages } from "../URL/URL";
import { useDispatch, useSelector } from "react-redux";
import { langType } from "../utilis/languageSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan, faLanguage } from "@fortawesome/free-solid-svg-icons";
import LanguageType from "../utilis/languageType";
import Footer from "./Footer";
import { useState } from "react";

const Body = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const langState = useSelector((store) => store.language.type);

  const [langIcon, setLangIcon] = useState(false);

  const handleLangChange = (e) => {
    dispatch(langType(e.target.value));
  };

  const handleSignIn = () => {
    navigate("/login");
  };

  const aboutLangIcon = () => {
    setLangIcon((prev) => !prev);
  };

  return (
    <>
      {/* Backgorund Image */}
      <div className="bg-gradient-to-b from-black/35 from-100% h-screen">
        <div className="fixed w-screen h-screen -z-10">
          <img src={bg_img} alt="" className="h-screen w-screen" />
        </div>

        {/* Header Section */}
        <div className="flex items-center justify-around bg-gradient-to-b from-black px-6 md:px-2 py-2 z-20 w-screen">
          <div className="w-32 md:w-44 my-5 md:my-2">
            <img src={logo} alt="logo" className="w-28 h-12 md:w-48 md:h-20" />
          </div>

          {/* For Mobile Devices */}
          <div className="md:hidden relative border-2 border-white/75 rounded-md w-14 h-8 text-center px-3 py-0.5 ">
            <button onClick={aboutLangIcon}>
              <FontAwesomeIcon className="text-white" icon={faLanguage} />
            </button>
            {langIcon && (
              <select
                className="text-white font-language text-lg font-medium italic absolute mt-8 right-0 -left-4 transition-all duration-300 ease-in-out transform w-24"
                onChange={handleLangChange}
              >
                {supportedLanguages.map((lang) => (
                  <option key={lang.Name} value={lang.identifier}>
                    {lang.Name}
                  </option>
                ))}
              </select>
            )}
          </div>

          {/* For Large Screen Devices */}
          <div className="flex justify-between gap-6">
            <div className="hidden md:block">
              <div className="border-2 h-9 w-12 md:w-36 px-3 border-white/75 rounded-md gap-1 flex items-center">
                <FontAwesomeIcon className="text-white" icon={faLanguage} />
                <select
                  className="text-white font-language text-lg font-medium italic  "
                  onChange={handleLangChange}
                >
                  {supportedLanguages.map((lang) => (
                    <option key={lang.Name} value={lang.identifier}>
                      {lang.Name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              className="text-white text-sm font-medium bg-red-700 px-2 md:px-1 w-16 md:w-24 h-9 rounded-md"
              onClick={handleSignIn}
            >
              Sign In
            </button>
          </div>
        </div>

        {/* Language Change as per choice */}
        <div className="flex flex-col items-center mt-40">
          <div>
            <h1 className="text-3xl md:text-6xl w-72 md:w-2xl ml-20 md:ml-0 font-[900] font-info text-white text-center">
              {LanguageType[langState].subHeading}
            </h1>
            <h3 className="text-xl font-semibold text-white font-image text-center my-2 md:my-5">
              {LanguageType[langState].subHeader}
            </h3>
            <h4 className="text-lg font-medium text-white font-image text-center">
              {LanguageType[langState].subHeader_2}
            </h4>
          </div>
          <div className="md:flex justify-around gap-2 mt-5 ">
            <input
              type="text"
              placeholder="Email address"
              className="border-2 border-white/55 rounded-sm text-white text-lg px-5 py-6 h-12 w-xs md:w-sm outline-0"
              required
            />
            <button
              className="bg-red-700 text-sm md:text-2xl font-image font-bold text-white px-1 md:px-4 border-2 border-red-700 h-13 w-32 md:w-52 rounded-sm flex gap-2 md:gap-4 items-center mx-20 md:mx-0 mt-5 md:mt-0"
              onClick={handleSignIn}
            >
              Get Started
              <FontAwesomeIcon
                className="text-md md:text-xl"
                icon={faGreaterThan}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Body;
