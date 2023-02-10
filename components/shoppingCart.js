import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Linking,
  StyleProp,
  TextStyle,
  ViewStyle,
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
import { connect } from "react-redux";

const ShoppingCart = (props) => {
  return (
    <View style={styles.header}>
      <TextInput
        style={styles.input}
        //  onChangeText={onChangeNumber}
        //   value={number}
        placeholder="useless placeholder"
      />
      <View>
        <View
          style={{
            position: "absolute",
            height: 15,
            width: 15,
            borderRadius: 15,
            backgroundColor: "#f9613f",
            left: 20,
            top: 0,
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2000,
          }}
        ></View>
        <FontAwesomeIcon icon={faCartShopping} size={35} />
      </View>
    </View>

    // <View>
    //   <View
    //     style={{
    //       position: "absolute",
    //       height: 30,
    //       width: 30,
    //       borderRadius: 15,
    //       backgroundColor: "#f9613f",
    //       right: 15,
    //       bottom: 15,
    //       alignItems: "center",
    //       justifyContent: "center",
    //       zIndex: 2000,
    //     }}
    //   >
    //     {/* <Text style={{ color: "white", fontWeight: "bold" }}>
    //       {props.cartItems.length}
    //     </Text> */}
    //   </View>
    //   <Text>
    //     <FontAwesomeIcon icon={faCartShopping} />
    //   </Text>
    // </View>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     cartItems: state,
//   };
// };
const styles = StyleSheet.create({
  header: {
    width: "100%",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    //  marginTop: "20%",
    // top: 0,
    // position: "absolute",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});
// export default connect(mapStateToProps)(ShoppingCart);
export default ShoppingCart;
