//import your mongoose,express
var express = require('express')
var http = require('http')
var mongoose = require('mongoose')
var cors=require('cors')
const bodyParser = require('body-parser')
var userSchema=require("./models/userSchema")
//calling express
var app = express()
//set up the middleware cors means cross origin reference site 
app.use(express.json())
app.use(cors({
    "origin":"*"
}))

app.use(bodyParser.json()) 

//connecting mongodb
mongoose.connect('mongodb://localhost:27017/login') 
var db=mongoose.connection;
db.once('open',()=>console.log("mongodb connection"))

//  const newdata=new userSchema({
//     email:"bharagfhewh@gmail.com",
//     password:"t4444",
// })

// newdata.save()
app.post("/",(req,res)=>{
    let data = req.body;
    userSchema.create(data)  
    res.status(201).send({message:"yes"})
    .then((document) => res.send({ data: document, message: "Endpoint created"}))
    .catch((err) => res.send({ message: "Error"}))
})

//getting a response
app.get("/",(req,res)=>{
    res.json({message:"hello mame"})
})
//creating port to run in localhost
app.listen(3000,()=>console.log("server connected"));                                                                                                                                                                        

