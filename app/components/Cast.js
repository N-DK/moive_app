import {
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Text } from "react-native";
import { URL_IMAGE, URL_USER_NONE } from "../constants";

function Cast({ data, onPress }) {
  return (
    <View
      style={{ width: 100 }}
      className="flex flex-col items-center justify-center"
    >
      <TouchableOpacity onPress={onPress}>
        <View>
          <Image
            className="rounded-full"
            src={`${
              data?.profile_path
                ? URL_IMAGE + data?.profile_path
                : URL_USER_NONE
            }`}
            style={{ width: 80, height: 80, objectFit: "cover" }}
          />
        </View>
      </TouchableOpacity>
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        className="text-white truncate"
      >
        {data?.name}
      </Text>
      <Text numberOfLines={1} ellipsizeMode="tail" className="text-gray-400">
        {data?.character}
      </Text>
    </View>
  );
}

export default Cast;
