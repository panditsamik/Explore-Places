import { ScrollView, StyleSheet } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import Header from "../Components/Home/Header";
import GoogleMapView from "../Components/Home/GoogleMapView";
import CategoryList from "../Components/Home/CategoryList";
import GlobalApi from "../Services/GlobalApi";
import PlaceList from "../Components/Home/PlaceList";
import { UserLocationContext } from "../Context/UserLocationContext";

export default function Home() {
  const [placeList, setPlaceList] = useState(null);
  const { location, setLocation } = useContext(UserLocationContext);

  useEffect(() => {
    GetNearBySearchPlace("restaurant");
  }, [location]);

  const GetNearBySearchPlace = (value) => {
    if (location && location.coords) {
      const latitude = location.coords.latitude;
      const longitude = location.coords.longitude;

      GlobalApi.nearByPlace(latitude, longitude, value)
        .then((resp) => {
          setPlaceList(resp.data.results);
        })
        .catch((error) => {
          console.error("Error fetching nearby places:", error);
        });
    } else {
      console.log("No data found for particular coordinate.");
    }
  };

  return (
    <ScrollView style={{ padding: 15 }}>
      <Header />
      <GoogleMapView placeList={placeList} />
      <CategoryList
        setSelectedCategory={(value) => GetNearBySearchPlace(value)}
      />
      {placeList ? <PlaceList placeList={placeList} /> : null}
    </ScrollView>
  );
}
