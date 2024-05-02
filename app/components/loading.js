import { View } from "react-native";
import * as Progress from "react-native-progress";
import { HEIGH, WIDTH } from "../constants";

function Loading() {
  return (
    <View className="absolute flex-row justify-center items-center" style={{width: WIDTH, height: HEIGH}}>
      <Progress.CircleSnail
        thickness={10}
        size={160}
        color={"rgb(250, 204, 21)"}
      />
    </View>
  );
}

export default Loading;
