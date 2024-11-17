import React from 'react';
import { View, TextInput, StyleSheet, Text, KeyboardTypeOptions } from 'react-native';

type TextFieldProps = {
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  inputType?: KeyboardTypeOptions; // New prop for input type
  inputTextColor?: string; // New prop for input text color
    underlineColor?: string; // New prop for underline color
};

const TextField: React.FC<TextFieldProps> = ({ placeholder, value, onChangeText, inputType }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#B3B3B3" // Light gray color for the placeholder
        value={value}
        onChangeText={onChangeText}
        keyboardType={inputType} // Apply the input type
      />
      <View style={styles.underline} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  input: {
    fontSize: 28,
    color: '#B3B3B3', // Darker text color
    paddingVertical: 5,
    fontFamily: 'QuicksandBold',
  },
  underline: {
    height: 6,
    backgroundColor: '#B3B3B3', // Light gray color
    borderRadius: 5,
    marginTop: 5,
  },
});

export default TextField;
