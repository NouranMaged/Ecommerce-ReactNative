import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import MainHeader from "./components/mainHeader";
import HomeScreen from "./screens/homeScreen";
import store from "./store/store";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <MainHeader />
        <HomeScreen />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "aliceblue",
  },
});
