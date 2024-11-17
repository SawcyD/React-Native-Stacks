import React, { useRef } from "react";
import { TouchableWithoutFeedback, Text, StyleSheet, Animated, View, ViewStyle, TextStyle } from "react-native";
import { Ionicons } from '@expo/vector-icons'; // Import icon from expo vector icons

type ButtonProps = {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  textColor?: string;
  icon?: React.ReactNode; // Accepts an icon as a prop
};

export default function Button({ title, onPress, backgroundColor = "black", textColor = "white", icon }: ButtonProps) {
  const scaleValue = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableWithoutFeedback
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
    >
      <Animated.View style={[styles.button, { backgroundColor, transform: [{ scale: scaleValue }] }]}>
        <View style={styles.content}>
          {icon && <View style={styles.iconContainer}>{icon}</View>}
          <Text style={[styles.title, { color: textColor }]}>{title}</Text>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 347,
    height: 54,
    padding: 10,
    margin: 10,
    borderRadius: 19,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'row',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Quicksand-Bold",
  },
});
