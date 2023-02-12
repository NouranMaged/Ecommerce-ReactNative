import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";
import {
  decreamentQuantity,
  incrementQuantity,
  removeFromCart,
} from "../reducers/cartReducer";

const CartScreen = () => {
  const cartData = useSelector((state) => state.cart.cart);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleDecreament = (item) => {
    if (item.quantity == 1) {
      dispatch(removeFromCart(item));
    } else {
      dispatch(decreamentQuantity(item));
    }
  };
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Shopping Cart </Text>
        <View>
          {cartData?.length == 0 ? (
            <View>
              <Text style={styles.noData}>Shopping Cart in empty.</Text>
              <Button
                onPress={() => navigation.navigate("Home")}
                title="Go to Home Page"
              />
            </View>
          ) : (
            <>
              {cartData?.map((item, index) => {
                return (
                  <View style={styles.card} key={index}>
                    {/* CARD BODY  */}
                    <View>
                      <Image
                        style={styles.cardImage}
                        source={{
                          uri: "https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg",
                        }}
                      />
                    </View>
                    <View>
                      <Text style={styles.itemName}>{item.itemName}</Text>
                      <Text style={styles.itemDescription}>
                        {item.itemDescription}
                      </Text>

                      <Text style={styles.itemPrice}>${item.itemPrice}</Text>
                    </View>

                    <View style={styles.quantitySection}>
                      <TouchableOpacity
                        onPress={() => handleDecreament(item)}
                        style={styles.minusIcon}
                      >
                        <View>
                          <FontAwesomeIcon icon={faMinus} color="white" />
                        </View>
                      </TouchableOpacity>
                      <View style={styles.quantityText}>
                        <Text>{item.quantity}</Text>
                      </View>
                      <TouchableOpacity
                        onPress={() => dispatch(incrementQuantity(item))}
                        style={styles.plusIcon}
                      >
                        <View>
                          <FontAwesomeIcon icon={faPlus} color="white" />
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              })}
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 25,
  },
  noData: {
    fontWeight: "bold",
    fontSize: 25,
    color: "red",
    textAlign: "center",
    margin: "10%",
  },
  quantitySection: {
    width: 140,
    flexDirection: "row",
    borderColor: "black",
    right: 0,
    margin: 20,
    bottom: 0,
    position: "absolute",
  },
  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 15,
    height: 150,
    marginTop: 15,
    flexDirection: "row",
  },
  cardImage: {
    borderRadius: 15,
    height: 100,
    width: 100,
    margin: 20,
  },
  itemName: {
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 18,
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
  minusIcon: {
    backgroundColor: "red",
    borderRadius: 5,
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    bottom: 0,
  },
  plusIcon: {
    backgroundColor: "green",
    borderRadius: 5,
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    bottom: 0,
  },
  quantityText: {
    backgroundColor: "white",
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 5,
    height: 30,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    bottom: 0,
    marginLeft: 10,
    marginRight: 10,
  },
});
