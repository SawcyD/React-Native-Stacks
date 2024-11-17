import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import StartScreen from '../screens/StartScreen';
import PhoneNumberScreen from '../screens/PhoneNumberScreen';
import CodeVerificationScreen from '../screens/CodeVerificationScreen';
import EmailScreen from '../screens/EmailScreen';
import NameScreen from '../screens/NameScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Start" component={StartScreen} options={{ title: '', headerShown: false }} />
        <Stack.Screen name="PhoneNumber" component={PhoneNumberScreen} options={{ title: '', headerShown: false }} />
        <Stack.Screen name="CodeVerification" component={CodeVerificationScreen} options={{ title: '', headerShown: false }} />
        <Stack.Screen name="Email" component={EmailScreen} options={{ title: '', headerShown: false }} />
        <Stack.Screen name="Name" component={NameScreen} options={{ title: '', headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
