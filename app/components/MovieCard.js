import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { HEIGH, ITEM_WIDTH, URL_IMAGE } from "../constants";

function MovieCard({ data, onPress }) {
  return (
    <TouchableWithoutFeedback className="" onPress={onPress}>
      <Image
        className="rounded-3xl"
        src={`${URL_IMAGE + data?.poster_path}`}
        style={[{ width: ITEM_WIDTH, height: HEIGH * 0.4, objectFit: "cover" }]}
      />
    </TouchableWithoutFeedback>
  );
}

export default MovieCard;
