// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import YourComponent from './YourComponent'
// import DropdownComponent from './DropdownComponent';
// import Timerr from  './Timerr'
// export default function App() {
//   componentDidMount() {
//     Timerr(); // Call the functions within the file
//   }
//   return (
//     <View style={styles.container}>
//       <Timerr/>
//       {/* <YourComponent /> */}
//       {/* <DropdownComponent/> */}
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
   
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });



import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Timer from './Timerrrr';
import YourComponent from './YourComponent'; // Assuming these components are in the same directory
import { LinearGradient } from 'expo-linear-gradient';
// import DropdownComponent from './DropdownComponent';
// import { start } from './Timerr'; // Case-sensitive import
import { useAppContext } from './AppContext';

export default function LocationAlert() {
 
  

  return (
    <View style={styles.container}>
   <LinearGradient
        colors={['#a3caeb', '#cfa3eb']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 1, y: 0.5 }}
         style={styles.background}
       >
      <View style={styles.formContainer}>
      <Timer /> 
     
     <YourComponent />
     {/* <DropdownComponent /> */}
     <StatusBar style="auto" />
      </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor:'yellow',
    height:40
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 700,
},
formContainer:{
  
          borderRadius: 10,
          height: 400,
          // width:260,
          // margin: 10,
          marginTop: 70,
          marginHorizontal:35,
          // padding: 50,
          // paddingVertical:50
}
});
