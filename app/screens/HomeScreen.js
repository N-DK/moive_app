import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import PopularMovie from "../components/PopularMovie";
import { useEffect, useState } from "react";
import { fetchTopRatedMovie, fetchUpcomingMovie } from "../api";
import ListMovie from "../components/ListMovie";

function HomeScreen() {
  const [upcomingMovie, setUpcomingMovie] = useState([]);
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    getUpcomingMovie();
    getTopRated();
  }, []);

  const getUpcomingMovie = async () => {
    const data = await fetchUpcomingMovie();
    setUpcomingMovie(data.results);
  };

  const getTopRated = async () => {
    const data = await fetchTopRatedMovie();
    setTopRated(data.results);
  };

  return (
    <View className="pt-12 flex-1 bg-neutral-800">
      <SafeAreaView className="pr-3 pl-3">
        <View className="flex flex-row items-center justify-between pb-5 position-fixed top-0">
          <Bars3CenterLeftIcon size={32} color="white" />
          <Text className="text-center text-white text-2xl font-bold">
            <Text className="text-yellow-400">M</Text>ovies
          </Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon color="white" size={32} />
          </TouchableOpacity>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          {/* Trending */}
          <PopularMovie />
          {/* Upcoming */}
          <ListMovie title="Upcoming" data={upcomingMovie} />
          {/* Top rated */}
          <View className="pb-16">
            <ListMovie title="Top Rated" data={topRated} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

export default HomeScreen;
``;
