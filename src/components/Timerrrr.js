import React, { useEffect } from 'react';
import * as TaskManager from 'expo-task-manager';
import * as Location from 'expo-location';
import axios from 'axios';

const LOCATION_TASK_NAME = 'background-location-task';


TaskManager.defineTask(LOCATION_TASK_NAME, async ({ data, error }) => {
  if (error) {
    console.error('Error in background task :', error);
    return;
  }
  if (data) {
    const { locations } = data;
    console.log('Received new locations:', locations);
    const { longitude, latitude } = locations[0].coords;
    console.log('long and lat:', longitude, latitude);
    console.log("okokokook")
    // axios.post('http://localhost:5000/checkerr', {  longitude, latitude})
    // console.log("location has been sent ")

    // Send longitude and latitude to the backend
    sendLocationToBackend({ longitude, latitude });
    // try {
    //       const response = await axios.post('http://localhost:5000/checkerr', { longitude, latitude });
    //       console.log("okokokook2222")
      
    //       if (response.status === 200) {
    //         console.log('Location data sent to the backend successfully');
    //       } else {
    //         console.error('Failed to send location data to the backend');
    //       }
    //     }  catch (error) {
    //       console.error('Error sending location data:', error.message);
    //       console.error('Error details:', error);
    //   }
        
  }
});

const sendLocationToBackend = async ({ longitude, latitude }) => {
    console.log("sendloc chal rhs h")
  try {
    // const response = await axios.post('http://localhost:5000/checkerr', { longitude, latitude });
    // Update 'localhost' with your machine's IP address (192.168.43.22)
const response = await axios.post('http://192.168.1.104:5000/checkcoordinates', { longitude, latitude });

    console.log("okokokook2222")

    if (response.status === 200) {
      console.log('Location data sent to the backend successfully');
    } else {
      console.error('Failed to send location data to the backend');
    }
  }  catch (error) {
    console.error('Error sending location data:', error.message);
    console.error('Error details:', error);
}
  
};

const Timerrrr = () => {
  useEffect(() => {
    const startLocationTracking = async () => {
      const { status } = await Location.requestBackgroundPermissionsAsync();

      if (status === 'granted') {
        await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
          accuracy: Location.Accuracy.Balanced,
          timeInterval: 10000,
          distanceInterval: 0,
          pausesUpdatesAutomatically: false,
        });
        console.log("status: ",status)

        console.log('Background location tracking started.');
      } else {
        console.log('Permission to access location was denied.');
      }
    };

    startLocationTracking();
  }, []);

  return null;
};

export default Timerrrr;            
