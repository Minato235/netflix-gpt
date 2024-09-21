import React, { useRef } from "react";
// import { loginBg } from "../util/constants";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const createGptSearch = async () => {
    console.log(searchText.current.value);
    //we need to make api call
    const gptResults = await openAi.chat.completions.create({
      messages: [{ role: "user", content: searchText.current.value }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults.choices);
  };
  return (
    <div className="flex justify-center py-60">
      {/* <img
        src={loginBg}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      /> */}
      <form className="w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
        <div className="relative px-2">
          <input
            ref={searchText}
            type="search"
            className="w-full p-3 pl-10 text-2xl text-red-500 border rounded-lg bg-red-50 focus:ring-red-500 focus:border-red-500"
            placeholder="Search for movies or shows..."
          />
          <button
            onClick={createGptSearch}
            className="absolute  right-2 bottom-2 bg-red-500 text-white p-2 rounded-lg hover:bg-red-600"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default GptSearchBar;
