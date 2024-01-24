// // import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, TextInput, Button, Alert, Text, View } from 'react-native';
// import React, { useState } from 'react';
// import axios from 'axios';
// export default function YourComponent() {
//     const [description, setDescription] = useState('');
//   const [longitude, setLongitude] = useState('');
//   const [latitude, setLatitude] = useState('');

//   const handleSubmit = () => {
//     if (!description || !longitude || !latitude) {
//       return Alert.alert('Please provide all required fields');
//     }
//     console.log("ok1")

//     axios.post('http://localhost:5000/locationsav', {
//       description,
//       longitude,
//       latitude,
//     })
//     console.log("ok2")

//     .then((response) => {
//       // Handle success response
//       console.log(response.data);
//       Alert.alert('Location registered successfully');
//       // You can also reset the form fields if needed
//       setDescription('');
//       setLongitude('');
//       setLatitude('');
//     })
//     .catch((error) => {
//       // Handle error
//       console.error('Error registering location', error);
//       Alert.alert('Error registering the location!');
//     });
//   };
//   return (
//     <View style={styles.container}>
//       <Text>maheen </Text>
//       <Text>maheen </Text>
//       <Text>maheen </Text>

//       <View>
//       <TextInput
//         placeholder="Description"
//         value={description}
//         onChangeText={text => setDescription(text)}
//       /> 

//       <TextInput
//         placeholder="Longitude"
//         value={longitude}
//         onChangeText={text => setLongitude(text)}
//         // keyboardType="numeric"
//       />
//       <TextInput
//         placeholder="Latitude"
//         value={latitude}
//         onChangeText={text => setLatitude(text)}
//         // keyboardType="numeric"
//       />
//       <Button title="Submit" onPress={handleSubmit} />
//     </View>
  
      
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#25292e',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import React, { useState } from 'react';
import { StyleSheet,TextInput, Pressable, Alert, Text, View } from 'react-native';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';
import { useAppContext } from './AppContext';


// import * as Notifications from 'expo-notifications';




export default function YourComponent() {
  const [description, setDescription] = useState('');
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const { setLocation } = useAppContext();
  const locations = [
    'MASSCOM CANTEEN',
    'PG CANTEEN',
    'ADMIN BLOCK',
    'HBL BANK',
    'IMTIAZ SUPERSTORE',
    'TCS OFFICE',
  ];
  // const registerForPushNotifications = async () => {
  //   try {
  //     const { status } = await Notifications.requestPermissionsAsync();

  //     if (status !== 'granted') {
  //       console.log('Permission to receive push notifications denied');
  //       return;
  //     }

  //     const expoPushToken = (await Notifications.getExpoPushTokenAsync()).data;
  //     console.log('Expo Push Token:', expoPushToken);

  //     // Now, you can use expoPushToken to send push notifications to this device
  //   } catch (error) {
  //     console.error('Error registering for push notifications:', error);
  //   }
  // };

  // useEffect(() => {
  //   const notificationListener = Notifications.addNotificationReceivedListener((notification) => {
  //     // Handle the received notification
  //     console.log('Notification received:', notification);
  //     registerForPushNotifications();
  //     // You can use the notification data to display it on your screen
  //   },{});
  
  //   return () => {
  //     Notifications.removeNotificationSubscription(notificationListener);
  //   };
  // }, []);
  

  const handleLocationChange = (itemValue) => {
    setSelectedLocation(itemValue);

    switch (itemValue) {
      case 'MASSCOM CANTEEN':
        setLongitude(54.4);
        setLatitude(33.4);
        break;
      case 'PG CANTEEN':
        setLongitude(66.4);
        setLatitude(44.5);
        break;
      case 'ADMIN BLOCK':
        setLongitude(77.4);
        setLatitude(22.5);
        break;
      case 'HBL BANK':
        setLongitude(35.5);
        setLatitude(11.6);
        break;
      case 'IMTIAZ SUPERSTORE':
        setLongitude(89.3);
        setLatitude(32.3);
        break;
      case 'TCS OFFICE':
        setLongitude(77.4);
        setLatitude(99.0);
        break;
      default:
        setLongitude(null);
        setLatitude(null);
        break;
    }

    // Output longitude and latitude when an option is selected
  };
  const handleSubmit = () => {
    if (!description || !longitude || !latitude) {
      return Alert.alert('Please provide all required fields');
    }
    const newLocation = {
      id: new Date().getTime(), // Use a unique ID (timestamp) as the key
      description,
      selectedLocation,
    };

     
    
    setLocation((prevLoc) => [...prevLoc, newLocation]); // Update the context
    // setLocation({ description, longitude, latitude, selectedLocation });
 {   console.log(` message:${description}Longitude: ${longitude}, Latitude: ${latitude}`)}


    axios
      .post('http://192.168.43.126:5000/locationsav', {
        description,
        longitude,
        latitude,
      })
      .then((response) => {
        console.log(response.data);
        Alert.alert('Location registered successfully');
        setDescription('');
        setLongitude('');
        setLatitude('');
        // scheduleNotification();

        // Set location data in the context
        
        
      })
      .catch((error) => {
        console.error('Error registering location', error);
        Alert.alert('Error registering the location!');
      });
  };


  

      

  return (
    
    <View style={styles.container}>
      <Text style={styles.header}>Location Details</Text>

      <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Enter any note to remember"
        value={description}
        onChangeText={(text) => setDescription(text)}
      />

      
       <View style={{marginBottom:80,  borderBottomColor:"#03bafc",
    borderBottomWidth: 0.5,marginHorizontal: 10,  }}>
      <Picker  
        selectedValue={selectedLocation}
        style={{ height: 50, width: 200,borderWidth: 1, }}
        onValueChange={handleLocationChange}
      >
        <Picker.Item label="Select a location" value=""  />
        {locations.map((location, index) => (
          <Picker.Item label={location} value={location} key={index.toString()} />
        ))}
      </Picker>
     
    </View>
    
    <Pressable onPress={handleSubmit} style={({ pressed }) => [
  {
    backgroundColor: pressed ? 'green' : '#03bafc',
    padding: 10,
    borderRadius: 5,
    marginHorizontal:30
  },
]}>
  <Text style={styles.submitButton}>Submit</Text>
</Pressable>

      </View>


     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor: 'white',

    alignItems: 'center',
    justifyContent: 'center',
    // paddingHorizontal: 30,
    borderRadius:20,
    // height:250,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    
    
  },
  input: {
    marginBottom:50,
    borderBottomColor:"#03bafc",
    borderBottomWidth: 0.5,
    marginHorizontal: 10,   
    // color:'white'
  },
  submitButton:{
    marginHorizontal:70,
    color:'white',
  },
  form:{
    // backgroundColor:'pink',
    height:300,
    marginTop:50,
  }
});
