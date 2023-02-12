import React from "react";
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../reducers/cartReducer";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const VerticalCard = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const addItemToCart = (item) => {
    dispatch(addToCart(item));
  };
  const removeItemFromCart = (item) => {
    dispatch(removeFromCart(item));
  };
  return (
    <SafeAreaView>
      <ScrollView horizontal={true}>
        {props.data?.map((item, index) => (
          <View key={index} style={styles.card}>
            {/* CARD BODY  */}
            <View>
              <Image
                style={styles.cardImage}
                source={{
                  uri: "https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg",
                }}
              />
              <View style={styles.heartIcon}>
                <TouchableOpacity>
                  <FontAwesomeIcon icon={faHeart} color="white" />
                </TouchableOpacity>
              </View>
            </View>

            {/* CARD DETAILS */}
            <Text style={styles.itemName}>{item.itemName}</Text>
            <Text style={styles.itemDescription}>{item.itemDescription}</Text>

            {/* CARD FOOTER  */}
            <View style={styles.cardFooter}>
              <Text style={styles.itemPrice}>${item.itemPrice}</Text>

              {cart.some((value) => value.id == item.id) ? (
                <TouchableOpacity
                  style={styles.removeItem}
                  onPress={() => removeItemFromCart(item)}
                >
                  <View>
                    <FontAwesomeIcon icon={faMinus} color="white" />
                  </View>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.addItem}
                  onPress={() => addItemToCart(item)}
                >
                  <View>
                    <FontAwesomeIcon icon={faPlus} color="white" />
                  </View>
                </TouchableOpacity>
              )}
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 250,
    padding: 10,
    height: 300,
    marginTop: 15,
    backgroundColor: "#fff",
    borderRadius: 15,
    marginHorizontal: 10,
  },
  cardImage: {
    borderRadius: 15,
    height: 180,
    //   height:  180),
  },
  itemName: {
    fontWeight: "bold",
    fontSize: 15,
    color: "black",
  },
  itemDescription: {
    fontSize: 13,
    color: "#bdbcc4",
  },
  itemPrice: {
    color: "#3f4046",
    fontSize: 20,
  },
  addItem: {
    backgroundColor: "grey",
    borderRadius: 50,
    height: 25,
    width: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  removeItem: {
    backgroundColor: "green",
    borderRadius: 50,
    height: 25,
    width: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heartIcon: {
    backgroundColor: "red",
    borderRadius: 50,
    height: 25,
    width: 25,
    bottom: 170,
    left: 190,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2000,
  },
});

export default VerticalCard;
