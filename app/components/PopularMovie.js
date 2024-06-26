import { Text, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import MovieCard from "./MovieCard";
import { ITEM_WIDTH, WIDTH } from "../constants";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { fetchTrendingMovie } from "../api/moviedb";

function PopularMovie() {
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const handleMovieDetails = (item) => {
    navigation.navigate("Movie", item);
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = async () => {
    const data = await fetchTrendingMovie();
    setData(data.results);
  };

  return (
    <View className="pb-6">
      <Text className="text-white text-base pb-4">Trending</Text>
      <View className="-ml-4">
        <Carousel
          data={data}
          firstItem={1}
          renderItem={({ item }) => (
            <MovieCard data={item} onPress={() => handleMovieDetails(item)} />
          )}
          inactiveSlideOpacity={0.6}
          sliderWidth={WIDTH}
          itemWidth={ITEM_WIDTH}
          slideStyle={{
            display: "flex",
            alignItems: "center",
          }}
        />
      </View>
    </View>
  );
}

export default PopularMovie;
