import { logo } from "../URL/URL";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utilis/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
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

  return (
    <div className="absolute px-28 py-2 bg-gradient-to-tr from-black/60 w-screen z-10 flex justify-between">
      <div className="">
        <img src={logo} alt="logo-netflix" className="w-48" />
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
