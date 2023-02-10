import React from "react";
import { StyleSheet, SafeAreaView, TextInput } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { handleSearchInput } from "../reducers/searchInputReducer";

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchInput = useSelector((state) => state.searchInput.searchInput);

  const handleSearch = (item) => {
    dispatch(handleSearchInput(item));
  };

  return (
    <SafeAreaView style={styles.input}>
      <FontAwesomeIcon icon={faSearch} size={15} style={styles.icon} />
      <TextInput
        onChangeText={handleSearch}
        value={searchInput}
        placeholder="Search"
        inlineImageLeft={"search_icon"}
      />
    </SafeAreaView>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  icon: { marginRight: "10%", left: "20%" },
  input: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    width: "80%",
    borderRadius: 10,
    height: 40,
  },
});
