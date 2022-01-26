import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DetailsScreen from "./src/screens/DetailsScreen";
import Flatlist from "./src/screens/Flatlist";
import { NavigationContainer } from "@react-navigation/native";

import { LogBox } from "react-native";

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Flatlist" component={Flatlist} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
