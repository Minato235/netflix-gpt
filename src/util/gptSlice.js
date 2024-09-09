import { createSlice } from "@reduxjs/toolkit";

const getSlice = createSlice({
  name: "gpt",
  initialState: {  // Corrected 'intialState' to 'initialState'
    showGptSearch: false,
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});

export const { toggleGptSearch } = getSlice.actions;
export default getSlice.reducer;
