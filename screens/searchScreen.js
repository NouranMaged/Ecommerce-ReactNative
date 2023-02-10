import React from "react";
import { View, StyleSheet, Text } from "react-native";
import VerticalCard from "../components/verticalCard";

const SearchScreen = () => {
  return (
    <>
      {/* EXPLORE ITEMS SECTION */}
      <View style={styles.container}>
        <Text style={styles.title}>Search Result</Text>
        <VerticalCard />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
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
