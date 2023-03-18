import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#413543",
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  image: {
    borderRadius: 10,
    height: Dimensions.get("window").height / 4,
    margin: 5,
    resizeMode: "contain",
  },
  title: {
    fontSize: 17,
    color: "white",
    marginTop: 20,
    fontWeight: "bold",
    marginLeft: 5,
  },
  price: {
    margin: 10,
    fontWeight: "bold",
    fontSize: 15,
    color: "white",
  },
  inStock: {
    color: "red",
    fontSize: 18,
    margin: 5,
    fontWeight: "bold",
  },
});
export default styles;
