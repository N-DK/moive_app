import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import MovieItem from "./MovieItem";
import { useEffect, useState } from "react";
import axios from "axios";

function UpcomingMovie() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=1"
      )
      .then((res) => {
        setData(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <View className="pb-6">
      <View className="pb-4 flex flex-row items-center justify-between">
        <Text className="text-white text-base">Upcoming</Text>
        <TouchableOpacity>
          <Text className="text-base text-yellow-500">See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View className="flex flex-row -ml-5">
          {data.map((item) => <MovieItem key={item.id} data={item} />)}
        </View>
      </ScrollView>
    </View>
  );
}

export default UpcomingMovie;
