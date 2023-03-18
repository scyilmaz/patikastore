import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const searchcontainer = StyleSheet.create({
  buttoncontainer: {
    width: width,
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 10,
  },
  searchbar: {
    width: width - 120,
    height: 48,
    fontSize: 16,
    paddingLeft: 45,
    paddingRight: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    marginRight: 10,
  },
  searchbutton: {
    width: 80,
    height: 48,
    borderRadius: 5,
    color: "white",
    backgroundColor: "purple",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  buttontext: {
    fontSize: 16,
    color: "white",
  },
  placeholder: {
    color: "#999",
  },
});

export default searchcontainer;
