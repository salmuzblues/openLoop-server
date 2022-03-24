import mongoose from "mongoose";
import { User }  from '../interface/userIt';
var collectionName = 'user'; 
const Schema  = mongoose.Schema;

const userSchema = new Schema<User>({
  firstName :{
    type: String,
    required: true
  },
  lastName :{
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  notes: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    default: true
  }
});
module.exports = mongoose.model('User', userSchema, collectionName);

 