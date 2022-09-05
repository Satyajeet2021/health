const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const couponSchema = new mongoose.Schema({

  // couponCode:{
  //   type:String
  // },
  // couponDescription:{
  //   type:String
  // },
  // couponType:{
  //   type:String
  // },
  // couponUsage:{
  //   type:String
  // },
  // couponExpire:{
  //   type:String
  // },
  // status:{
  //   type:String,
  //   default:"active"
  // },
  // indivisualUse:{
  //   type:String,
  // },
  // excludeUse:{
  //   type:String,
  // },
  // couponPrice:{
  //   type:String,
  // },
  // productList:{
  //   type:Array,
  // }

  username:{
    type:String
  },
  password:{
    type:String
  },
  address:{
    type:String
  },
  phone:{
    type:String
  },
  email:{
    type:String
  },
  age:{
    type:String
  },
  sex:{
    type:String
  },
  height:{
    type:String
  },
  weight:{
    type:String
  },
  chronic:{
    type:String
  },
  status:{
    type:String,
    default:"active"
  },
  drug:{
    type:String,
  },
  bp:{
    type:String,
  },
  sideEffect:{
    type:String,
  },
  remindBPTextMsg:{
    type:String,
  }

},{timestamps:true})
 

 

module.exports = mongoose.model("coupon",couponSchema);