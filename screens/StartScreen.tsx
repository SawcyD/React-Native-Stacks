import React from "react";
import { View, StyleSheet, Text, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Button from "../components/Button";
import * as AppleAuthentication from "expo-apple-authentication";

export default function StartScreen({ navigation }) {
    const handleAppleSignIn = async () => {
        try {
          const credential = await AppleAuthentication.signInAsync({
            requestedScopes: [
              AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
              AppleAuthentication.AppleAuthenticationScope.EMAIL,
            ],
          });
    
          // Use credential to authenticate the user with your backend
          Alert.alert("Signed in!", `Welcome, ${credential.fullName?.givenName || "User"}!`);
          
          // Navigate to the next screen or handle user authentication here
          // navigation.navigate('NextScreen'); // For example
        } catch (error) {
          if (error.code === "ERR_CANCELED") {
            // Handle cancellation of sign-in by the user
            Alert.alert("Sign-in canceled");
          } else {
            // Handle other errors
            Alert.alert("Error", "An error occurred during sign-in.");
          }
        }
      };


  return (
    <LinearGradient colors={["#00C6FF", "#00A2FF"]} style={styles.gradient}>
      <SafeAreaView style={styles.container}>
        <View style={styles.logoContainer}>
          <Ionicons name="cloud-outline" size={60} color="white" />
          <Text style={styles.title}>nawble</Text>
          <Text style={styles.subtitle}>Find The One.. One Nawble at a Time!</Text>
        </View>

        <View style={styles.buttonView}>
          <Button
            title="Connect with Apple"
            onPress={() => handleAppleSignIn()}
            backgroundColor="white"
            textColor="black"
            icon={<Ionicons name="logo-apple" size={24} color="black" />}
          />
          <Button
            title="Connect with Google"
            onPress={() => {}}
            backgroundColor="white"
            textColor="black"
            icon={<Ionicons name="logo-google" size={24} color="black" />}
          />
          <Button
            title="Connect with Phone Number"
            onPress={() => navigation.navigate("PhoneNumber")}
            backgroundColor="white"
            textColor="black"
            icon={<Ionicons name="phone-portrait-outline" size={24} color="black" />}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 100, // Space it down from the top
  },
  title: {
    fontSize: 40,
    color: "white",
    fontWeight: "bold",
    fontFamily: "Quicksand-Bold",
    marginTop: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    marginTop: 10,
    fontFamily: "Quicksand-Bold",
  },
  buttonView: {
    width: "100%",
    alignItems: "center",
    paddingBottom: 30, // Space it up from the bottom
  },
});
