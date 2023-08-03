// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//screen
import HomeScreen from "./src/Screen/HomeScreen";
import Haftasonu from "./src/Screen/Haftasonu";

const Stack = createNativeStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'Home'} screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Haftasonu" component={Haftasonu}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
