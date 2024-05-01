import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { XMarkIcon } from "react-native-heroicons/outline";
import { HEIGH, WIDTH } from "../constants";
import { useEffect, useState } from "react";
import { fetchUpcomingMovie } from "../api";
import MovieItem from "../components/MovieItem";
import { useNavigation } from "@react-navigation/native";
function SearchScreen() {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState();

  const getUpcomingMovie = async () => {
    const data = await fetchUpcomingMovie();
    setResults(data.results);
  };

  useEffect(() => {
    getUpcomingMovie();
  }, [searchText]);

  return (
    <View className="pt-12 flex-1 bg-neutral-900">
      <SafeAreaView className="pr-3 pl-3">
        <View className="border-2 border-neutral-500 rounded-full w-full flex flex-row justify-between p-1">
          <TextInput
            className="text-white pl-4 text-base caret-white"
            placeholder="Search movie"
            placeholderTextColor="#CCC"
            selectionColor={"white"}
            value={searchText}
            onChange={(text) => setSearchText(text)}
          />
          <TouchableOpacity className="flex items-center justify-center right-0 w-10 h-10 rounded-full bg-neutral-400">
            <XMarkIcon size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View className="mt-4">
          {results && searchText !== "" ? (
            <ScrollView>
              <View className="flex-row flex-wrap justify-evenly items-center -ml-5 pb-36">
                {results?.map((result, index) => (
                  <View key={index} className="mb-4">
                    <MovieItem
                      data={result}
                      percentWidth={0.43}
                      onPress={() => navigation.navigate("Movie", result)}
                    />
                  </View>
                ))}
              </View>
            </ScrollView>
          ) : (
            <View className="mt-24">
              <Image
                source={require("../assets/images/waitting.png")}
                style={{ width: WIDTH, height: HEIGH * 0.3 }}
              />
            </View>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
}

export default SearchScreen;
