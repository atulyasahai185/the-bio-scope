import { useRef, useState } from "react";
import Header from "./Header";
import { bg_img, photo_url } from "../URL/URL";
import { checkValidation } from "../utilis/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utilis/userSlice";

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleClick = () => {
    const message = checkValidation(
      email.current?.value,
      password.current?.value
    );
    setErrorMessage(message);

    if (message) return;

    if (isRegister) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: photo_url,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });

          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const handleToggle = (e) => {
    e.preventDefault();

    setIsRegister(!isRegister);
  };

  return (
    <div className="">
      <div className="absolute  ">
        <Header />
        <img src={bg_img} alt="bg-netflix" className=" w-screen h-screen  " />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleClick();
        }}
        className="absolute w-[26rem] bg-black/70 my-28 mx-auto left-0 right-0 p-12"
      >
        <h2 className="font-extrabold text-white text-3xl">
          {isRegister ? "Sign Up" : "Sign In"}
        </h2>
        {isRegister && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="bg-black/30 border-gray-500 border-2 text-gray-200 outline-white p-3 mt-4 w-xs rounded-sm"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or mobile number"
          className="bg-black/30 border-gray-500 border-2 text-gray-200 outline-white p-3 my-5 w-xs rounded-sm"
        />
        <input
          ref={password}
          type="password"
          placeholder={isRegister ? " New Password" : "Password"}
          className="bg-black/30 border-gray-500 border-2 text-gray-200 outline-white p-3 w-xs rounded-sm"
        />
        <p className="text-red-500 font-semibold mt-2 text-sm">
          {errorMessage}
        </p>
        <button
          type="submit"
          className="bg-red-600 outline-white p-2 my-5 w-xs font-bold text-white rounded-sm"
        >
          {isRegister ? "Sign Up" : "Sign In"}
        </button>
        <h2 className="text-gray-200 text-center text-lg">OR</h2>
        <button className="bg-gray-400/40 text-white font-bold p-2 w-xs rounded-sm my-4">
          Use a sign-in code
        </button>
        <h2 className="text-white text-center underline">
          {isRegister ? "" : "Forgot password?"}
        </h2>
        <input type="checkbox" className=" bg-white my-5" />
        <label className="text-white mx-3">Remember me</label>
        <div className="flex">
          <h3 className="text-white">
            {isRegister ? "Already a member?" : "New to Netflix?"}
          </h3>
          <button
            className="text-white font-bold hover:underline cursor-pointer"
            onClick={handleToggle}
          >
            {isRegister ? "Sign In Now" : "Sign up now."}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
