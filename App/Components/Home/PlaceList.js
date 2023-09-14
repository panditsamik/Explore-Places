import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import PlaceItem from "./PlaceItem";
import { useNavigation } from "@react-navigation/native";

export default function PlaceList({ placeList }) {
  const navigator = useNavigation();
  const onPlaceClick = (item) => {
    navigator.navigate("place-detail", { place: item });
  };

  return (
    <View>
      <Text style={styles.textStyle}>Found {placeList.length} places</Text>
      <FlatList
        data={placeList}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onPlaceClick(item)}>
            <PlaceItem place={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    fontFamily: "Raleway-SemiBold",
    marginTop: 10,
  },
});
