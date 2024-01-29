const mongoose = require("mongoose");
const medicineSchema = new mongoose.Schema({
    medicineName: {
    type: String,
    required: true,
  },
  dosage: {
    type: String,
   
   
  },myid:{
    type:Number,
    required:true,
  }
  ,
  purpose: {
    type: String,
  }
  , notificationTime:{
    type: String,
    required: true,
  }
 
});


const Medicinesch= mongoose.model("Medicinesch",medicineSchema);

module.exports = Medicinesch;