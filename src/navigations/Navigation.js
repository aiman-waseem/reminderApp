import MedicineForm from '../components/MedicineForm';
import Apps from '../components/Apps';
import MainScreen from '../components/MainScreen';
import SavedAlarm from '../components/SavedAlarm';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

// const Stack = createNativeStackNavigator();

// function Navigation() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//       <Stack.Screen name="Home" component={MainScreen} />
//       <Stack.Screen name="Location" component={Apps} />
//       <Stack.Screen name="MedicinalReminder" component={MedicineForm} />
      
//     </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
// export default Navigation;



const Tab = createBottomTabNavigator();

// function Navigation() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={{
//           // tabBarActiveTintColor: '#e91e63',
//           tabBarInactiveTintColor:'black',
//           tabBarShowLabel:true,
//         }}
//       >
//       <Tab.Screen name="Home" component={MainScreen}
//        options={{
//         tabBarLabel: 'Home',
//         tabBarIcon: ({ color, size }) => (
//         <Entypo name="home" size={24} color="purple" />
//         ),
//       }}
//       />
//       <Tab.Screen name="Location" component={Apps}
//       options={{
//         tabBarLabel: 'Current Location',
//         tabBarIcon: ({ color, size }) => (
//           <Ionicons name="alarm-outline" size={24} color="#2E8B57" />
//           ),
       
//       }}
//       />
//       <Tab.Screen name="MedicinalReminder" component={MedicineForm}
//          options={{
//           tabBarLabel: 'Medicinal Reminder',
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="alarm-outline" size={24} color="#2E8B57" />
//             ),
         
//         }}
//       />
//       <Tab.Screen name="SavedAlarm" component={SavedAlarm} />
//     </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
// export default Navigation;

function Navigation() {
  const [scheduledAlarms, setScheduledAlarms] = useState([]);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarInactiveTintColor: 'black',
          tabBarShowLabel: true,
        }}
      >
           <Tab.Screen name="Home" component={MainScreen}
       options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
        <Entypo name="home" size={24} color="purple" />
        ),
      }}
      />

        <Tab.Screen
          name="MedicinalReminder"
          options={{
            tabBarLabel: 'Medicinal Reminder',
            tabBarIcon: ({ color, size }) => <Ionicons name="alarm-outline" size={24} color="#2E8B57" />,
          }}
        >
          {() => <MedicineForm scheduledAlarms={scheduledAlarms} setScheduledAlarms={setScheduledAlarms} />}
        </Tab.Screen>
        
        <Tab.Screen
          name="SavedAlarm"
          options={{
            tabBarLabel: 'Saved Alarms',
            tabBarIcon: ({ color, size }) => <Ionicons name="alarm-outline" size={24} color="#2E8B57" />,
          }}
        >
          {() => <SavedAlarm savedAlarms={scheduledAlarms} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;


