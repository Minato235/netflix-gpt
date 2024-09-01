import MovieCards from "./movieCards";

const MovieList = ({ title, movies }) => {
  if (!movies) return null; // Safe check for null or undefined movies

  return (
    <div className="bg-black" >
      <div className="mb-4">
        <h1 className="text-3xl py-6 font-bold text-white px-2">{title}</h1>
      </div>
      <div className="flex overflow-x-scroll space-x-4 p-2 scroll ">
        {movies.map(movie => (
          <MovieCards key={movie.id} poster_path={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
