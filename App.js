


import React, { useState } from 'react';
import { View, StyleSheet, Button , Text} from 'react-native';


import { Navigation } from './src/navigations/Navigation';
import { StackNavigation } from './src/navigations/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import Apps from './src/components/Apps';
// import ButtonComponent from '../../ButtonComponent';
// import MedicineForm from '..MedicineForm/components/MedicineForm'; // Import the Medicine compone
import { AppProvider } from './src/components/AppContext';
import MedicineForm from './src/components/MedicineForm';

 const App = () => {
  

  return (

    
    
   <AppProvider>
     <NavigationContainer>
    <Navigation/>
    
  </NavigationContainer>
   </AppProvider>
   
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   buttonContainer: {
//     marginBottom: 20,
//   },
// });

export default App;












