import { logo } from "../URL/URL";

const Header = () => {
  return (
    <div className="absolute ">
      <div className="px-36 py-2 bg-gradient-to-tr from-black/60 w-screen h-screen">
        <div className="">
          <img src={logo} alt="logo-netflix" className="w-48" />
        </div>
      </div>
    </div>
  );
};

export default Header;
