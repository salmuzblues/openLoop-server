import express from 'express';
import mongoose from 'mongoose';
import { user } from './routes/user';
import { json } from 'body-parser';
const cors = require('cors');
const app = express()
app.use(json())
app.use(cors())
app.use(user)

mongoose.connect('mongodb://localhost:27017/loop', () => {
  console.log('connected to database');
})
app.listen(5000, () => {
  console.log('server is listening on port 5000');
})
