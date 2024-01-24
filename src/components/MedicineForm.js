// import React, { useState, useEffect } from 'react';
// import { View, TextInput, Button, Alert, StyleSheet, Text, Image, FlatList } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';

// import DateTimePickerModal from 'react-native-modal-datetime-picker';
// import * as Notifications from 'expo-notifications';

// export default function MedicineForm() {
//   const [medicineName, setMedicineName] = useState('');
//   const [dosage, setDosage] = useState('');
//   const [purpose, setPurpose] = useState('');
//   const [isDateTimePickerVisible, setDateTimePickerVisible] = useState(false);
//   const [notificationTime, setNotificationTime] = useState(null);
//   const [useOCR, setUseOCR] = useState(false);
//   const [capturedImage, setCapturedImage] = useState(null);

  

//   const handleSaveDetails = () => {
//     if (!medicineName || !dosage || !purpose || !notificationTime) {
//       Alert.alert('Error', 'Please enter all details.');
//       return;
//     }

   
//     scheduleNotification();
//     clearForm();
//     Alert.alert('Success', 'Medicine details saved and notification scheduled.');
//   };

 

//   const handleDateConfirm = (date) => {
//     setNotificationTime(date);
//     setDateTimePickerVisible(false);
//   };

//   const showDateTimePicker = () => {
//     setDateTimePickerVisible(true);
//   };

//   const hideDateTimePicker = () => {
//     setDateTimePickerVisible(false);
//   };

//   const clearForm = () => {
//     setMedicineName('');
//     setDosage('');
//     setPurpose('');
//     setNotificationTime(null);
//     setCapturedImage(null);
//   };

  

//   const scheduleNotification = async () => {
  
//   try {
//     await Notifications.scheduleNotificationAsync({
//       content: {
//         title: 'Medicine Reminder',
//         body: `Medicine: ${medicineName}\nDosage: ${dosage}\nPurpose: ${purpose}`,
//       },
//       trigger: { date: notificationTime },
//     });
//   } catch (error) {
//     console.error('Notification Scheduling Error:', error);
//   }
// };

//   return (
//     <View style={styles.container}>
//       <View style={styles.optionContainer}>
        
//         <Button title="Manual Input" onPress={() => setUseOCR(false)} />
//       </View>

     
//         <View style={styles.manualInputContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter medicine name"
//             value={medicineName}
//             onChangeText={(text) => setMedicineName(text)}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Enter dosage"
//             value={dosage}
//             onChangeText={(text) => setDosage(text)}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Enter purpose"
//             value={purpose}
//             onChangeText={(text) => setPurpose(text)}
//           />
//         </View>
      

//       <Button title="Select Notification Time" onPress={showDateTimePicker} />
//       {notificationTime ? (
//         <Text style={styles.selectedTime}>
//           Selected Notification Time: {notificationTime.toLocaleString()}
//         </Text>
//       ) : null}
//       <Button
//         title="Save"
//         onPress={handleSaveDetails}
//         disabled={!useOCR && !notificationTime}
//       />


//       <DateTimePickerModal
//         isVisible={isDateTimePickerVisible}
//         mode="time"
//         onConfirm={handleDateConfirm}
//         onCancel={hideDateTimePicker}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 16,
//   },
//   optionContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginBottom: 16,
//   },
//   ocrContainer: {
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   capturedImage: {
//     width: 200,
//     height: 200,
//     marginBottom: 8,
//   },
//   ocrText: {
//     fontSize: 16,
//     marginBottom: 8,
//   },
//   manualInputContainer: {},
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 16,
//     paddingHorizontal: 8,
//   },
//   selectedTime: {
//     fontSize: 16,
//     marginBottom: 16,
//     textAlign: 'center',
//   },
// });



import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text, FlatList , Dimensions} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { LinearGradient } from 'expo-linear-gradient';
import * as Notifications from 'expo-notifications';
import { useAppContext } from './AppContext';

import SavedAlarm from './SavedAlarm';

