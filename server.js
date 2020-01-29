const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established succesfully");
})

const racesRouter = require('./routes/races');
const usersRouter = require('./routes/users');

app.use('/races', racesRouter);
app.use('/users', usersRouter);

app.listen(port, () => { 
    console.log('We are live on ' + port); 
});




