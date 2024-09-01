import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import LeavingSoonPopup from "./LeavingSoon";
import { useEffect } from "react";
import { addUser, removeUser } from "../util/userSlice";
import { useDispatch } from "react-redux";
import { logo,netflixLogo } from "../util/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      <img
        className="w-44"
        src={netflixLogo}
        alt="Logo"
      />
    </div>
    <div className="flex items-center">
      <img
        className="w-14 h-14 mx-4"
        src={logo}
        alt="icon-right"
      />
      <button
        onClick={handleSignOut}
        onDoubleClick={LeavingSoonPopup}
        className="font-bold mr-2 bg-slate-200 p-2 rounded"
      >
        Sign Out
      </button>
    </div>
  </div>
  
  );
};
export default Header;
