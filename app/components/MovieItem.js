import { Image, Text, TouchableWithoutFeedback } from "react-native";
import { View } from "react-native";
import { HEIGH, URL_IMAGE, WIDTH } from "../constants";

function MovieItem({ data, onPress }) {
  return (
    <View
      style={{ width: WIDTH * 0.35 }}
      className="flex flex-col items-center ml-5"
    >
      <TouchableWithoutFeedback onPress={onPress}>
        <View>
          <Image
            className="rounded-3xl"
            src={`${URL_IMAGE + data?.poster_path}`}
            style={[
              { width: WIDTH * 0.35, height: HEIGH * 0.25, objectFit: "cover" },
            ]}
          />
        </View>
      </TouchableWithoutFeedback>
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        className="text-white pt-2 truncate"
      >
        {data?.title}
      </Text>
    </View>
  );
}

export default MovieItem;
