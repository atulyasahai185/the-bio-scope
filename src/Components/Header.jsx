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
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { toggleSearchClick } from "../GenAi Components/Utilis/GenaiSlice";
import { langType } from "../utilis/languageSlice";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showSearchComponent = useSelector((store) => store.search.searchClick);

  const dispatch = useDispatch();

  const handleFunction = () => {
    signOut(auth)
      .then(() => {})
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
        navigate("/login");
      }
    });
    return () => unMount();
  }, []);

  const handleSearchClick = () => {
    dispatch(toggleSearchClick());
    setMenuOpen(false);
  };

  const handleLangChange = (e) => {
    dispatch(langType(e.target.value));
  };

  const handleHomePg = () => {
    dispatch(toggleSearchClick(false));
    navigate("/browse");
    setMenuOpen(false);
  };

  return (
    <div className="absolute px-6 md:px-20 py-2 bg-gradient-to-tr from-black/60 w-screen z-10 flex items-center justify-between bg-black/35 md:bg-gray-500/25 sm:bg-white/15   ">
      <div className="w-32 md:w-44 my-5 md:my-2">
        <img
          src={logo}
          alt="logo-netflix"
          className="w-28 h-12 md:w-48 md:h-20"
        />
      </div>
      {user && (
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex gap-7 text-white font-medium font-headers text-lg md:text-md md:w-64 md:items-center">
            <button
              className=" font-headers cursor-pointer"
              onClick={handleSearchClick}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <li
              className=" font-headers cursor-pointer "
              onClick={handleHomePg}
            >
              HOME
            </li>
            <li className="cursor-pointer">FLICK</li>
            <li className="cursor-pointer">SHOWS</li>
            {showSearchComponent && (
              <div>
                <select className="text-white" onChange={handleLangChange}>
                  {supportedLanguages.map((lang) => (
                    <option key={lang.Name} value={lang.identifier}>
                      {lang.Name}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </ul>
          {/* LOGGED IN INFO */}
          <div className=" flex items-center gap-7 px-5 w-52 lg:w-56 ">
            <img
              src={user?.photoURL}
              alt="photo-icon"
              className="w-11 h-11 rounded-sm "
            />
            <button className="" onClick={handleFunction}>
              <h2 className="font-medium text-white font-headers text-lg">
                (Sign Out)
              </h2>
            </button>
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
        <div className=" absolute top-28 left-0 lg:hidden w-full flex flex-col bg-black/35 py-7 gap-4 text-white font-medium text-lg font-headers">
          <button
            className=" cursor-pointer hover:font-extrabold hover:text-2xl"
            onClick={handleSearchClick}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <button
            className="  cursor-pointer hover:font-extrabold hover:text-2xl "
            onClick={handleHomePg}
          >
            HOME
          </button>
          <button className="cursor-pointer hover:font-extrabold hover:text-2xl">
            FLICK
          </button>
          <button className="cursor-pointer hover:font-extrabold hover:text-2xl">
            SHOWS
          </button>
          {showSearchComponent && (
            <div>
              <select
                className="text-white bg-transparent"
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
    </div>
  );
};

export default Header;
