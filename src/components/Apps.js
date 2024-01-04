import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, LogBox, ImageBackground } from 'react-native';
import CurrentAdress from './CurrentAdress';
import CurrentCoordinates from './Current_coordinates';
import Texting from './Texting';
import backgroundImge from '../123.jpg'


export default function Apps() {
  LogBox.ignoreLogs(['Remote debugger']);

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImge} resizeMode="cover"  
        style={styles.bkg}>
          <Texting />
          <CurrentCoordinates />
          <CurrentAdress />
       </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text:{
    color: 'white',
    fontSize: 20,
    padding: '5%'
  },
  bkg: {
    flex: 1,
    textAlign: 'center',
    padding: '3%'
  }
});