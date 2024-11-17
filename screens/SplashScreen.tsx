import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Start'); // Automatically navigate to Start after 2 seconds
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>nawble</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00A2FF',
  },
  logo: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: "Quicksand-Bold",
  },
});
