import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import PlaceDetailtem from "./PlaceDetailtem";
import Colors from "../../Shared/Colors";
import GoogleMapView from "../Home/GoogleMapView";

export default function PlaceDetail() {
  const param = useRoute().params;
  const [place, setPlace] = useState([]);

  useEffect(() => {
    setPlace(param.place);
  }, []);

  return (
    <ScrollView style={styles.parentView}>
      <PlaceDetailtem place={place} />
      <GoogleMapView placeList={[place]} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  parentView: {
    padding: 20,
    backgroundColor: Colors.WHITE,
    flex: 1,
  },
});
