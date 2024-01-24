import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, LogBox, ImageBackground } from 'react-native';
import CurrentAdress from './CurrentAdress';
import CurrentCoordinates from './Current_coordinates';
import Texting from './Texting';
import { LinearGradient } from 'expo-linear-gradient';
import backgroundImge from '../123.jpg'


export default function Apps() {
  LogBox.ignoreLogs(['Remote debugger']);

  return (
    // <View style={{backgroundColor:'white', flex:'1'}}>
    <View style={styles.container}>
{/*      
      <ImageBackground source={backgroundImge} resizeMode="cover"   
      style={styles.bkg}> */}
          <Texting />
          <CurrentCoordinates />
          <CurrentAdress />
      {/* </ImageBackground> */}
       <StatusBar style="auto" /> 
     
    </View>
      //  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    height:300,
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
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 700,
    
  },
});