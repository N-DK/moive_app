import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  HomeScreen,
  MovieScreen,
  PersonScreen,
  SearchScreen,
} from "../screens";

const stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeScreen}
        />
        <stack.Screen
          name="Movie"
          options={{ headerShown: false }}
          component={MovieScreen}
        />
        <stack.Screen
          name="Person"
          options={{ headerShown: false }}
          component={PersonScreen}
        />
        <stack.Screen
          name="Search"
          options={{ headerShown: false }}
          component={SearchScreen}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}
