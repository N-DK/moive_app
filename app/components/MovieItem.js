import { Image, Text, TouchableWithoutFeedback } from "react-native";
import { View } from "react-native";
import { HEIGH, URL_IMAGE, WIDTH } from "../constants";

function MovieItem({ data, onPress, percentWidth = 0.35 }) {
  return (
    <View
      style={{ width: WIDTH * 0.35 }}
      className="flex flex-col items-center ml-5"
    >
      <TouchableWithoutFeedback onPress={onPress}>
        <View className="rounded-3xl overflow-hidden">
          <Image
            src={`${URL_IMAGE + data?.poster_path}`}
            style={[
              {
                width: WIDTH * percentWidth,
                height: HEIGH * 0.25,
                objectFit: "cover",
              },
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
