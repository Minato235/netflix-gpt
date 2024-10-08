import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../util/validate";
import { auth } from "../componenets/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { loginBg } from "../util/constants";

const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const [errorMessage, setMessage] = useState(null);

  const toggle = () => {
    setSignIn(!signIn);
  };
  const email = useRef(null);
  const password = useRef(null);

  const handleMainClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setMessage(message);
    if (message) return;
    if (!signIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage(errorCode + "==>" + errorMessage);

          // ..
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("200 success"+user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage(errorCode + "==>" + errorMessage);

        });
    }
  };

  return (
    <div className="relative h-screen">
      <Header />
      <img
        src={loginBg}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute top-1/2 left-1/2 w-full max-w-md p-8 bg-black bg-opacity-80 transform -translate-x-1/2 -translate-y-1/2 rounded-md text-white"
      >
        <h1 className="font-bold text-4xl py-4">
          {signIn ? "Sign In" : "Sign Up"}
        </h1>
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="py-3 px-4 mb-4 w-full bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="py-3 px-4 mb-4 w-full bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <p className="text-red-500 font-bold">{errorMessage}</p>
        {!signIn && (
          <input
            type="password"
            placeholder="Confirm Password"
            aria-label="Confirm Password"
            className="py-3 px-4 mb-6 w-full bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        )}
        <button
          className="py-3 bg-red-600 hover:bg-red-700 w-full rounded-md text-lg font-semibold"
          onClick={handleMainClick}
        >
          {signIn ? "Sign In" : "Sign Up"}
        </button>
        {signIn && (
          <div className="flex justify-between items-center mt-4 text-sm">
            <div>
              <input
                type="checkbox"
                id="remember"
                className="form-checkbox bg-gray-800 text-red-600"
              />
              <label htmlFor="remember" className="ml-2 text-gray-400">
                Remember me
              </label>
            </div>
            <a href="#" className="text-gray-400 hover:underline">
              Need help?
            </a>
          </div>
        )}
        <div className="mt-8 text-center text-gray-400">
          <p>
            {signIn ? "New to Netflix? " : "Already have an account? "}
            <a href="#" onClick={toggle} className="text-white hover:underline">
              {signIn ? "Sign Up Now" : "Sign In"}
            </a>
          </p>
          <p className="text-xs mt-2">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Learn more.
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
