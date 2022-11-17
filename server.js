const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();
const recordsController = require('./controllers/routes.js');

let PORT = 3000;
if(process.env.PORT){
	PORT = process.env.PORT
}

app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(recordsController);























app.listen(PORT, ()=>{
	console.log('listening...');
})

mongoose.connect('[mongodb+srv://chetv17:<arseloaf6>@cluster0.cceqrju.mongodb.net/?retryWrites=true&w=majority]', ()=>{
	console.log('connected to mongo');
})
