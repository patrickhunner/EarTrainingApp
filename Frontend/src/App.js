import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Search from './Search';
import Player from './Player';
import YouTubeSearch from './YouTubeSearch';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Player" component={Player} />
        <Stack.Screen name="YouTubeSearch" component={YouTubeSearch} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
