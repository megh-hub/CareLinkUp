//import mongoose from "mongoose";
let mongoose = require('mongoose');
let BlockChainModel = require("./model");
mongoose.connect("mongodb://localhost:27017/blockChain", (err) => {
    if (err) return console.log("Cannot connect");
    console.log("DB Connected!");
    ConnectionCallBack();
});

let ConnectionCallBack = () => {};

module.exports.onConnect = (callback) => {
    ConnectionCallBack = callback;
}

