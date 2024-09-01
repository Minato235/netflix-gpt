import Header from "./Header";
import useNowPlayingMovie from "./useNowPlayingMovies";
const Browse = () => {
  useNowPlayingMovie();
  return (
    <div>
      <div>
        <Header />
      </div>
    </div>
  );
};
export default Browse;
