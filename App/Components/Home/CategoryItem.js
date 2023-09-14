import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../Shared/Colors";

export default function CategoryItem({ category }) {
  return (
    <View style={styles.viewStyle}>
      <Image source={category.icon} style={styles.categoryImage} />
      <Text style={{ fontSize: 14, fontFamily: "Raleway-Regular" }}>
        {category.name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryImage: {
    width: 50,
    height: 50,
  },
  viewStyle: {
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    width: 96,
    height: 100,
    backgroundColor: Colors.WHITE,
    borderRadius: 15,
    elevation: 4,
  },
});
