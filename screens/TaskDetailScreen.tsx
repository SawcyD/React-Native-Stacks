import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';

type TaskDetailScreenRouteProp = RouteProp<RootStackParamList, 'TaskDetail'>;

type Props = {
  route: TaskDetailScreenRouteProp;
};

export default function TaskDetailScreen({ route }: Props) {
  const { taskId, taskTitle } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Task ID: {taskId}</Text>
      <Text style={styles.detailText}>Task: {taskTitle}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  detailText: {
    fontSize: 16,
    marginTop: 8,
  },
});
