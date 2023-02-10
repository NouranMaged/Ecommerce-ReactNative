import React from "react";
import { View, StyleSheet, Text } from "react-native";
import VerticalCard from "../components/verticalCard";
import { exploreData } from "../apis/cardData";
import SearchBar from "../components/searchBar";
import ShoppingCart from "../components/shoppingCart";
import HorizontalCard from "../components/horizontalCard";
import { useSelector } from "react-redux";
import SearchScreen from "./searchScreen";

const HomeScreen = () => {
  const searchInput = useSelector((state) => state.searchInput.searchInput);

  return (
    <>
      {/* SEARCH AND SHOPPING CART BAR */}
      <View style={styles.subHeader}>
        {/* SEARCH BAR */}
        <SearchBar />
        {/* SHOPPING CART */}
        <ShoppingCart />
      </View>

      {searchInput == "" ? (
        <>
          {/* EXPLORE ITEMS SECTION */}
          <View style={styles.container}>
            <Text style={styles.title}>Explore</Text>
            <VerticalCard data={exploreData} />
          </View>

          {/* BEST SELLING SECTION */}
          <View style={styles.container}>
            <Text style={styles.title}>BestSelling</Text>
            <HorizontalCard />
          </View>
        </>
      ) : (
        <SearchScreen />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  subHeader: {
    width: "100%",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    top: 100,
    position: "absolute",
    alignItems: "center",
    zIndex: 2000,
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
  },
  container: {
    top: 170,
    padding: 20,
  },
});

export default HomeScreen;
