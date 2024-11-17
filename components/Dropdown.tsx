import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

type CountryCode = {
  code: string;
  dialCode: string;
};

type DropdownProps = {
  data: CountryCode[]; // Accept the country codes as a prop
  selectedCode: CountryCode;
  onSelect: (code: CountryCode) => void;
};

export default function Dropdown({ data, selectedCode, onSelect }: DropdownProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsVisible(!isVisible);
  };

  const handleSelect = (code: CountryCode) => {
    onSelect(code);
    setIsVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.dropdownButton} onPress={toggleDropdown}>
        <Text style={styles.dropdownText}>{selectedCode.dialCode}</Text>
      </TouchableOpacity>
      {isVisible && (
        <View style={styles.dropdownList}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.code}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleSelect(item)} style={styles.dropdownItem}>
                <Text style={styles.itemText}>
                  {item.code} {item.dialCode}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative', // Use relative positioning for the container
  },
  dropdownButton: {
    borderWidth: 4,
    borderColor: '#C3C3C2',
    borderRadius: 12,
    padding: 10,
    alignItems: 'center',
    marginRight: 10,
    width: 119,
    height: 54,
    justifyContent: 'center',
  },
  dropdownText: {
    color: '#888',
    fontSize: 28,
    textAlign: 'left',
    fontFamily: 'QuicksandBold',
  },
  dropdownList: {
    position: 'absolute', // Position the dropdown list absolutely
    top: 60, // Adjust this value to position the dropdown below the button
    left: 0,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 10,
    width: 119,
    elevation: 5, // Add shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  dropdownItem: {
    padding: 10,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
    fontFamily: 'QuicksandBold',
  },
});
