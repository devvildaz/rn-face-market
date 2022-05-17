import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

import AppStyle from "./App.scss";

import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BoostrapScreen from './screen/AuthScreens/BoostrapScreen';
import LoginScreen from './screen/AuthScreens/LoginScreen';
import { useFonts } from '@expo-google-fonts/inter';
import PrincipalScreen from './screen/FaceScreens/PrincipalScreen';

const Stack =  createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="BoostrapScreen" 
          component={BoostrapScreen} 
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PrincipalScreen"
          component={PrincipalScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;