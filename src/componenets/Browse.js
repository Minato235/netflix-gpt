import Header from "./Header";
import useNowPlayingMovie from "./useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondryContainer from "./Main2ndryContainer";
const Browse = () => {
  useNowPlayingMovie();
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
