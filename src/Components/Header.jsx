import { logo, photo_icon } from "../URL/URL";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleFunction = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

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
