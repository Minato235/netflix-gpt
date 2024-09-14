import MovieCards from "./movieCards";
import MovieList from "./movieList"
import {useSelector} from "react-redux"
const SecondryContainer = () => {
    const movies=useSelector((store)=>store.movies)
    // console.log(movies)
  return (
    <div >
       <div className="-mt-55 relative z-40"><MovieList title={"Now Playing"} movies={movies.nowPlayingMovie}/></div> 
        <MovieList title={"Top Rated Movies"} movies={movies.addTopMovies}/>
        <MovieList title={"Based on your Likes"} movies={movies.addPopularMovies}/>
        <MovieList title={"Likes"} movies={movies.nowPlayingMovie}/>
        <MovieList title={"Comedy"} movies={movies.nowPlayingMovie}/>
        <MovieCards/>
    </div>
  );
};
export default SecondryContainer;
//we need to get diffrent movies uits pending