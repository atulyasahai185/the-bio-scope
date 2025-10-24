import { logo, supportedLanguages } from "../URL/URL";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addUser, removeUser } from "../utilis/userSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faLanguage,
  faMagnifyingGlass,
  faRightFromBracket,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { toggleSearchClick } from "../GenAi Components/Utilis/GenaiSlice";
import { langType } from "../utilis/languageSlice";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langIcon, setLangIcon] = useState(false);

  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showSearchComponent = useSelector((store) => store.search.searchClick);

  const dispatch = useDispatch();

  const handleFunction = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unMount = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unMount();
  }, []);

  const handleSearchClick = () => {
    dispatch(toggleSearchClick());
  };

  const handleLangChange = (e) => {
    dispatch(langType(e.target.value));
  };

  const handleHomePg = () => {
    dispatch(toggleSearchClick(false));
    navigate("/browse");
    setMenuOpen(false);
  };

  const handleLangIcon = () => {
    setLangIcon((prev) => !prev);
  };

  return (
    <div className="absolute px-6 md:px-20 py-2 w-screen z-20 flex items-center justify-between bg-gradient-to-b from-black/75">
      <div className="w-32 md:w-44 my-5 md:my-2">
        <img
          src={logo}
          alt="logo-netflix"
          className="w-28 h-12 md:w-48 md:h-20"
        />
      </div>
      {user && (
        <div className="flex items-center gap-4 md:gap-0">
          <ul className="hidden md:flex gap-7 text-white font-medium font-headers text-md md:text-md md:w-64 md:items-center">
            <button
              className=" font-headers cursor-pointer hover:text-xl hover:font-extrabold"
              onClick={handleSearchClick}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <li
              className=" font-headers cursor-pointer hover:text-xl hover:font-extrabold "
              onClick={handleHomePg}
            >
              HOME
            </li>
            <li className="cursor-pointer hover:text-xl hover:font-extrabold">
              FLICK
            </li>
            <li className="cursor-pointer hover:text-xl hover:font-extrabold">
              SHOWS
            </li>
          </ul>
          {/* For Mobile Screens */}
          {showSearchComponent && (
            <div className="md:hidden relative">
              <button className="text-white" onClick={handleLangIcon}>
                <FontAwesomeIcon icon={faLanguage} />
              </button>
              {langIcon && (
                <div className="absolute mt-3 right-0 -left-7 transition-all duration-300 ease-in-out transform ">
                  <select
                    className="text-black font-headers text-lg font-medium p-1.5 bg-gradient-to-r from-red-500 via-red-200 rounded-md"
                    onChange={handleLangChange}
                  >
                    {supportedLanguages.map((lang) => (
                      <option key={lang.Name} value={lang.identifier}>
                        {lang.Name}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          )}
          {/* LOGGED IN INFO */}
          <div
            className={` flex items-center justify-between gap-x-2 md:gap-x-3 px-1 mx-0 md:ml-5 ${
              showSearchComponent ? "w-32 md:w-56" : "w-28 md:w-36"
            }`}
          >
            <img
              src={user?.photoURL}
              alt="photo-icon"
              className="w-11 h-11 rounded-sm "
            />
            <button
              className="cursor-pointer hidden md:block"
              onClick={handleFunction}
            >
              <h2 className="font-medium text-white font-headers text-2xl cursor-pointer">
                <FontAwesomeIcon icon={faRightFromBracket} />
              </h2>
            </button>

            <button
              className="text-white cursor-pointer text-2xl block md:hidden"
              onClick={handleFunction}
            >
              <FontAwesomeIcon icon={faRightFromBracket} />
            </button>

            <div className="relative flex items-center">
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out transform hidden md:block ${
                  showSearchComponent
                    ? "w-12/12 opacity-100 translate-x-0"
                    : " w-0 opacity-0 -translate-x-4 "
                }`}
              >
                <select
                  className="text-black font-headers text-lg font-medium p-1.5 bg-gradient-to-r from-red-500 via-red-200 rounded-md"
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
          </div>

          {/* HAMBURGER */}
          <div>
            <button
              className="md:hidden text-white text-xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
            </button>
          </div>
        </div>
      )}

      {/* SMALL AND MEDIUM DEVICES */}
      {menuOpen && user && (
        <div className=" absolute top-28 left-0 md:hidden w-full flex flex-col bg-black/35 py-7 gap-4 text-white text-end font-medium text-md font-headers">
          <button
            className=" cursor-pointer hover:font-extrabold hover:text-xl"
            onClick={handleSearchClick}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <button
            className="  cursor-pointer hover:font-extrabold hover:text-xl "
            onClick={handleHomePg}
          >
            HOME
          </button>
          <button className="cursor-pointer hover:font-extrabold hover:text-xl">
            FLICK
          </button>
          <button className="cursor-pointer hover:font-extrabold hover:text-xl">
            SHOWS
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
