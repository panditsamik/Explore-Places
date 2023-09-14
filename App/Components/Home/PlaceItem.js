import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../Shared/Colors";

export default function PlaceItem({ place }) {
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
              "&key=AIzaSyDpG0MbEAjIue5TzdoxwBcnYv7cABNYXJU",
          }}
          style={styles.imageShown}
        />
      ) : (
        <Image
          source={require("./../../../assets/placeholder.jpg")}
          style={styles.imageShown}
        />
      )}
      <View style={{ flex: 1 }}>
        <Text style={styles.placeName} numberOfLines={2}>
          {place.name}
        </Text>
        <Text style={styles.placeVicinity} numberOfLines={2}>
          {place.vicinity}
        </Text>
        <View style={styles.ratingDisplay}>
          <AntDesign name="star" size={20} color={Colors.YELLOW} />
          <Text>{place.rating}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageShown: {
    width: 105,
    height: 105,
    borderRadius: 15,
  },
  placeName: {
    fontSize: 18,
    fontFamily: "Raleway-SemiBold",
    marginBottom: 5,
  },
  placeVicinity: {
    fontSize: 18,
    marginBottom: 5,
  },
  parentView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    marginTop: 20,
  },
  ratingDisplay: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});
