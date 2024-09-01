import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {api_options} from "../util/constants"
import { addTradilerVideo } from "../util/moviesSlice";


const useMovieTrailer=(movideId)=>{
    const dispatch = useDispatch();
  
    const movieData = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/"+movideId+"/videos?language=en-US",
        api_options
      );
      const json = await data.json();
      const filterData = json.results.filter((video) => video.type === "Trailer");
      const trailer = filterData.length ? filterData[0] : json[0];
      console.log(trailer);
      dispatch(addTradilerVideo(trailer));
    };
    useEffect(() => {
      movieData();
    }, []);
}
export default useMovieTrailer;