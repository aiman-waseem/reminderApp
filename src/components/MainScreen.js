import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Apps from './Apps';
import MedicineForm from './MedicineForm';
import { useNavigation } from '@react-navigation/native';
import alarmClock from '../../assets/alarmclock2.png';


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
      {/* <View>
      
      <Text style={styles.header}>
      <Image
            source={alarmClock}
            style={styles.headerImage}
          />
        NOTIFY</Text>
      </View> */}

<View style={styles.headerContainer}>
          <Image
            source={alarmClock}
            style={styles.headerImage}
          />
          <Text style={styles.headerText}>NOTIFY</Text>
        </View>
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
  
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',

      position: 'relative',
    bottom:150, 
  },
  headerImage: {
    width: 59,
    height: 59,
    marginRight: 20, 
  },
  headerText: {
     // fontFamily: 'Lobster',
    fontSize: 40,
    fontWeight: 'bold',
    
    color: 'black',
  },
  buttonContainer: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 20, 
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize:16,
    fontWeight:'bold',
  },
});

export default MainScreen;
