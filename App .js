


import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Apps from './src/components/Apps';
import ButtonComponent from './ButtonComponent';
import MedicineForm from './components/MedicineForm'; // Import the Medicine component

const App = () => {
  const [showApps, setShowApps] = useState(false);

  const handleButtonPress = () => {
    setShowApps(true);
    console.log("Button pressed! Showing Apps component.");
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        {!showApps ? (
          <Button title="Show findme" onPress={handleButtonPress} />
        ) : (
          <Apps />
        )}
      </View>
      <View style={styles.buttonContainer}>
        {!showApps ? (
          <Button title="Show Medicines component" onPress={handleButtonPress} />
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
  },
  buttonContainer: {
    marginBottom: 20,
  },
});

export default App;







