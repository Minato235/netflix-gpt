import Header from "./Header";
import useNowPlayingMovie from "./useNowPlayingMovies";
import usePopularMovies from "./usePopularMovies";
import useTopRatedMovies from "./useTopRatedMovies";

import MainContainer from "./MainContainer";
import SecondryContainer from "./Main2ndryContainer";
const Browse = () => {
  useNowPlayingMovie();
  usePopularMovies();
  useTopRatedMovies();

  return (
    <div>
      <div>
        <Header />
        <MainContainer/>
        <SecondryContainer/>
      </div>
    </div>
  );
};
export default Browse;
