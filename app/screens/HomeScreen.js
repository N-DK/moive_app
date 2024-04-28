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
import UpcomingMovie from "../components/UpcomingMovie";
import TopRatedMovie from "../components/TopRatedMovie";
import PopularMovie from "../components/PopularMovie";

function HomeScreen() {
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
          <UpcomingMovie />
          {/* Top rated */}
          <TopRatedMovie />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

export default HomeScreen;
``;
