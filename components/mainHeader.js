import React from "react";
import { StyleSheet, View } from "react-native";
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
    flexDirection: "row",
    justifyContent: "space-between",
    height: 100,
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "aliceblue",
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
