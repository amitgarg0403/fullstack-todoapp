const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const todoRoute = require('./routes/todoRoutes');

const app = express();


//middlewares
app.use(express.json()); //bodyparser
app.use(express.urlencoded({extended:true})); //bodyparser
app.use(cors({})); // CORs


// MongoDB connection
const URL = "mongodb+srv://admin:admin123@cluster0.3utvref.mongodb.net/todoDB";
mongoose.connect(URL)
.then(()=>console.log("MongoDB is Connected"))
.catch(err=>console.log(err))


//Routes
app.use(todoRoute);


app.listen("5000", ()=>{
    console.log('Server is running on port 5000');
})