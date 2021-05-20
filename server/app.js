const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const cors = require('cors');
const mainRouter = require('./routers/router');

require('dotenv').config();


mongoose.connect(process.env.MONGO_KEY, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false })



  .then(info => {
    console.log('connected successfully to DB')
    // console.log(info)
  }).catch(e => {
    console.log('error while connecting to DB')
  console.log(e)
});

app.listen(3001, ()=>{
  console.log('Server is up and running...')
});

app.use(express.json());
app.use(cors({origin: '*'}));

app.use(['/'], mainRouter)

