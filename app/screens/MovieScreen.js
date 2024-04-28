import { useRoute } from "@react-navigation/native";
import { ScrollView, Text, View } from "react-native";


function MovieScreen() {
    const {params: data} = useRoute();
    

    return (
        <View className="pt-12">
            <Text>Movie details</Text>
        </View>
    )
}

export default MovieScreen;