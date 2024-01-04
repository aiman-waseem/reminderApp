import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Share, Button } from 'react-native';
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
      <View style={styles.butt}>
          <Button
            title='Send your coordinates'
            onPress={onShare}
            
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      color: "white"
    },
    texth:{
      color: 'black',
      fontSize: 20,
    },
    butt: {
      backgroundColor: 'crimson',
      borderRadius: 12,
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 5},
      shadowOpacity: 0.2,
      shadowRadius: 3,
      margin: '10%',
      padding: '1%'
     }
  })