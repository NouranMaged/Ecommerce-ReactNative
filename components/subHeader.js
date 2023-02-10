import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Linking,
  StyleProp,
  TextStyle,
  ViewStyle,
  SafeAreaView,
  TextInput,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCartShopping,
  faUser,
  faArrowRight,
  faPlus,
  faHeart,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { exploreData } from "../apis/cardData";

const SubHeader = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const cart = useSelector((state) => state.cart.cart);

  const searchFunction = (text) => {
    const updatedData = exploreData.filter((item) => {
      const item_data = `${item.name.toUpperCase()})`;
      const text_data = text.toUpperCase();
      return item_data.indexOf(text_data) > -1;
    });

    setSearchValue(text);
    setData(updatedData);
  };

  return (
    <View style={styles.subHeader}>
      {/* SEARCH BAR */}
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={searchFunction}
          value={searchValue}
          placeholder="Search"
          inlineImageLeft={"search_icon"}
        />{" "}
        <FontAwesomeIcon icon={faCartShopping} size={30} />
      </SafeAreaView>

      {/* SHOPPING CART */}
      <View>
        <View style={styles.iconNotification}>
          <Text style={styles.number}>{cart.length}</Text>
        </View>
        <FontAwesomeIcon icon={faCartShopping} size={30} />
      </View>
    </View>
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
  input: {
    height: 40,
    borderWidth: 0,
    padding: 10,
    borderRadius: 10,
    width: 300,
    backgroundColor: "#fff",
  },
  iconNotification: {
    position: "absolute",
    height: 20,
    width: 20,
    borderRadius: 15,
    backgroundColor: "#f9613f",
    left: 20,
    top: -9,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2000,
  },
  number: {
    color: "white",
    fontWeight: "bold",
    padding: 1,
  },
});
export default SubHeader;
