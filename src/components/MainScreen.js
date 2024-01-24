import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Apps from './Apps';
import MedicineForm from './MedicineForm';
import { useNavigation } from '@react-navigation/native';
// import LocationAlert from './LocationAlert';


// const MainScreen = () => {
//   const [showApps, setShowApps] = useState(false);
//   const [showmedApps, setShowmedApps] = useState(false);
//   // const [Location, setLocationAlert] = useState(false);
  

//   const handleButtonPress = () => {
//     setShowApps(true);
//     console.log("Button pressed! Showing Apps component.");
//   };
  
//   const handlemedButtonPress = () => {
//     setShowmedApps(true);
//     console.log("Button pressed! Showing MedicineForm component.");
//   };
//   // const handleLocationButton = () => {
//   //   setLocationAlert(true);
//   //   console.log("Button pressed! Showing location Alert component.");
//   // };

//   return (
//     <View style={styles.container}>
//       {/* <LinearGradient
//       colors={['#a3caeb', '#cfa3eb']}
//       start={{ x: 0.5, y: 0 }}
//       end={{ x: 1, y: 0.5 }}
//       style={styles.background}
//       > */}
//       <Text style={styles.header}>Notify</Text>
//       <View style={styles.buttonContainer}>
//         {!showApps ? (
//           <TouchableOpacity
//             style={styles.button}
//             onPress={handleButtonPress}
//           >
//             <Text style={styles.buttonText}>My current Location</Text>
//           </TouchableOpacity>
//         ) : (
//           <Apps />
//         )}
//       </View>
//       <View style={styles.buttonContainer}>
//         {!showmedApps ? (
//           <TouchableOpacity
//             style={styles.button}
//             onPress={handlemedButtonPress}
//           >
//             <Text style={styles.buttonText}>Medicinal alert</Text>
//           </TouchableOpacity>
//         ) : (
//           <MedicineForm />
//         )}
//       </View>
// {/* 
//       <View style={styles.buttonContainer}>
// //         {!Location ? (
// //           <TouchableOpacity
// //             style={styles.button}
// //             onPress={handleLocationButton}
// //           >
//             <Text style={styles.buttonText}>Location alert</Text>
//           </TouchableOpacity>
//        ) : (
//          <LocationAlert />
//        )}
//      </View> */}
//       {/* </LinearGradient> */}
//     </View>
//   );
// };

const MainScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
       <LinearGradient
        colors={['#a3caeb', '#cfa3eb']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 1, y: 0.5 }}
         style={styles.background}
       >
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('FindMe')}
        >
          <Text style={styles.buttonText}>My current Location</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Medicine')}
        >
          <Text style={styles.buttonText}>Medicinal Reminder</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('LocationAlert')}
        >
          <Text style={styles.buttonText}>Location Alert</Text>
        </TouchableOpacity>
      </View>
      </LinearGradient>
    </View>
  );
};

 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'pink',
   
    
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 700,
    
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
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 20, // Optional: Add borderRadius for rounded corners
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
  },
});

export default MainScreen;
