import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";
import VerticalCard from "../components/verticalCard";

const SearchScreen = () => {
  const searchedData = useSelector((state) => state.searchInput.searchedData);
  return (
    <>
      {/* EXPLORE ITEMS SECTION */}
      <View style={styles.container}>
        {searchedData.length == 0 ? (
          <Text style={styles.noData}>No Data Found ! </Text>
        ) : (
          <Text style={styles.title}>Search Result</Text>
        )}
        <VerticalCard data={searchedData} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  noData: {
    fontWeight: "bold",
    fontSize: 25,
    color: "red",
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
  },
  container: {
    flex: 1,
    top: 180,
    padding: 20,
  },
});

export default SearchScreen;