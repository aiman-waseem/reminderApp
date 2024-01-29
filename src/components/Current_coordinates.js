import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Share, Button, Pressable } from 'react-native';
import * as Location from 'expo-location';

export default function Current_coordinates() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('No access to geolocation');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      
    })();
  }, []);

  let  long = 'determine...';
  if (errorMsg) {
    long = errorMsg;
  } else if (location) {
    long = location.coords.longitude.toFixed(3);
  }

  let  lat = 'determining...';
  if (errorMsg) {
    lat = errorMsg;
  } else if (location) {
    lat = location.coords.latitude.toFixed(3);
  }

    const onShare = async () => {
      try {
        const result = await Share.share({
          message:
            `Has precise coordinates:
            ${location.coords.latitude}
            ${location.coords.longitude}, 
            Enter them in the navigator`, 
        });
      } catch (error) {
        alert(error.message);
      }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texth}>Longitude: {long}</Text>
      <Text style={styles.texth}>Latitude: {lat}</Text>
      {/* <View style={styles.button}>
          <Button
            title='Send your coordinates'
            onPress={onShare}
            
      />
      </View> */}
       <Pressable onPress={onShare} style={styles.button}>
  <Text style={styles.ButtonText}>Send your coordinates</Text>
</Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      // flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      color: "white",
      marginTop:10
    },
    texth:{
      color: 'black',
      fontSize: 20,
    },
    button: {
      
      backgroundColor:  '#03bafc',
    padding: 10,
    borderRadius: 15,
    marginHorizontal:30,
    padding:'3%',
     margin: '6%',
     },
     ButtonText:{
      marginHorizontal:26,
      fontSize:15,
      fontWeight:'500',
      color:'white',
    },
  })