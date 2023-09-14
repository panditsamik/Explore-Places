import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../Shared/Colors";

export default function BusinessItem({ place }) {
  return (
    <View style={styles.parentView}>
      {place?.photos ? (
        <Image
          source={{
            uri:
              "https://maps.googleapis.com/maps/api/place/photo" +
              "?maxwidth=400" +
              "&photo_reference=" +
              place?.photos[0]?.photo_reference +
              "&key=AIzaSyAlIDUiTW6M9p6qb7mHsMCvqk0_OMO3MV0",
          }}
          style={styles.imageShown}
        />
      ) : (
        <Image
          source={require("./../../../assets/placeholder.jpg")}
          style={styles.imageShown}
        />
      )}
      <Text numberOfLines={2} style={styles.placeName}>
        {place.name}
      </Text>
      <Text numberOfLines={2} style={styles.placeVicinity}>
        {place.vicinity ? place.vicinity : place.formatted_address}
      </Text>
      <View style={styles.ratingDisplay}>
        <AntDesign name="star" size={20} color={Colors.YELLOW} />
        <Text>{place.rating}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageShown: {
    width: 120,
    height: 80,
    borderRadius: 10,
  },
  placeName: {
    fontFamily: "Raleway-SemiBold",
    fontSize: 16,
    marginTop: 5,
  },
  placeVicinity: {
    fontFamily: "Raleway-Regular",
    fontSize: 13,
    marginTop: 5,
    color: Colors.DARK_GRAY,
  },
  parentView: {
    width: 140,
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    padding: 10,
    margin: 5,
    elevation: 20,
  },
  ratingDisplay: {
    display: "flex",
    alignItems: "center",
    gap: 5,
    marginTop: 5,
    flexDirection: "row",
    marginBottom: -5,
  },
});
