import { createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import {useDispatch} from "react-redux"
import { auth } from "./firebase";
import {addUser, removeUser} from "../util/userSlice"

const Body = () => {
  const dispatch=useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  useEffect(()=>{

    onAuthStateChanged(auth, (user) => {
      if (user) {
       
        const {email,password,displayName} = user;
        dispatch(addUser)
        // ...
      } else {
        dispatch(removeUser)
        // User is signed out
        // ...
      }
    });
    
  },[])
  return <RouterProvider router={appRouter} />;
};
export default Body;
