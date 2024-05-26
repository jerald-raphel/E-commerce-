const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    id:{
      type: Number,
      required:true
    },
    name:{
      type:String,
      required:true
    },
    new_price:{
      type:Number,
      required:true
    },
    old_price:{
      type:Number,
      required:true
    },
    category:{
      type:String,
      required:true
    },
    image:{
      type:String,
      required:true
    }
  });
  
  module.exports = mongoose.model("ProductSchema",ProductSchema);
  