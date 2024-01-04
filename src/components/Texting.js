import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default function Texting(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                Notify
            </Text>
            <Text style={styles.texth}>
            Application for quickly sending your accurate coordinates and receiving information about your address.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center"
    },
    text:{
      color: 'black',
      
      fontSize: 30,
      padding: '5%',
      textAlign: 'center'
    },
    texth: {
        color: 'black',
        fontSize: 15,
        textAlign: 'center'
    }
  });