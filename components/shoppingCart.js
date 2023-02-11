import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";

const ShoppingCart = () => {
  const navigation = useNavigation();
  const cart = useSelector((state) => state.cart.cart);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("CartScreen")}
      style={styles.icon}
    >
      <View style={styles.iconNotification}>
        <Text style={styles.number}>{cart.length}</Text>
      </View>
      <FontAwesomeIcon icon={faCartShopping} size={25} />
    </TouchableOpacity>
  );
};

export default ShoppingCart;

const styles = StyleSheet.create({
  icon: {
    margin: 15,
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
