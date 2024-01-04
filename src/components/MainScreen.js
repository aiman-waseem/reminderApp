import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Apps from './Apps';
import MedicineForm from './MedicineForm';

const MainScreen = () => {
  const [showApps, setShowApps] = useState(false);
  const [showmedApps, setShowmedApps] = useState(false);

  const handleButtonPress = () => {
    setShowApps(true);
    console.log("Button pressed! Showing Apps component.");
  };
  
  const handlemedButtonPress = () => {
    setShowmedApps(true);
    console.log("Button pressed! Showing MedicineForm component.");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notify</Text>
      <View style={styles.buttonContainer}>
        {!showApps ? (
          <TouchableOpacity
            style={styles.button}
            onPress={handleButtonPress}
          >
            <Text style={styles.buttonText}>locational alert</Text>
          </TouchableOpacity>
        ) : (
          <Apps />
        )}
      </View>
      <View style={styles.buttonContainer}>
        {!showmedApps ? (
          <TouchableOpacity
            style={styles.button}
            onPress={handlemedButtonPress}
          >
            <Text style={styles.buttonText}>Medicinenal alert</Text>
          </TouchableOpacity>
        ) : (
          <MedicineForm />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
   
    
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  buttonContainer: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'skyblue',
    padding: 15,
    borderRadius: 20, // Optional: Add borderRadius for rounded corners
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
  },
});

export default MainScreen;
