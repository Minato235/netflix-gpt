import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import {useNavigate} from "react-router-dom"
import LeavingSoonPopup from "./LeavingSoon";
const Header = () => {
    const navigate=useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/")
      })
      .catch((error) => {
        // An error happened.
        console.log("its happend error")
      });
  };
  return (
    <div className="absolute  w-screen px-8 py-2 bg-gradient-to-b from to-black p-2 flex justify-between">
      <div>
        <img
          className="0.25rem w-44"
          src="https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/7500/Netflix_Logo_RGB-1024.png"
          alt="Logo"
        ></img>
      </div>
      <div className="my-14 mx-4 flex w-14 h-14">
        <img
          className=""
          src="https://occ-0-2482-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
          alt="icon-right"
        ></img>
        <button onClick={handleSignOut}onDoubleClick={LeavingSoonPopup} className="font-bold mr-2 bg-slate-200">
          Sign Out
        </button>
      </div>
    </div>
  );
};
export default Header;
