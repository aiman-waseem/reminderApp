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

import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const SavedAlarm = ({ savedAlarms, onDelete }) => {


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Saved Alarms</Text>
      <FlatList
        data={savedAlarms}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.alarmItem}>
            <Text>{`Medicine: ${item.medicineName}`}</Text>
            <Text>{`Notification Time: ${item.notificationTime.toLocaleString()}`}</Text>
            <Button title="Delete" onPress={() => onDelete(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  alarmItem: {
    marginBottom: 20,
  },
});

export default SavedAlarm;

