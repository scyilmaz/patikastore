import React from "react";
import { View, TouchableOpacity, Text, TextInput } from "react-native";
import searchcontainer from "./searhbar.style";

const SearchBar = () => {
  return (
    <View style={searchcontainer.buttoncontainer}>
      <TextInput
        style={searchcontainer.searchbar}
        placeholderTextColor={searchcontainer.placeholder.color}
        placeholderStyle={searchcontainer.placeholder}
        placeholder="Ürün ismini giriniz"
        color="#2b2b2b"
      />
      <TouchableOpacity style={searchcontainer.searchbutton}>
        <Text style={searchcontainer.buttontext}>ARA</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
