import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const tasks = [
  { id: '1', title: 'Buy groceries' },
  { id: '2', title: 'Finish project' },
  { id: '3', title: 'Read a book' },
];

export default function HomeScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.taskItem}
            onPress={() => navigation.navigate('TaskDetail', { taskId: item.id, taskTitle: item.title })}
          >
            <Text style={styles.taskTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  taskItem: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  taskTitle: {
    fontSize: 16,
  },
});
