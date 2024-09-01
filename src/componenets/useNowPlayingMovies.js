import { useDispatch } from "react-redux";
import { apiUrl, api_options } from "../util/constants";
import { nowPlayingMovie } from "../util/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovie = () => {
  const dispatch = useDispatch();
  const getNowPlaying = async () => {
    const data = await fetch(apiUrl, api_options);
    const json = await data.json();
    console.log(json.results);
    dispatch(nowPlayingMovie(json.results));
  };
  useEffect(() => {
    getNowPlaying();
  }, []);
};
export default useNowPlayingMovie;
