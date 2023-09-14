import { View, Text, StyleSheet } from "react-native";
import React, { useState, useContext, useEffect } from "react";
import GoogleMapViewFull from "../Components/Search/GoogleMapViewFull";
import SearchBar from "../Components/Search/SearchBar";
import { UserLocationContext } from "../Context/UserLocationContext";
import GlobalApi from "../Services/GlobalApi";
import BusinessList from "../Components/Search/BusinessList";

export default function Search() {
  const [placeList, setPlaceList] = useState([]);
  const { location, setLocation } = useContext(UserLocationContext);

  useEffect(() => {
    if (location && location.coords) {
      GetNearBySearchPlace("restaurant");
    }
  }, [location]);

  const GetNearBySearchPlace = (value) => {
    GlobalApi.searchByText(value).then((resp) => {
      setPlaceList(resp.data.results);
    });
  };

  return (
    <View>
      <View style={styles.childView}>
        <SearchBar setSearchText={(value) => GetNearBySearchPlace(value)} />
      </View>
      <GoogleMapViewFull placeList={placeList} />
      <View style={styles.businessList}>
        <BusinessList placeList={placeList} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  childView: {
    position: "absolute",
    zIndex: 20,
  },
  businessList: {
    position: "absolute",
    zindex: 20,
    bottom: 0,
  },
});
