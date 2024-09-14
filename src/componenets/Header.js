import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import LeavingSoonPopup from "./LeavingSoon";
import { useEffect } from "react";
import { addUser, removeUser } from "../util/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { logo, netflixLogo } from "../util/constants";
import {toggleGptSearch} from "../util/gptSlice"

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user); // Access user from Redux store
  const showGptSearch=useSelector((state)=>state.gpt.showGptSearch)
// console.log(showGptSearch)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log("its happend error");
      });
  };

  const handleGptToogle = () => {dispatch(toggleGptSearch())};

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, password, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            password: password,
            displayName: displayName,
          })
        );
        navigate("/Browse");
        // ...
      } else {
        dispatch(removeUser());
        navigate("/");
        // User is signed out
        // ...
      }
    });
  }, [dispatch, navigate]);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-r  from-transparent to-black p-2 flex justify-between z-10">
      <div>
        <img className="w-44" src={netflixLogo} alt="Logo" />
      </div>
      {user && (
        <div className="flex items-center">
          
          <button
            type="button"
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-7 py-3 text-center me-2 mb-2"
            onClick={handleGptToogle}
          >
            {showGptSearch?"Home":"Netflix GPT"}
          </button>
          <img className="w-14 h-14 mx-4" src={logo} alt="icon-right" />
          <button
            onClick={handleSignOut}
            onDoubleClick={LeavingSoonPopup}
            className="font-bold mr-2 bg-slate-200 p-2 rounded"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
