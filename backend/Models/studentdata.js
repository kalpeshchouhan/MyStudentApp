const mongoose = require("mongoose");
const addressSchema = new mongoose.Schema({
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zip: {
    type: String,
    required: true,
  },
});

let studentschema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  rollno: {
    type: Number,
    require: true,
  },
  classes: {
    type: Number,
    require: true,
  },
  ragistrationno: {
    type: Number,
    require: true,
  },
  fathername: {
    type: String,
    require: true,
  },
  mothername: {
    type: String,
    require: true,
  },
  fatherphoneno: {
    type: Number,
    require: true,
  },
  motherphoneno: {
    type: Number,
    require: true,
  },
  address: {
    type: [addressSchema],
    require: true,
  },
});

module.exports = mongoose.model("class", studentschema);
