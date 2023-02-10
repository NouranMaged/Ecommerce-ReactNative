import React from "react";
import { StyleSheet, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import { actualDimensions, responsiveHeight, responsiveWidth } from "../utils";

const MainHeader = () => {
  return (
    <View style={styles.MainHeader}>
      <FontAwesomeIcon icon={faBars} size={20} />
      <View style={styles.iconUser}>
        <FontAwesomeIcon icon={faUser} color="white" size={12} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainHeader: {
    width: actualDimensions.width,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: responsiveHeight(20),
    top: 0,
    position: "absolute",
    zIndex: 2000,
    marginTop: responsiveHeight(30),
  },

  iconUser: {
    height: responsiveHeight(30),
    width: responsiveWidth(30),
    borderRadius: 6,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MainHeader;
