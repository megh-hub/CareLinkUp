import mongoose from "mongoose";
let BlockChainModel = require("./model");
mongoose.connect("mongodb://localhost:2701/blockChain", (err) => {
    if (err) return console.log("Cannot connect");
    console.log("DB Connected");
});

let ConnectionCallBack = () => {};

module.exports.onConnect = (callback) => {
    ConnectionCallBack = callback;
}