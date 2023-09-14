import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../Shared/Colors";
import BusinessItem from "./BusinessItem";
import { useNavigation } from "@react-navigation/native";

export default function BusinessList({ placeList }) {
  const navigator = useNavigation();

  return (
    <View>
      <LinearGradient
        colors={["transparent", Colors.WHITE]}
        style={styles.lGrad}
      >
        <FlatList
          data={placeList}
          horizontal={true}
          renderItem={({ item, index }) =>
            index <= 5 && (
              <TouchableOpacity
                onPress={() =>
                  navigator.navigate("place-detail", {
                    place: item,
                  })
                }
              >
                <BusinessItem place={item} />
              </TouchableOpacity>
            )
          }
        />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  lGrad: {
    padding: 20,
    width: Dimensions.get("screen").width,
  },
});
