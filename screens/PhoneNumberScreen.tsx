import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Button from "../components/Button";


export default function PhoneNumberScreen({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState("");

  const formatPhoneNumber = (input) => {
    const cleaned = input.replace(/\D/g, "");
    if (cleaned.length < 4) return cleaned;
    if (cleaned.length < 7) return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
  };

  const handlePhoneInputChange = (text) => {
    const formatted = formatPhoneNumber(text);
    setPhoneNumber(formatted);
  };

  const handleExtraDigitsClick = () => {
    Alert.alert("Phone number too long", "Please enter a valid 10-digit phone number.");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Custom Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="black" onPress={() => navigation.goBack()} />
        <Text style={styles.logo}>nawble</Text>
      </View>

      {/* Main Content */}
      <Text style={styles.title}>Let me get your digits..</Text>

      {/* Phone Number Input */}
      <View style={styles.phoneInputContainer}>
        <View style={styles.countryCodeContainer}>
          <Text style={styles.countryCodeText}>US +1</Text>
        </View>
        <TextInput
          style={styles.phoneInput}
          placeholder="Phone number"
          placeholderTextColor="#B3B3B3"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={handlePhoneInputChange}
          maxLength={16} // Limit to US phone number format length
        />
      </View>


      {/* Subtext */}
      <View style={styles.subtextContainer}>
        <Ionicons name="lock-closed-outline" size={14} color="#B3B3B3" />
        <Text style={styles.subtext}> This information is private and will not be on your profile.</Text>
      </View>

      {/* Underlined clickable text if phone number exceeds 10 digits */}
      {phoneNumber.replace(/\D/g, "").length > 10 && (
        <Text style={styles.extraDigitsText} onPress={handleExtraDigitsClick}>
          Phone number seems too long? Tap here.
        </Text>
      )}

      {/* Continue Button */}
      <Button title="Continue" onPress={() => navigation.navigate('CodeVerification')} backgroundColor="black" textColor="white" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#F5F5F5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  logo: {
    fontSize: 24,
    fontFamily: "Quicksand-Bold",
    marginLeft: 10,
  },
  title: {
    fontSize: 24,
    fontFamily: "Quicksand-Bold",
    color: "black",
    marginTop: 20,
  },
  phoneInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#B3B3B3",
    borderRadius: 10,
    marginTop: 20,
    paddingHorizontal: 10,
    height: 50,
  },
  countryCodeContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRightWidth: 1,
    borderRightColor: "#B3B3B3",
  },
  countryCodeText: {
    fontSize: 18,
    color: "#B3B3B3",
    fontFamily: "Quicksand-Bold",
  },
  phoneInput: {
    flex: 1,
    fontSize: 18,
    color: "#B3B3B3",
    paddingLeft: 10,
    fontFamily: "Quicksand-Bold",
  },
  extraDigitsText: {
    fontSize: 14,
    color: "#007AFF", // Blue color for clickable text
    textDecorationLine: "underline",
    fontFamily: "Quicksand-Regular",
    marginTop: 10,
  },
  subtextContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  subtext: {
    fontSize: 14,
    color: "#B3B3B3",
    fontFamily: "Quicksand-Regular",
    marginLeft: 5,
  },
});
