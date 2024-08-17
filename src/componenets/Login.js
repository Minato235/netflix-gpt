import Header from "./Header";

const Login = () => {
  return (
    <div className="bg-center">
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/304b7563-abfe-41bf-95d0-8bb58c03bea6/US-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_633da30f-4247-4a0f-b146-0501cbf91542_large.jpg"
        alt="headerImage"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      
      <form className="w-full max-w-md p-8 bg-black bg-opacity-80 my-36 mx-auto rounded-md text-white">
        <h1 className="font-bold text-4xl py-4">Sign In</h1>
        <input
          type="text"
          placeholder="Email"
          aria-label="Email"
          className="py-3 px-4 mb-4 w-full bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <input
          type="password"
          placeholder="Password"
          aria-label="Password"
          className="py-3 px-4 mb-6 w-full bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <button
          className="py-3 bg-red-600 hover:bg-red-700 w-full rounded-md text-lg font-semibold"
          aria-label="Sign In"
        >
          Sign In
        </button>
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
        <div className="mt-8 text-center text-gray-400">
          <p>
            New to Netflix?{" "}
            <a href="#" className="text-white hover:underline">
              Sign up now.
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
