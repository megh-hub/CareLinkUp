import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:2701/blockChain", (err) => {
    if (err) return console.log("Cannot connect");
    console.log("DB Connected");
});

let ConnectionCallBack = () => {};