import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Button from '../components/Button';

export default function EmailScreen({ navigation }) {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>What's your preferred email?</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Continue" onPress={() => navigation.navigate('Name')} />
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
