import { logo, supportedLanguages } from "../URL/URL";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utilis/userSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { toggleSearchClick } from "../GenAi Components/Utilis/GenaiSlice";
import { langType } from "../utilis/languageSlice";

const Header = () => {
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
  };

  const handleLangChange = (e) => {
    dispatch(langType(e.target.value));
  };

  const handleHomePg = () => {
    dispatch(toggleSearchClick(false));
    navigate("/browse");
  };

  return (
    <div className="absolute px-28 py-2 bg-gradient-to-tr from-black/60 w-screen z-10 flex justify-between">
      <div className="">
        <img src={logo} alt="logo-netflix" className="w-48" />
      </div>
      <div className=" w-lg ">
        <ul className="flex justify-around items-center my-7 h-10">
          <button
            className="text-white font-medium font-headers text-lg hover:bg-amber-400 hover:w-10 hover:h-8 hover:rounded-2xl hover:text-center cursor-pointer"
            onClick={handleSearchClick}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <li
            className="text-white font-medium font-headers text-lg cursor-pointer "
            onClick={handleHomePg}
          >
            HOME
          </li>
          <li className="text-white font-medium font-headers text-lg">FLICK</li>
          <li className="text-white font-medium font-headers text-lg">
            TV SHOWS
          </li>
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
      </div>

      {user && (
        <div className="my-4 flex justify-between w-40">
          <img src={user?.photoURL} alt="photo-icon" className="w-12 h-12" />
          <button onClick={handleFunction}>
            <h2 className="font-semibold text-white">(Sign Out)</h2>
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
