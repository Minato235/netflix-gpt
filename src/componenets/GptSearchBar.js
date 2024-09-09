import React from 'react';

const GptSearchBar = () => {
  return (
    <div className="flex justify-center py-60">
      <form className="w-full max-w-md">
        <div className="relative px-2">
          <input
            type="search"
            className="w-full p-3 pl-10 text-2xl text-red-500 border rounded-lg bg-red-50 focus:ring-red-500 focus:border-red-500"
            placeholder="Search for movies or shows..."
          />
          <button
            type="submit"
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
