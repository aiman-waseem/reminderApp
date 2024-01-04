


import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';

import Apps from './src/components/Apps';
// import ButtonComponent from '../../ButtonComponent';
// import MedicineForm from '..MedicineForm/components/MedicineForm'; // Import the Medicine component
import MedicineForm from './src/components/MedicineForm';

const MainScreen = () => {
  const [showApps, setShowApps] = useState(false);
  const [showmedApps, setShowmedApps] = useState(false);


  const handleButtonPress = () => {
    setShowApps(true);
    console.log("Button pressed! Showing Apps component.");
  };
  
  const handlemedButtonPress = () => {
    setShowmedApps(true);
    console.log("Button pressed! Showing Apps component.");
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        {!showApps ? (
          <Button title="locational alert" onPress={handleButtonPress} />
        ) : (
          <Apps />
        )}
      </View>
      <View style={styles.buttonContainer}>
        {!showmedApps ? (
          <Button title="Medicinenal alert" onPress={handlemedButtonPress} />
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

export default MainScreen;







