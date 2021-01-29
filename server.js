'use strict';

require('dotenv').config();

// Library requirements, don't forget to install them all in your terminal as you go.
// Remeber, this is going to change as we go. Error can not find module means install the damn thing

const express = require('express');
const app = express();
const cors = require('cors');


// Process env declarations

const PORT = process.env.PORT;



//Middleware

app.use(cors())


// Routes

app.get('/', homeRoute);


// Functions
function homeRoute(request, response) {
  response.status(200).send('One take is all I need.');
}


// Errors


// Connections

app.listen(PORT, () => {
  console.log(`Eyes wide open on ${PORT}`)
});

