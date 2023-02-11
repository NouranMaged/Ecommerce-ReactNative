import { StyleSheet, View, Text } from "react-native";
import { Provider } from "react-redux";
import store from "./store/store";
import Navigation from "./navigation";
import MainHeader from "./components/mainHeader";
import { responsiveWidth } from "./utils";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <MainHeader />
        <Navigation />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "aliceblue",
    padding: responsiveWidth(20),
  },
});
