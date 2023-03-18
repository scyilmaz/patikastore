import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  TextInput,
} from "react-native";
import ItemsList from "./src/components/Items/Items";
import listItem from "./listItem.json";
import SearchBar from "./src/components/Serchbar/searchbar";
function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.patika_title}>PATİKASTORE</Text>
        <SearchBar />
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          keyExtractor={(item) => item.id}
          data={listItem}
          renderItem={({ item }) => <ItemsList urunler={item} />}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 130,
  },
  patika_title: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    color: "purple",
    fontSize: 35,
    fontWeight: "bold",
  },
});
