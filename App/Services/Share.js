import { Share } from "react-native";

const SharePlace = (place) => {
  Share.share({
    title: "Share",
    message: place.name + "\n" + "Address: " + place.formatted_address,
  });
};

export default { SharePlace };
