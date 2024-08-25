import Header from "./Header";
import { api_options,apiUrl } from "../util/constants";
import { useEffect } from "react";
const Browse = () => {
  const getNowPlaying=async()=>{
    const data=await fetch(apiUrl,api_options)
    const json=await data.json()
    console.log(json.results)
  }
  useEffect(()=>{
    getNowPlaying()
  },[])
  return (
    <div>
      <div>
        <Header />
      </div>
    </div>
  );
};
export default Browse;
