import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import VerticalCard from "../components/verticalCard";
import { bestSellingData, exploreData } from "../apis/cardData";
import SearchBar from "../components/searchBar";
import ShoppingCart from "../components/shoppingCart";
import HorizontalCard from "../components/horizontalCard";
import { useSelector } from "react-redux";
import SearchScreen from "./searchScreen";
import { responsiveHeight } from "../utils";

const HomeScreen = () => {
  const searchInput = useSelector((state) => state.searchInput.searchInput);

  return (
    <ScrollView style={styles.homeScreen}>
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
            <HorizontalCard data={bestSellingData} />
          </View>
        </>
      ) : (
        <SearchScreen />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  subHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 2000,
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
  },
  container: {
    marginTop: responsiveHeight(50),
  },

  homeScreen: {
    backgroundColor: "aliceblue",
  },
});

export default HomeScreen;
