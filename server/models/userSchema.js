const mongoose = require('mongoose')

//to define structure using this schema this must be the data format which i snd
const userSchema=mongoose.Schema({
    email:{type: String , required:true},
    password:{type: String , required:true},
})
//to define collection overhere it is bs collection for set db 
const userModel = mongoose.model("users",userSchema)

module.exports = userModel;
