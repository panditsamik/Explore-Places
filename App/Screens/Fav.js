import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Fav() {
  const [favorites, setFavorites] = useState([]);

  return (
    <View style={styles.container}>
      {favorites.length === 0 ? (
        <Text style={styles.noFavoritesText}>No favourites added till now</Text>
      ) : (
        <View>
          {/* Render your favorite items here */}
          <Text>Your favourite items:</Text>
          {favorites.map((item, index) => (
            <Text key={index}>{item}</Text>
          ))}
        </View>
      )}

      {/* Beautiful button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          // Logic to add a favorite item
          setFavorites([...favorites, "Favorite Item"]);
        }}
      >
        <Text style={styles.buttonText}>Add Favourite</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noFavoritesText: {
    fontSize: 18,
    color: "gray",
    textAlign: "center",
  },
  addButton: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
