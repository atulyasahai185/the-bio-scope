import { useNavigate } from "react-router-dom";
import { logo } from "../URL/URL";

const Body = () => {
  const navigate = useNavigate();

  const clickToBrowse = () => {
    navigate("/browse");
  };

  return (
    <div>
      <div>
        <img src={logo} alt="logo" className="w-48" />
      </div>
      <button className="bg-amber-300" onClick={clickToBrowse}>
        Browse Content
      </button>
    </div>
  );
};

export default Body;
