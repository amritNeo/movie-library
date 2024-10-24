const express = require('express')
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = 3000;

var cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
  res.send('Welcome to my server!');
});

app.use('/', function (req, res, next) {
  console.log("A new request received at " + Date.now());
  next();
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const mongoString = process.env.DATABASE_URL
console.log('mongoString', mongoString);
mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database Connected');
})



const router =  require('./routes')
app.use(express.json())
app.use("/api",router)

