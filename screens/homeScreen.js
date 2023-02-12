import React from "react";
import { View, StyleSheet, Text, ScrollView, SafeAreaView } from "react-native";
import VerticalCard from "../components/verticalCard";
import { bestSellingData, exploreData } from "../apis/cardData";
import SearchBar from "../components/searchBar";
import ShoppingCart from "../components/shoppingCart";
import HorizontalCard from "../components/horizontalCard";
import { useSelector } from "react-redux";
import SearchScreen from "./searchScreen";

const HomeScreen = () => {
  const searchInput = useSelector((state) => state.searchInput.searchInput);

  return (
    <SafeAreaView>
      <ScrollView>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  subHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 2000,
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
  },
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
  },
});

export default HomeScreen;
