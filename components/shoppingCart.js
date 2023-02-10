import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart.cart);
  return (
    <View>
      <View style={styles.iconNotification}>
        <Text style={styles.number}>{cart.length}</Text>
      </View>
      <FontAwesomeIcon icon={faCartShopping} size={30} />
    </View>
  );
};

export default ShoppingCart;

const styles = StyleSheet.create({
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
