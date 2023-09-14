import { View, Text, StyleSheet, Dimensions } from "react-native";
import { UserLocationContext } from "../../Context/UserLocationContext";
import React, { useContext, useState, useEffect } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import PlaceMarker from "../Home/PlaceMarker";

export default function GoogleMapViewFull({ placeList }) {
  const [mapRegion, setMapRegion] = useState([]);

  const { location, setLocation } = useContext(UserLocationContext);
  useEffect(() => {
    if (location) {
      setMapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0422,
        longitudeDelta: 0.0421,
      });
    }
  }, [location]);
  return (
    <View>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        region={mapRegion}
      >
        <Marker
          title="You"
          coordinate={{
            longitude: mapRegion.longitude ? mapRegion.longitude : 0,
            latitude: mapRegion.latitude ? mapRegion.latitude : 0,
          }}
        />
        {placeList &&
          placeList.map(
            (item, index) => index <= 5 && <PlaceMarker item={item} />
          )}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  topPlaceText: {
    fontSize: 20,
    marginBottom: 8,
    fontWeight: "600",
    fontFamily: "Raleway-SemiBold",
  },
  originalView: {
    borderRadius: 14,
    overflow: "hidden",
  },
  map: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height * 0.84,
  },
});
