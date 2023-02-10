import { createSlice } from "@reduxjs/toolkit";
import { exploreData } from "../apis/cardData";

export const searchInputSlice = createSlice({
  name: "searchInput",
  initialState: {
    searchInput: "",
    searchedData: [],
  },
  reducers: {
    handleSearchInput: (state, action) => {
      state.searchInput = action.payload;

      const updatedData = exploreData.filter((item) => {
        const itemData = `${item.itemName.toUpperCase()})`;
        const textData = action.payload.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      state.searchedData = updatedData;
    },
  },
});
export const { handleSearchInput } = searchInputSlice.actions;
export default searchInputSlice.reducer;
