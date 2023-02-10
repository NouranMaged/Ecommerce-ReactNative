import React, { useState } from "react";
import { SearchBar } from "@rneui/themed";
import { View, Text, StyleSheet } from "react-native";

const SearchBarComponent = () => {
  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };

  return (
    <View style={styles.view}>
      <SearchBar
        placeholder="Search"
        onChangeText={updateSearch}
        value={search}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    margin: 10,
  },
});

export default SearchBarComponent;
