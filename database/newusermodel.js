//import mongoose from "mongoose";
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//blockchain schema
let NewUserSchema = new Schema({
    email:{
        required: true,
        type: Schema.Types.String
    },
    DoB:{
        required: true,
        type: Schema.Types.Date,
    },
    phone:{
        required: true,
        type: Schema.Types.Number,
    },
    gender:{
        required: true,
        type: Schema.Types.String
    },
    name:{
        required: true,
        type: Schema.Types.String
    },


})

module.exports = mongoose.model("NewUser", NewUserSchema);