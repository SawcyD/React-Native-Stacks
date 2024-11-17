import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  // Load the Quicksand font
  const [fontsLoaded] = useFonts({
    'Quicksand-Regular': require('./assets/fonts/Quicksand-Regular.ttf'),
    'Quicksand-Bold': require('./assets/fonts/Quicksand-Bold.ttf'),
  });

  if (!fontsLoaded) {
    // Show a loading indicator while the font is loading
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return <AppNavigator />;
}
