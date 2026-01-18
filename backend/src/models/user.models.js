import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const User = new Schema({
  email: email,
  username: String,
  body: String,
  date: Date
});

//user name 