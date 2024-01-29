const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const ObjectId = mongoose.Types.ObjectId;
// const admin = require('firebase-admin');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// const serviceAccount = require('./notifier-fb99c-firebase-adminsdk-sl6d6-9a83fd33dc.json');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   // other configuration options
// });


mongoose.connect('mongodb+srv://maheen1wahid:GKiKznXh9DXt4vCK@cluster0.aee2gva.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }) .then(() => {
    console.log("Connected  to Mongo Db");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDb", err);
  });


const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running maheen on port ${PORT}`);
  });
const User=require('./model/User') ;
const Locationsch=require('./model/location');
const Medicinesch=require('./model/meicine');

// const name='maheen';
// const email="mah@gmail.com";
// const password='ndfhksedhfse';
// const newUser = new User({ name, email, password });

//   // save the user to the database
  
//   newUser.save()
//     .then(() => {
//       // res.status(200).json({ message: "User registered successfully" });
//       console.log('registered !')
//     })
//     .catch((err) => {
//       console.log("Error registering user", err);
//       // res.status(500).json({ message: "Error registering the user!" });
//       console.log('error');
//     });
// console.log('maheen')
// app.post("/register", (req, res) => {
//   const { name, email, password} = req.body;
//   console.log(req.body);

//   // create a new User object
//   const newUser = new User({ name, email, password });

//   // save the user to the database
//   newUser.save()
//     .then(() => {
//       res.status(200).json({ message: "User registered successfully" });
//     })
//     .catch((err) => {
//       console.log("Error registering user", err);
//       res.status(500).json({ message: "Error registering the user!" });
//     });
// });
app.post("/locationsav", (req, res) => {
  const { description, longitude, latitude ,myId} = req.body;
  

  if (!description || !longitude || !latitude) {
    return res.status(400).json({ message: "Please provide all required fields" });
  }

  const newLocation = new Locationsch({ description, longitude, latitude,myId });

  newLocation.save()
    .then(() => {
      res.status(200).json({ message: "Location registered successfully" });
    })
    .catch((err) => {
      console.log("Error registering location", err);
      res.status(500).json({ message: "Error registering the location!" });
    });
});
app.post("/medicinealarmsav", (req, res) => {
  const { medicineName, dosage,purpose,notificationTime,myid } = req.body;
  console.log("Received request body:", req.body);
  if (!medicineName || !notificationTime) {
    return res.status(400).json({ message: "Please provide all required fields" });
  }

  const newMedicinalAlert = new Medicinesch({ medicineName,dosage,purpose,notificationTime,myid });

  newMedicinalAlert.save()
    .then(() => {
      res.status(200).json({ message: "Medicinal info  registered successfully" });
    })
    .catch((err) => {
      console.log("Error registering Medicinal Info", err);
      res.status(500).json({ message: "Error registering the Medicinal Info!" });
    });
});

app.delete('/medicinealarmsav/:id', async (req, res) => {

  // console.log("yh h reqbody",id)
  const alarmId = req.params.id;
  console.log("yh h reqbody",alarmId)

  console.log('Deleting Medicinal Alarm with ID:', alarmId);

  try {
   
 
    const deletedAlarm = await Medicinesch.deleteOne({ myid : alarmId});
 
    // const deletedAlarm = await Medicinesch.findByIdAndDelete({ _id: objectId });
  console.log("yh h laalrm",deletedAlarm)
    if (!deletedAlarm) {
      return res.status(404).json({ message: 'Alarm not found' });
    }

    res.status(200).json({ message: 'Alarm deleted successfully' });
  } catch (error) {
    console.error('Error deleting alarm:', error);
    res.status(500).json({ message: 'Error deleting the alarm' });
  }
});

// app.delete('/medicinealarmsav/:id', async (req, res) => {
//   const alarmId = req.params.id;

//   try {
//      // Validate if the ID is a valid ObjectId
//      if (!mongoose.isValidObjectId(alarmId)) {
//       return res.status(400).json({ message: 'Invalid ID format' });
//     }
//     const objectId = new ObjectId(alarmId);
//     const deletedAlarm = await Medicinesch.findByIdAndDelete(objectId);

//     if (!deletedAlarm) {
//       return res.status(404).json({ message: 'Alarm not found' });
//     }

//     res.status(200).json({ message: 'Alarm deleted successfully' });
//   } catch (error) {
//     console.error('Error deleting alarm:', error);
//     res.status(500).json({ message: 'Error deleting the alarm' });
//   }
// });

app.delete('/locationsav/:id', async (req, res) => {

  // console.log("yh h reqbody",id)
  const alarm = req.params.id;
  console.log("yh h reqbody",alarm)

  console.log('Deleting location Alarm with ID:', alarm);

  try {
   
 
    const deletedAlam = await Locationsch.deleteOne({ myid : alarm});
 
    // const deletedAlarm = await Medicinesch.findByIdAndDelete({ _id: objectId });
  console.log("yh h laalrm",deletedAlam)
    if (!deletedAlam) {
      return res.status(404).json({ message: 'Alarm not found' });
    }

    res.status(200).json({ message: 'Alarm deleted successfully' });
  } catch (error) {
    console.error('Error deleting alarm:', error);
    res.status(500).json({ message: 'Error deleting the alarm' });
  }
});

// app.post("/checkerr", (req, res) => {
  
//   if (!req.body) {
//     return res.status(400).json({ message: "Request body is missing" });
// }

// const { longitude, latitude } = req.body;
// console.log(longitude, latitude);
// res.status(200).json({ message: " found" });
// });
// for test

// app.post("/checkcordinatses", (req, res) => {
//   const { longitude, latitude } = req.body;

//   if (!longitude || !latitude) {
//     return res.status(400).json({ message: "Please provide longitude and latitude" });
//   }

//   Locationsch.findOne({ longitude, latitude })
//     .then(location => {
//       if (!location) {
//         return res.status(404).json({ message: "Location not found" });
//       }
//     console.log(location);
//     console.log('Notification sent:', response);
//     res.status(200).json({ description: location.description });
    
//     })
//     .catch(err => {
//       console.log("Error finding location", err);
//       res.status(500).json({ message: "Error finding the location!" });
//     });
// });

  //  neechy wala sahi h



// const axios = require('axios');
// app.post("/checkcoordinates", async (req, res) => {
//   const { longitude, latitude } = req.body;
//  console.log("working properly")
//   if (!longitude || !latitude) {
//     return res.status(400).json({ message: "Please provide longitude and latitude" });
//   }

//   try {
//     const location = await Locationsch.findOne({ longitude, latitude });

//     if (!location) {
//       return res.status(200).json({ message: "please enter longitude and latitude" });
//      
     
//     }



//       const userId = 'd604ce6e-1514-4f23-aa44-9540d55010ab'; // Replace with the actual user ID from OneSignal
//       const message = `Location description: ${location.description}`;
//       // const player= '52f82d2b-c7ed-488b-8137-a491b578154b';
  
//       const response = await axios.post('https://onesignal.com/api/v1/notifications', {
//         app_id: 'd604ce6e-1514-4f23-aa44-9540d55010ab',
//         contents: { en: message },
//         include_player_ids: [ userId],
//       }, {
//         headers: {
//           'Authorization': `NThjNzVjMDctMjQ2YS00MjI4LThhMGYtMmE2ZjFiZmEwMDQz`,
//           'Content-Type': 'application/json',
//         },
//       });
  
//       console.log("Push notification sent:", response.data);
//       return res.status(200).json({ description: location.description, message: "Push notification sent" });


//   } catch (error) {
//     console.error("Error sending push notification:", error);
//     return res.status(500).json({ message: "Error sending push notification" });
//   }
// });



// // ------------------------------------------------------testing
// const axios = require('axios');
// function calculateDistance(lat1, lon1, lat2, lon2) {
//   const R = 6371e3; // Earth radius in meters
//   const φ1 = (lat1 * Math.PI) / 180;
//   const φ2 = (lat2 * Math.PI) / 180;
//   const Δφ = ((lat2 - lat1) * Math.PI) / 180;
//   const Δλ = ((lon2 - lon1) * Math.PI) / 180;

//   const a =
//     Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
//     Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
//   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

//   const distance = R * c; // Distance in meters
//   return distance;
// }
// let flagss=0;
// // Assuming Locationsch is your mongoose model for locations
// app.post("/checkcoordinates", async (req, res) => {
//   const { longitude, latitude } = req.body;

//   if (!longitude || !latitude) {
//     return res.status(400).json({ message: "Please provide longitude and latitude" });
//   }


  
//     const location = await Locationsch.findOne({ longitude, latitude });
//     if(location){
//       try{
//       const userId = 'd604ce6e-1514-4f23-aa44-9540d55010ab'; // Replace with the actual user ID from OneSignal
//       const message = `Location description: ${location.description}`;
//       // const player= '52f82d2b-c7ed-488b-8137-a491b578154b';
  
//       const response = await axios.post('https://onesignal.com/api/v1/notifications', {
//         app_id: 'd604ce6e-1514-4f23-aa44-9540d55010ab',
//         contents: { en: message },
//         include_player_ids: [ userId],
//       }, {
//         headers: {
//           'Authorization': `NThjNzVjMDctMjQ2YS00MjI4LThhMGYtMmE2ZjFiZmEwMDQz`,
//           'Content-Type': 'application/json',
//         },
//       });
  
//       console.log("Push notification sent:", response.data);
//       return res.status(200).json({ description: location.description, message: "Push notification sent" });


//   } catch (error) {
//     console.error("Error sending push notification:", error);
//     return res.status(500).json({ message: "Error sending push notification" });
//   }}
//   else{

//   try {
//     // Fetch all locations from the database
//     const allLocations = await Locationsch.find({}, { longitude: 1, latitude: 1 });

 
//     allLocations.forEach(location => {
//       const distance = calculateDistance(latitude, longitude, location.latitude, location.longitude);
//       // const distance = Math.sqrt(Math.pow((latitude - location.latitude), 2) + Math.pow((longitude - location.longitude), 2));
//       if (distance <= 10) { // Check if distance is exactly 10 (adjust comparison as needed)
//         console.log("this long and lat is in 10m of saved location");
//         //  flagss=1;
//         return res.status(200).json({ message: "Device is in 10m distance of some points" });

//       }else{
//         console.log("Device is not in 10m distance of any points");
//         return res.status(200).json({ message: "Device is not in 10m distance of any points" });
      
//       }

//     })
//     console.log("theek h yahan tak ");
//     // if(flagss==0) {
//     //   console.log("Device is not in 10m distance of any points");
//     //   return res.status(200).json({ message: "Device is not in 10m distance of any points" });
//     // }

//   } catch (error) {
//     console.error("Error:", error);
//     return res.status(500).json({ message: "Error processing the request" });
//   }}
// });



//  error free
const axios = require('axios');

function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const φ1 = (lat1 * Math.PI) / 180;
  const φ2 = (lat2 * Math.PI) / 180;
  const Δφ = ((lat2 - lat1) * Math.PI) / 180;
  const Δλ = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c; // Distance in meters
  return distance;
}



// Assuming Locationsch is your mongoose model for locations
app.post("/checkcoordinates", async (req, res) => {

  const expoToken = "wAJtlBJCDnx9fflSHToT5A"

  console.log(expoToken);

  const { longitude, latitude } = req.body;
console.log("check coordinates working ")
  if (!longitude || !latitude) {
    console.log("no entry")
    return res.status(400).json({ message: "Please provide longitude and latitude" });
  }

  try {
    const location = await Locationsch.findOne({ longitude, latitude });
    if (location) {
      const message = `Location description: ${location.description}`;
      // await sendPushNotification(expoToken, message);

      // return res.status(200).json({ description: location.description, message: 'Push notification sent' });
      
      return res.status(200).json({ description: location.description, message: message });
      
     
    }else {
      const allLocations = await Locationsch.find({}, { longitude: 1, latitude: 1 ,description:1});
//  console.log(allLocations);
      let deviceWithin10m = false;
      for (const location of allLocations) {
      // allLocations.forEach(location => {
        const distance = calculateDistance(latitude, longitude, location.latitude, location.longitude);
        if (distance <= 10) {
          console.log("This long and lat is within 10m of a saved location",distance);
          deviceWithin10m = true;
          const message = `Location description: ${location.description}`;
//      

      // console.log("Push notification sent:", res.data);
      // return res.status(200).json({ description: location.description, message: "Push notification sent" });
      return res.status(200).json({ description: location.description, message: message });
        // return res.status(200).json({ message: "Device is in 10m distance of some points" });
     }
        // }  );
    }
        if(!deviceWithin10m){
        
            console.log("Device is not in 10m distance of any points");
            return res.status(200).json({ message: "Device is not in 10m distance of any points" });
       
        }
    

    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Error processing the request" });
  }
     
});



// app.post('/checkcoordinates', async (req, res) => {
//   const { longitude, latitude } = req.body;
//   console.log('check coordinates working ');

//   if (!longitude || !latitude) {
//     console.log('no entry');
//     return res.status(400).json({ message: 'Please provide longitude and latitude' });
//   }

//   try {
//     const location = await Locationsch.findOne({ longitude, latitude });
//     if (location) {
//       const expoPushToken = 'EXPO_PUSH_TOKEN'; // Replace with the actual Expo push token
//       await sendPushNotification(expoPushToken, location.description);
    
//       console.log('Push notification sent');
//       return res.status(200).json({ description: location.description, message: 'Push notification sent' });
//     } else {
//       const allLocations = await Locationsch.find({}, { longitude: 1, latitude: 1, description: 1 });
//       let deviceWithin10m = false;

//       for (const location of allLocations) {
//         const distance = calculateDistance(latitude, longitude, location.latitude, location.longitude);

//         if (distance <= 10) {
//           deviceWithin10m = true;

//           // Send push notification if device is within 10m of a saved location
//           const expoPushToken = 'EXPO_PUSH_TOKEN'; // Replace with the actual Expo push token
//           await sendPushNotification(expoPushToken, location.description);

//           console.log('Push notification sent');
//           return res.status(200).json({ description: location.description, message: 'Push notification sent' });
//         }
//       }

//       if (!deviceWithin10m) {
//         console.log('Device is not in 10m distance of any points');
//         return res.status(200).json({ message: 'Device is not in 10m distance of any points' });
//       }
//     }
//   } catch (error) {
//     console.error('Error:', error);
//     return res.status(500).json({ message: 'Error processing the request' });
//   }
// });


// const sendPushNotification = async (expoPushToken, description) => {
//   try {
//     await Notifications.sendPushNotificationAsync({
//       to: expoPushToken,
//       sound: 'default',
//       title: 'Location Match!',
//       body: `You are near ${description}.`,
//     });
//     console.log('Push notification sent successfully');
//   } catch (error) {
//     console.error('Error sending push notification:', error);
//   }
// };
// // Function to send push notification using Expo's push notification service
// async function sendPushNotification(expoPushToken, description) {
//   const expoEndpoint = 'https://exp.host/--/api/v2/push/send';

//   const message = {
//     to: expoPushToken,
//     sound: 'default',
//     title: 'Notification Title',
//     body: You are near a location: ${description},
//   };

//   try {
//     const response = await axios.post(expoEndpoint, message);
//     console.log('Expo push notification response:', response.data);
//   } catch (error) {
//     console.error('Error sending Expo push notification:', error.message);
//   }
// }

// Your other functions (calculateDistance, etc.) go here
