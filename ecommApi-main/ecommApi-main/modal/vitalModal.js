const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const vitalSchema = new mongoose.Schema({


temprature:{
    type:String
  },
  pulse1:{
    type:String
  },
  pulse2:{
    type:String
  },
  weight:{
    type:String
  },
  oxygenSaturation:{
    type:String
  }

},{timestamps:true})
 

 

module.exports = mongoose.model("vital",vitalSchema);