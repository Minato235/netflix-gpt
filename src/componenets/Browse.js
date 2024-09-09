import Header from "./Header";
import useNowPlayingMovie from "./useNowPlayingMovies";
import usePopularMovies from "./usePopularMovies";
import useTopRatedMovies from "./useTopRatedMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

import MainContainer from "./MainContainer";
import SecondryContainer from "./Main2ndryContainer";
const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch); // Updated key to match slice


  useNowPlayingMovie();
  usePopularMovies();
  useTopRatedMovies();

  return (
    <div>
      <div>
        <Header />
        {showGptSearch ? (
          <GptSearch />
        ) : (
          <>
            <MainContainer />
            <SecondryContainer />
          </>
        )}
      </div>
    </div>
  );
};
export default Browse;
