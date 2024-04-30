import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import MovieItem from "./MovieItem";
import { useNavigation } from "@react-navigation/native";

function ListMovie({ title, data, isSeeAll = true }) {
  const navigation = useNavigation();

  const handleMovieDetails = (item) => {
    navigation.navigate("Movie", item);
  };

  return (
    <View className="pb-6">
      <View className="pb-4 flex flex-row items-center justify-between">
        <Text className="text-white text-base">{title}</Text>
        {isSeeAll && (
          <TouchableOpacity>
            <Text className="text-base text-yellow-500">See all</Text>
          </TouchableOpacity>
        )}
      </View>
      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View className="flex flex-row -ml-5">
          {data?.map((item, index) => (
            <MovieItem
              key={index}
              data={item}
              onPress={() => handleMovieDetails(item)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

export default ListMovie;
