import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TextField from '../components/TextField'; // Import your custom TextField component
import Dropdown from '../components/Dropdown'; // Import the Dropdown component

// Country codes array
const countryCodes = [
  { code: 'US', dialCode: '+1' },
  { code: 'UK', dialCode: '+44' },
  { code: 'IN', dialCode: '+91' },
  // Add more country codes as needed
];

type PhoneNumberInputProps = {
  onChangeText: (text: string) => void; // Prop to handle text change
};

export default function PhoneNumberInput({ onChangeText }: PhoneNumberInputProps) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedCode, setSelectedCode] = useState(countryCodes[0]);

  // Effect to call onChangeText when phoneNumber changes
  useEffect(() => {
    onChangeText(`${selectedCode.dialCode} ${phoneNumber}`);
  }, [phoneNumber, selectedCode, onChangeText]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputRow}>
        {/* Dropdown to select country code */}
        <Dropdown data={countryCodes} selectedCode={selectedCode} onSelect={setSelectedCode} />
        {/* TextField to input phone number */}
        <TextField
          placeholder="Phone number"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)} // Update local state
          inputType="phone-pad" // Set the input type to phone-pad
        />
      </View>
      <View style={styles.infoContainer}>
        {/* <Image source={require('../assets/icons/LockIcon.svg')} style={styles.lockIcon} /> */}
        <Text style={styles.infoText}>This information is private and will not be on your profile.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  lockIcon: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
  infoText: {
    color: '#888',
    fontSize: 14,
  },
});
