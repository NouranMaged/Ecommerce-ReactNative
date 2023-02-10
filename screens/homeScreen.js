import React from "react";
import { View, StyleSheet, Text } from "react-native";
import VerticalCard from "../components/verticalCard";
import HorizontalCard from "../components/horizontalCard";
import SubHeader from "../components/subHeader";
import { exploreData } from "../apis/cardData";

const HomeScreen = () => {
  return (
    <>
      {/* SEARCH AND SHOPPING CART BAR */}
      <SubHeader />

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

export default HomeScreen;
