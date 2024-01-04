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
import { View, TextInput, Button, Alert, StyleSheet, Text, FlatList } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import * as Notifications from 'expo-notifications';
import SavedAlarm from './SavedAlarm';

export default function MedicineForm({ scheduledAlarms, setScheduledAlarms }) {
  const [medicineName, setMedicineName] = useState('');
  const [dosage, setDosage] = useState('');
  const [purpose, setPurpose] = useState('');
  const [isDateTimePickerVisible, setDateTimePickerVisible] = useState(false);
  const [notificationTime, setNotificationTime] = useState(null);
  const [useOCR, setUseOCR] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
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
    console.log(newAlarm);

    scheduleNotification();
    clearForm();
    Alert.alert('Success', 'Medicine details saved and notification scheduled.');
  };

  const handleDeleteAlarm = (id) => {
    setScheduledAlarms((prevAlarms) => prevAlarms.filter((alarm) => alarm.id !== id));
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
      <View style={styles.optionContainer}>
        <Button title="Manual Input" onPress={() => setUseOCR(false)} />
      </View>

      <View style={styles.manualInputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter medicine name"
          value={medicineName}
          onChangeText={(text) => setMedicineName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter dosage"
          value={dosage}
          onChangeText={(text) => setDosage(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter purpose"
          value={purpose}
          onChangeText={(text) => setPurpose(text)}
        />
      </View>

      <Button title="Select Notification Time" onPress={showDateTimePicker} />
      {notificationTime ? (
        <Text style={styles.selectedTime}>
          Selected Notification Time: {notificationTime.toLocaleString()}
        </Text>
      ) : null}

      <Button title="Save" onPress={handleSaveDetails} disabled={!useOCR && !notificationTime} />

      <DateTimePickerModal
        isVisible={isDateTimePickerVisible}
        mode="time"
        onConfirm={handleDateConfirm}
        onCancel={hideDateTimePicker}
      />

{/* <SavedAlarm savedAlarms={scheduledAlarms} onDelete={handleDeleteAlarm} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  manualInputContainer: {},
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  selectedTime: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'center',
  },
});
