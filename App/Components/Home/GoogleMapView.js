import { View, Text, Dimensions, StyleSheet } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import React, { useContext, useState, useEffect } from "react";
import { UserLocationContext } from "../../Context/UserLocationContext";
import PlaceMarker from "./PlaceMarker";
import Colors from "../../Shared/Colors";

export default function GoogleMapView({ placeList }) {
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
    <View style={{ marginTop: 5 }}>
      <Text style={styles.topPlaceText}>Top Near By Places</Text>
      <View style={styles.originalView}>
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
              (item, index) => index <= 8 && <PlaceMarker item={item} />
            )}
        </MapView>
      </View>
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
    width: Dimensions.get("screen").width * 0.92,
    height: Dimensions.get("screen").height * 0.25,
  },
});
