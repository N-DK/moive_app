import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens";

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
      </stack.Navigator>
    </NavigationContainer>
  );
}
