import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function NameScreen({ navigation }) {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>What's your first name?</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={name}
        onChangeText={setName}
      />
      <Button title="Finish" onPress={() => alert('Welcome to Nawble!')} />
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
  },
  input: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 20,
  },
});
