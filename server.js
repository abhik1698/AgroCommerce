const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// const items = require('./routes/api/items');

const app = express();

//BodyParser Middleware
app.use(bodyParser.json());

//Connect to Mongo
// mongoose
//     .connect("mongodb://127.0.0.1:27017/ecomus", { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB Connected'))
//     .catch(err => console.log(err));

// app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen( port, () => console.log( 'Server started on port ' + port ) );