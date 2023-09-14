import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Image,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../Shared/Colors";
import { Ionicons } from "@expo/vector-icons";

export default function SearchBar({ setSearchText }) {
  const [searchInput, setSearchInput] = useState();

  return (
    <View>
      <LinearGradient
        colors={[Colors.WHITE, "transparent"]}
        style={styles.lGrad}
      >
        <View style={styles.insideView}>
          <Text style={styles.discoverText}>Discover</Text>
          <Image
            source={require("./../../../assets/user.png")}
            style={styles.imageStyle}
          />
        </View>
        <View style={styles.searchBoxView}>
          <Ionicons name="search" size={24} color={Colors.DARK_GRAY} />
          <TextInput
            placeholder="Search"
            style={styles.textInput}
            onChangeText={(value) => setSearchInput(value)}
            onSubmitEditing={() => setSearchText(searchInput)}
          />
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  lGrad: {
    padding: 20,
    width: Dimensions.get("screen").width,
  },
  insideView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  discoverText: {
    fontSize: 35,
    fontFamily: "Raleway-SemiBold",
  },
  imageStyle: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  searchBoxView: {
    display: "flex",
    marginTop: 5,
    flexDirection: "row",
    padding: 10,
    gap: 5,
    elevation: 0.7,
    alignItems: "center",
    backgroundColor: Colors.WHITE,
    borderRadius: 25,
  },
  textInput: {
    backgroundColor: Colors.WHITE,
    width: "80%",
  },
});
