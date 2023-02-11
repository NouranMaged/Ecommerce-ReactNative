import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { responsiveHeight } from "../utils";

const HorizontalCard = (props) => {
  const [itemIndex, setItemIndex] = useState(0);

  const handleChangeItem = () => {
    if (itemIndex == parseInt(props.data.length - 1)) {
      setItemIndex(0);
    } else {
      setItemIndex(parseInt(itemIndex) + 1);
    }
  };
  return (
    <ScrollView>
      <View style={styles.card}>
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
          <Text style={styles.itemName}>{props.data[itemIndex].itemName}</Text>
          <Text style={styles.itemDescription}>
            {props.data[itemIndex].itemDescription}
          </Text>

          <Text style={styles.itemPrice}>
            ${props.data[itemIndex].itemPrice}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => handleChangeItem()}
          style={styles.iconUser}
        >
          <View>
            <FontAwesomeIcon icon={faArrowRight} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 15,
    height: responsiveHeight(150),
    marginTop: 15,
    alignContent: "center",
    flexDirection: "row",
  },
  cardImage: {
    borderRadius: 15,
    height: responsiveHeight(100),
    width: responsiveHeight(100),
    margin: responsiveHeight(20),
  },
  itemName: {
    marginTop: responsiveHeight(20),
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
  iconUser: {
    backgroundColor: "#3f4046",
    borderRadius: 5,
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    bottom: 0,
    position: "absolute",
    right: 0,
    margin: 20,
  },
});

export default HorizontalCard;
