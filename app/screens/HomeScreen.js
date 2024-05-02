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
import { useNavigation } from "@react-navigation/native";
import Loading from "../components/loading";

function HomeScreen() {
  const navigation = useNavigation();
  const [upcomingMovie, setUpcomingMovie] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUpcomingMovie();
    getTopRated();
  }, []);

  const getUpcomingMovie = async () => {
    setLoading(true);
    const data = await fetchUpcomingMovie();
    setUpcomingMovie(data.results);
    setLoading(false);
  };

  const getTopRated = async () => {
    setLoading(true);
    const data = await fetchTopRatedMovie();
    setTopRated(data.results);
    setLoading(false);
  };

  return (
    <View className="pt-12 flex-1 bg-neutral-800">
      {loading ? (
        <Loading />
      ) : (
        <SafeAreaView className="pr-3 pl-3">
          <View className="flex flex-row items-center justify-between pb-5 position-fixed top-0">
            <Bars3CenterLeftIcon size={32} color="white" />
            <Text className="text-center text-white text-2xl font-bold">
              <Text className="text-yellow-400">M</Text>ovies
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Search")}>
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
      )}
    </View>
  );
}

export default HomeScreen;
``;
