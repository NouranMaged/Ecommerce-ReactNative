import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser, faBars } from "@fortawesome/free-solid-svg-icons";

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
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: StatusBar.currentHeight,
    padding: StatusBar.currentHeight,
    top: 0,
    position: "absolute",
    zIndex: 2000,
  },

  iconUser: {
    height: 30,
    width: 30,
    borderRadius: 6,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MainHeader;
