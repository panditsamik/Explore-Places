import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
  Linking,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../Shared/Colors";
import Share from "../../Services/Share";

export default function PlaceDetailtem({ place }) {
  const onDirectionClick = () => {
    const url = Platform.select({
      ios:
        "maps:" +
        +place.geometry.location.lat +
        "," +
        place.geometry.location.lng +
        "?q=" +
        place.vicinity,
      android:
        "geo:" +
        place.geometry.location.lat +
        "," +
        place.geometry.location.lng +
        "?q=" +
        place.vicinity,
    });
    Linking.openURL(url);
  };

  return (
    <View>
      <Text style={styles.placeName}>{place.name}</Text>
      <View style={styles.ratingDisplay}>
        <AntDesign name="star" size={20} color={Colors.YELLOW} />
        <Text>{place.rating}</Text>
      </View>
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
      <Text style={styles.placeAddress} noOfLines={2}>
        {place.vicinity ? place.vicinity : place.formatted_address}
      </Text>
      {place?.opening_hours ? (
        <Text style={styles.openStatus}>
          {place?.opening_hours?.open_now ? "OPEN" : "CLOSED"}
        </Text>
      ) : null}
      <View style={styles.buttonView}>
        <TouchableOpacity
          onPress={() => onDirectionClick()}
          style={styles.button1}
        >
          <Ionicons name="navigate-circle-outline" size={24} color="black" />
          <Text style={styles.buttonTextStyle}>Direction</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Share.SharePlace(place)}
          style={styles.button2}
        >
          <Ionicons name="md-share-outline" size={24} color="black" />
          <Text style={styles.buttonTextStyle}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  placeName: {
    fontSize: 26,
    fontFamily: "Raleway-SemiBold",
  },
  ratingDisplay: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 5,
  },
  imageShown: {
    width: "100%",
    height: 200,
    borderRadius: 15,
    marginTop: 10,
  },
  placeAddress: {
    fontSize: 16,
    marginTop: 10,
    color: Colors.DARK_GRAY,
  },
  openStatus: {
    fontSize: 18,
    color: Colors.black,
  },
  buttonView: {
    marginTop: 10,
    flexDirection: "row",
    display: "flex",
    gap: 10,
  },
  button1: {
    direction: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: Colors.GRAY,
    width: 130,
    padding: 5,
    borderRadius: 40,
    justifyContent: "center",
  },
  button2: {
    direction: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: Colors.GRAY,
    width: 100,
    padding: 5,
    borderRadius: 40,
    justifyContent: "center",
  },
  buttonTextStyle: {
    fontSize: 18,
  },
});
