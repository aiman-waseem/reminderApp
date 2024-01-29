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
  
    <View style={styles.container}>
  
     
          

       
       <LinearGradient
        colors={['#a3caeb', '#cfa3eb']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 1, y: 0.5 }}
         style={styles.background}
       >
        <View  style={{
          // elevation: 10,
          backgroundColor: 'white',
          borderRadius: 15,
          height: 380,
          width:300,
         
          // margin: 10,
          // marginTop: 50,
          // marginHorizontal:30,
          paddingVertical: 20,
          marginBottom:50,
          // paddingHorizontal: 15,
        }}>
         {/* <Texting /> */}
          <CurrentCoordinates />
          <CurrentAdress />
          <StatusBar style="auto" /> 

          </View>

       </LinearGradient>
     
    </View>
      //  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    // alignItems: 'center',
    // justifyContent: 'center',
   
 
  },
  text:{
    color: 'white',
    fontSize: 20,
    // padding: '5%'
  },
  
  // background: {
  //   position: 'absolute',
  //   left: 0,
  //   right: 0,
  //   top: 0,
  //   height: 700,
    
  // },
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
});