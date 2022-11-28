// DEPENDENCIES //

const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();
//login
require("dotenv").config();
const session = require('express-session');





// CONFIGURATION //

let PORT = 3000;
if(process.env.PORT){
	PORT = process.env.PORT
}

app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(express.json());



app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,

  })
);




// CONTROLLERS //
const userController = require('./controllers/users_controller.js')
app.use(userController);

const sessionsController = require('./controllers/sessions_controller.js');
app.use(sessionsController);

const recordsController = require('./controllers/routes.js');
app.use(recordsController);
























app.listen(PORT, ()=>{
	console.log('the creature is listening...');
})

mongoose.connect('mongodb+srv://chetv17:EdE6khYsxNbt1lhD@records.pojunds.mongodb.net/?retryWrites=true&w=majority', ()=>{
	console.log('connected to mongo');
})
