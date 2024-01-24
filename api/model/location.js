const mongoose = require("mongoose");
const locationSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  longitude: {
    type: String,
    required: true,
   
  },
  latitude: {
    type: String,
    required: true,
  },deviceToken:{ String},
 
});


const Locationsch= mongoose.model("Locationsch",locationSchema);

module.exports = Locationsch;