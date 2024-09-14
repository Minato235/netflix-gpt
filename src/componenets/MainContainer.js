import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from 'react-redux'
const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovie);
  if (!movies) return;
  const len=movies.length;
  const a = Math.floor(Math.random() * (len - 1)) + 1;
// console.log(`Random value between 1 and 20 is ${a}`);

  const movie = movies[a];

  // console.log(movie);
  const {original_title,overview,id}=movie;
  return (<div>
    <VideoTitle title={original_title} overview={overview}/>
    <VideoBackground movideId={id}/>
    
  </div>);
};
export default MainContainer;
