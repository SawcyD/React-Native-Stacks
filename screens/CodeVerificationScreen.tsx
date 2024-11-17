import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function CodeVerificationScreen({ navigation }) {
  const [code, setCode] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>Sent you a secret code!</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter code"
        keyboardType="numeric"
        value={code}
        onChangeText={setCode}
      />
      <Button title="Continue" onPress={() => navigation.navigate('Email')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  prompt: {
    fontSize: 20,
    marginBottom: 20,
    fontFamily: "Quicksand-Bold",
  },
  input: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 20,
    fontFamily: "Quicksand-Bold",
  },
});
