import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovie: null,
    trailerVideo:null,
  },
  reducers: {
    nowPlayingMovie: (state, action) => {
      state.nowPlayingMovie = action.payload;
    },
    addTradilerVideo:(state,action)=>{
      state.trailerVideo=action.payload;
    }
  },
});
export const { nowPlayingMovie,addTradilerVideo } = movieSlice.actions;
export default movieSlice.reducer;
