// import React from 'react';
// import { View, Text, FlatList, StyleSheet } from 'react-native';

// const SavedAlarm = ({ savedAlarms }) => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Saved Alarms</Text>
//       <FlatList
//         data={savedAlarms}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.alarmItem}>
//             <Text>{`Medicine: ${item.medicineName}`}</Text>
//             {/* <Text>{`Dosage: ${item.dosage}`}</Text>
//             <Text>{`Purpose: ${item.purpose}`}</Text> */}
//             <Text>{`Notification Time: ${item.notificationTime.toLocaleString()}`}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 16,
//     marginTop: 20,
//   },
//   header: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   alarmItem: {
//     marginBottom: 20,
//   },
// });

// export default SavedAlarm;


// SavedAlarm.js

// SavedAlarm.js

import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useAppContext } from './AppContext';

const SavedAlarm = () => {
  const { locationData, medicinalFormData, setLocation, setMedicinalForm } = useAppContext();

  console.log("Location Data using context:", locationData);
  console.log("Medicine data using context", medicinalFormData);

  const handleDeleteMedicinalAlarm = (id) => {
    console.log("Delete button clicked for Medicinal Alarm ID:", id);
    setMedicinalForm((prevAlarms) => prevAlarms.filter((alarm) => alarm.id !== id));
  };

  const handleDeleteLocationAlarm = (id) => {
    console.log("Delete button clicked for Location Alarm ID:", id);
    setLocation((prevAlarms) => prevAlarms.filter((alarm) => alarm.id !== id));
  };

  return (
    <View style={styles.container}>
      {(medicinalFormData && medicinalFormData.length > 0) || (locationData && locationData.length > 0) ? (
        <>
          {medicinalFormData && medicinalFormData.length > 0 && (
            <>
              <Text style={styles.header}>Saved Alarms (Medicinal)</Text>
              <FlatList
                data={medicinalFormData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <View style={[styles.alarmItem, styles.medicinalItem]}>
                    <Text>{`Medicine: ${item.medicineName}`}</Text>
                    <Text>{`Notification Time: ${item.notificationTime.toLocaleString()}`}</Text>
                    {/* Add a delete button with TouchableOpacity */}
                    <TouchableOpacity onPress={() => handleDeleteMedicinalAlarm(item.id)}>
                      <Text style={styles.deleteButton}>Delete</Text>
                    </TouchableOpacity>
                  </View>
                )}
              />
            </>
          )}

          {locationData && locationData.length > 0 && (
            <>
              <Text style={styles.header}>Location Saved Alarms</Text>
              <FlatList
                data={locationData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <View style={[styles.alarmItem, styles.locationItem]}>
                    <Text>{item.description}</Text>
                    <Text>{item.selectedLocation}</Text>
                    {/* Add a delete button with TouchableOpacity */}
                    <TouchableOpacity onPress={() => handleDeleteLocationAlarm(item.id)}>
                      <Text style={styles.deleteButton}>Delete</Text>
                    </TouchableOpacity>
                  </View>
                )}
              />
            </>
          )}
        </>
      ) : (
        <Text style={styles.noAlarmText}>No alarm to show</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  alarmItem: {
    backgroundColor: '#03bafc', // Light grey background
    borderRadius: 9, // Border radius
    padding: 15, // Padding for content inside the item
    marginBottom: 15,
  },
  medicinalItem: {
    backgroundColor: '#e0e0e0', // Light grey background for location items
    elevation: 6,
    borderRadius: 20, // Light blue background for medicinal items
  },
  locationItem: {
    backgroundColor: '#e0e0e0', // Light grey background for location items
    elevation: 8,
    borderRadius: 20,
  },
  noAlarmText: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginTop: 20,
  },
  deleteButton: {
    color: 'red',
    marginTop: 5,
  },
});

export default SavedAlarm;


