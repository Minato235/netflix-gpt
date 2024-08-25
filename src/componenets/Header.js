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
    <div className="absolute  w-screen px-8 py-2 bg-gradient-to-b from to-black p-2 flex justify-between">
      <div>
        <img
          className="0.25rem w-44"
          src={netflixLogo}
          alt="Logo"
        ></img>
      </div>
      <div className="my-14 mx-4 flex w-14 h-14">
        <img
          className=""
          src={logo}
          alt="icon-right"
        ></img>
        <button
          onClick={handleSignOut}
          onDoubleClick={LeavingSoonPopup}
          className="font-bold mr-2 bg-slate-200"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};
export default Header;
