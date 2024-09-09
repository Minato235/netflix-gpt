import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import  movieReducers from "./moviesSlice";
import getReducer from "./gptSlice"

const appStore=configureStore({
    reducer:{
        user:userSlice,
        movies:movieReducers,
        gpt:getReducer

    },
})
export default appStore;