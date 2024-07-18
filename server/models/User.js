// server/models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  displayName: { type: String },
  photoUrl: { type: String },
  role: {type:String},
  rollNo: {type:String},
  firstName:{type:String},
  lastName:{type:String}
},{timestamps:true});

const User = mongoose.model('Users', userSchema);

module.exports = User;
