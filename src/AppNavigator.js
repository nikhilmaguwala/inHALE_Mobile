import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {LoginScreen} from './screens/LoginScreen';
import {GetStartedScreen} from './screens/GetStartedScreen';
import {HomeScreen} from './screens/HomeScreen';
import {DoctorProfilePage} from './screens/doctorProfilePage';
import {SplashScreen} from './screens/SplashScreen';
import {TestScreen} from './screens/TestScreen';
import { TestResultScreen } from "./screens/TestResultScreen";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="GetStarted"
          component={GetStartedScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={DoctorProfilePage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Test"
          component={TestScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TestResult"
          component={TestResultScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
