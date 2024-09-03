import { useDispatch } from "react-redux";
import { top_movies_api, api_options } from "../util/constants";
import { addPopularMovies, addTopMovies } from "../util/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  
  const getTopMovies = async () => {
    const data = await fetch(top_movies_api, api_options);
    const json = await data.json();
    // console.log(json.results);
    dispatch(addTopMovies(json.results));
  };
  useEffect(() => {
    getTopMovies();
  }, []);
};
export default useTopRatedMovies;
