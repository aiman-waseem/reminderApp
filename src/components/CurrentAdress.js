import React from 'react';
import { Text, View, StyleSheet, Button, Alert, Pressable } from 'react-native';
import * as Location from 'expo-location';


export default function CurrentAdress() {
 async  function  GetLocation () {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission not granted",
        "Allow the app to use location service.",
        [{ text: "ОК" }],
        { cancelable: false }
      );
    }

    let { coords } = await Location.getCurrentPositionAsync();

    if (coords) {
      const { latitude, longitude } = coords;
      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      for (let item of response) { 
             
        Alert.alert(
          "Location information",
          `Street and house/building name: ${item.name},
          Street: ${item.street}, Postal code: ${item.postalCode},
          City: ${item.city},  Subregion: ${item.subregion}, 
          Region: ${item.region}, Country: ${item.country} `,
          [
            {
              text: "You're welcome!",
              onPress: () => console.log("Super"),
              style: "default"
            }
          ]
        );
      }}
  }


  return (
    <View style={styles.container}>
      <Text style={styles.texth}>Find out your address</Text>
      <Text style={styles.texth}>(It may take a little time)</Text>
      {/* <View style={styles.butt}>
        <Button
          title="Show address"
          onPress={GetLocation}
          color=""
          style={styles.texth}
         />
      </View> */}

<Pressable onPress={GetLocation} style={styles.button}>
  <Text style={styles.ButtonText}>Show address</Text>
</Pressable>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    color: "white",
    marginTop:60
  },
  texth:{
    color: 'black',
    fontSize: 20,
    textAlign: "center",
  },
 
   button: {
      
    backgroundColor:  '#03bafc',
  padding: 10,
  borderRadius: 15,
  marginHorizontal:35,
  // padding:'3%',
    margin: '6%',
   },
   ButtonText:{
    marginHorizontal:50,
    fontSize:15.5,
    fontWeight:'500',
    color:'white',
  },
})