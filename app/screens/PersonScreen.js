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
import { ChevronLeftIcon, HeartIcon } from "react-native-heroicons/outline";
import { fetchPerson } from "../api";
import { URL_IMAGE } from "../constants";
import ListMovie from "../components/ListMovie";

function PersonScreen() {
  const navigation = useNavigation();
  const [data, setData] = useState();
  const { params: item } = useRoute();

  const getPerson = async (item) => {
    const data = await fetchPerson(item?.id);
    setData(data);
  };
  useEffect(() => {
    getPerson(item);
  }, [item]);

  return (
    <View className="pt-12 flex-1 bg-neutral-900">
      <SafeAreaView className="pr-3 pl-3">
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="flex items-center justify-between flex-row">
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ChevronLeftIcon size={32} color="white" />
            </TouchableOpacity>
            <TouchableWithoutFeedback>
              <HeartIcon size={32} color="white" />
            </TouchableWithoutFeedback>
          </View>
          <View className="flex items-center justify-center mt-5">
            <View
              style={{ width: 250, height: 250 }}
              className="shadow-lg shadow-cyan-500/50"
            >
              <Image
                className="rounded-full"
                src={`${URL_IMAGE + data?.profile_path}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </View>
            <Text className="text-2xl text-white font-semibold mt-3">
              {item?.name}
            </Text>
            <Text className=" text-xs text-neutral-400 mt-1">
              {data?.place_of_birth}
            </Text>
          </View>
          <View className="bg-neutral-600 rounded-full p-4 flex flex-row justify-around mt-6">
            <View className="">
              <Text className="text-white text-center font-medium">Gender</Text>
              <Text className="text-center text-neutral-400">
                {data?.gender == 1 ? "Female" : "Male"}
              </Text>
            </View>
            <View className="">
              <Text className="text-white text-center font-medium">
                Birthday
              </Text>
              <Text className="text-center text-neutral-400">
                {data?.birthday}
              </Text>
            </View>
            <View className="">
              <Text className="text-white text-center font-medium">
                Known for
              </Text>
              <Text className="text-center text-neutral-400">
                {data?.known_for_department}
              </Text>
            </View>
            <View className="">
              <Text className="text-white text-center font-medium">
                Popularity
              </Text>
              <Text className="text-center text-neutral-400">{`${data?.popularity.toFixed(
                2
              )}%`}</Text>
            </View>
          </View>
          <View className="mt-4 mb-2">
            <Text className="text-white text-lg mb-2">Biography</Text>
            <Text className="text-neutral-400 text-justify">
              {data?.biography}
            </Text>
          </View>
          <View>
            <ListMovie
              title="Movies"
              data={data?.combined_credits?.cast}
              isSeeAll={false}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

export default PersonScreen;