export default function MedicineForm({ scheduledAlarms, setScheduledAlarms }) {
  const [medicineName, setMedicineName] = useState('');
  const [dosage, setDosage] = useState('');
  const [purpose, setPurpose] = useState('');
  const [isDateTimePickerVisible, setDateTimePickerVisible] = useState(false);
  const [notificationTime, setNotificationTime] = useState(null);
  const [useOCR, setUseOCR] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);

  const { setMedicinalForm } = useAppContext();

  // const [scheduledAlarms, setScheduledAlarms] = useState([]);

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const requestCameraPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Required', 'Please allow camera access to use OCR functionality.');
    }
  };

  const handleSaveDetails = () => {
    if (!medicineName || !dosage || !purpose || !notificationTime) {
      Alert.alert('Error', 'Please enter all details.');
      return;
    }

    // Save the alarm details to the scheduledAlarms state
    const newAlarm = {
      id: new Date().getTime(), // Use a unique ID (timestamp) as the key
      medicineName,
      dosage,
      purpose,
      notificationTime,
    };

     
    setScheduledAlarms((prevAlarms) => [...prevAlarms, newAlarm]);
    setMedicinalForm((prevAlarms) => [...prevAlarms, newAlarm]); // Update the context
    console.log(newAlarm);

    scheduleNotification();
    clearForm();
    Alert.alert('Success', 'Medicine details saved and notification scheduled.');

    const handleDeleteAlarm = (id) => {
      console.log("Delete button clicked for ID:", id);
      setMedicinalForm((prevAlarms) => prevAlarms.filter((alarm) => alarm.id !== id));
    };
  };

  

  const handleDateConfirm = (date) => {
    setNotificationTime(date);
    setDateTimePickerVisible(false);
  };

  const showDateTimePicker = () => {
    setDateTimePickerVisible(true);
  };

  const hideDateTimePicker = () => {
    setDateTimePickerVisible(false);
  };

  const clearForm = () => {
    setMedicineName('');
    setDosage('');
    setPurpose('');
    setNotificationTime(null);
    setCapturedImage(null);
  };

  const scheduleNotification = async () => {
    try {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: 'Medicine Reminder',
          body: `Medicine: ${medicineName}\nDosage: ${dosage}\nPurpose: ${purpose}`,
        },
        trigger: { date: notificationTime },
      });
    } catch (error) {
      console.error('Notification Scheduling Error:', error);
    }
  };

  return (
    
    <View style={styles.container}>

<LinearGradient
      colors={['#a3caeb', '#cfa3eb']}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 1, y: 0.5 }}
      style={styles.background}
      >
    

      <View  style={{
          // elevation: 10,
          backgroundColor: 'white',
          borderRadius: 10,
          // height: 250,
          width:300,
          // margin: 10,
          marginTop: 50,
          marginHorizontal:30,
          paddingVertical: 20,
          // paddingHorizontal: 15,
        }}>
        <Text style={{fontSize:12, color:'#03bafc'}}> Medicine Name:</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter medicine name"
          value={medicineName}
          onChangeText={(text) => setMedicineName(text)}
        />
         <Text style={{fontSize:12, color:'#03bafc'}}> Dosage:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter dosage"
          value={dosage}
          onChangeText={(text) => setDosage(text)}
        />
         <Text style={{fontSize:12, color:'#03bafc'}}> Purpose:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter purpose"
          value={purpose}
          onChangeText={(text) => setPurpose(text)}
        />

    {/* <Button  title="Select Notification  Time" onPress={showDateTimePicker} />
      {notificationTime ? (
        <Text style={styles.selectedTime}>
          Selected Notification Time: {notificationTime.toLocaleString()}
        </Text>
      ) : null}

      <Button style={styles.button} title="Save" onPress={handleSaveDetails} disabled={!useOCR && !notificationTime} /> */}

<View style={styles.buttonContainer}>
      <Button title="Select Notification Time" onPress={showDateTimePicker} style={styles.button} />
      {notificationTime ? (
        <Text style={styles.selectedTime}>
          Selected Notification Time: {notificationTime.toLocaleString()}
        </Text>
      ) : null}
      <Button
        style={[styles.button, styles.saveButton]}
        title="Save"
        onPress={handleSaveDetails}
        disabled={!useOCR && !notificationTime}
      />
    </View>

      <DateTimePickerModal
        isVisible={isDateTimePickerVisible}
        mode="time"
        onConfirm={handleDateConfirm}
        onCancel={hideDateTimePicker}
      />
     
      </View>

      

      

{/* <SavedAlarm savedAlarms={scheduledAlarms} onDelete={handleDeleteAlarm} /> */}
</LinearGradient>
    </View>
   
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    // backgroundColor:'yellow',
   
    
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 700,
    
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  manualInputContainer: {
    // elevation: 10,
          // backgroundColor: 'white',
          borderRadius: 10,
          // margin: 10,
          // marginTop: -20,
          // paddingVertical: 20,
          // paddingHorizontal: 15,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderBottomColor:"#03bafc",
    borderBottomWidth:0.5,
    // borderWidth: 1,
    paddingVertical: 0,
    // marginTop: 5,
    marginBottom: 40,
    paddingHorizontal: 8,
    marginHorizontal: 10,
  },
  selectedTime: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginHorizontal: 20, // Adjust as needed
    borderRadius:30,
  },
  button: {
    minWidth: 100, // Adjust as needed
    borderRadius: 50, // Adjust as needed
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius:5,
    elevation: 5,
  },
  saveButton: {
    backgroundColor: '#4CAF50', // Adjust as needed
  },
});
