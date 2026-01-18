import mongoose from 'mongoose'
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
  email: email,
  username: String,
  body: String,
  date: Date
});