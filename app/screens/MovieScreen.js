import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import {
  CalendarIcon,
  ChevronLeftIcon,
  ClockIcon,
  HeartIcon,
} from "react-native-heroicons/outline";
import {
  HeartIcon as HeartIconSolid,
  StarIcon,
} from "react-native-heroicons/solid";
import { HEIGH, URL_IMAGE, WIDTH } from "../constants";
import { LinearGradient } from "expo-linear-gradient";
import Cast from "../components/Cast";
import { fetchCast, fetchMovie, fetchSimilarMovie } from "../api";
import ListMovie from "../components/ListMovie";

function MovieScreen() {
  const navigation = useNavigation();
  const [liked, setLiked] = useState(false);
  const [data, setData] = useState();
  const [casts, setCasts] = useState([]);
  const [similar, setSimilar] = useState([]);
  const { params: item } = useRoute();

  const handleOnPress = (item) => {
    navigation.navigate("Person", item);
  };

  const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    const monthIndex = date.getMonth();
    const monthName = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ][monthIndex];
    const day = date.getDate();
    const year = date.getFullYear();
    const formattedDate = `${monthName} ${day}, ${year}`;
    return formattedDate;
  };

  const getCast = async (item) => {
    const data = await fetchCast(item?.id);
    setCasts(data.cast);
  };

  const getMovie = async (item) => {
    const data = await fetchMovie(item?.id);
    setData(data);
  };

  const getSimilarMovie = async (item) => {
    const data = await fetchSimilarMovie(item?.id);
    setSimilar(data.results);
  };

  useEffect(() => {
    getCast(item);
    getMovie(item);
    getSimilarMovie(item);
  }, [item]);

  return (
    <>
      {data && (
        <View className="flex-1 bg-neutral-900">
          <SafeAreaView className="h-full">
            <ScrollView
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
            >
              <View className="flex items-center justify-between absolute w-full top-10 flex-row pr-3 pl-3 z-10 ">
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <ChevronLeftIcon size={32} color="white" />
                </TouchableOpacity>
                <TouchableWithoutFeedback onPress={() => setLiked(!liked)}>
                  {!liked ? (
                    <HeartIcon size={32} color="white" />
                  ) : (
                    <HeartIconSolid size={32} color="red" />
                  )}
                </TouchableWithoutFeedback>
              </View>
              <View>
                <Image
                  className="z-0"
                  src={`${URL_IMAGE + item?.poster_path}`}
                  style={[
                    { width: "100%", height: HEIGH * 0.66, objectFit: "cover" },
                  ]}
                />
                <LinearGradient
                  colors={[
                    "transparent",
                    "rgba(20,20,20,0.8)",
                    "rgba(20,20,20,1)",
                  ]}
                  style={{ width: WIDTH, height: HEIGH * 0.5 }}
                  start={{ x: 0.5, y: 0 }}
                  end={{ x: 0.5, y: 1 }}
                  className="absolute bottom-0"
                />
                <View className="absolute left-3 bottom-10">
                  <Text className="text-white text-3xl">{item.title}</Text>
                  <View className="flex flex-row items-center mt-3 flex-wrap">
                    {data &&
                      data.genres.map((gen) => (
                        <TouchableOpacity
                          key={gen.id}
                          className="rounded-full bg-neutral-700 pl-3 pr-3 pb-1 mr-2 mb-2"
                        >
                          <Text className="text-white">{gen.name}</Text>
                        </TouchableOpacity>
                      ))}
                  </View>
                  <View className="flex flex-row items-center mt-4">
                    <View className="flex flex-row items-center">
                      <ClockIcon size={20} color="white" />
                      <Text className="text-white ml-1">
                        {data?.runtime} minutes
                      </Text>
                    </View>
                    <View className="flex flex-row items-center ml-4">
                      <StarIcon size={20} color="white" />
                      <Text className="text-white ml-1">
                        {data?.vote_average?.toFixed(1)} (IMDb)
                      </Text>
                    </View>
                    <View className="flex flex-row items-center ml-4">
                      <CalendarIcon size={20} color="white" />
                      <Text className="text-white ml-1">
                        {formatDate(data?.release_date)}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View
                style={{ marginTop: -(HEIGH * 0.035) }}
                className="space-y-3 pl-3 pr-3"
              >
                <Text className="text-justify text-white leading-5 mb-2">
                  {data?.overview}
                </Text>
                <View className="mb-5">
                  <Text className="text-white text-base font-medium mb-3">
                    Top Cast
                  </Text>
                  <ScrollView
                    horizontal
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                  >
                    <View className="flex flex-row">
                      {casts?.map((cast, index) => (
                        <Cast
                          key={index}
                          data={cast}
                          onPress={() => handleOnPress(cast)}
                        />
                      ))}
                    </View>
                  </ScrollView>
                </View>
                <ListMovie title="Similar Movies" data={similar} />
              </View>
            </ScrollView>
          </SafeAreaView>
        </View>
      )}
    </>
  );
}

export default MovieScreen;
