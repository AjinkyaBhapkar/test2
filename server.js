const express = require ('express')
const app = express()
const cors = require("cors")
const mongoose = require('mongoose')
const dataRouter = require('./routes/data')
const companyRouter = require('./routes/company')


app.use(cors())
app.use (express.json())

const uri ='mongodb+srv://dbUsername:dbPassword@cluster0.sw7gjlk.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(uri,{useNewUrlParser:true});

const connection=mongoose.connection;

connection.once('open',()=>{
    console.log("MongoDB database connected!!!");
})

app.use('/data',dataRouter)
app.use('/company',companyRouter)

app.listen(5000, ()=> console.log( "Server running!"))
