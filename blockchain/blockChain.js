// let hash = require('object-hash');
//import hash from 'object-hash';
let hash = require('object-hash');

let TARGET_HASH = hash(10);

let validator = require("./validator");
let mongoose = require('mongoose');
let blockChainModel = mongoose.model("Blockchain");

class BlockChain {

    //constructor
    constructor() {
        this.chain = [];
        this.current_transaction = [];
    }

    getLastBlock(callback) {
        //get last block
        return blockChainModel.findOne({}, null, { sort : { _id: -1}, limit: 1}, (err, block) => {
            if (err) return console.error("Cannot find last block");
            return callback(block);
        });
    }

    addNewBlock(prevHash){
        let block = {
            index: this.chain.length+1,
            timestamp: Date.now(),
            transactions: this.current_transaction,
            hash: null,
            prevHash: prevHash,
        };

        if (validator.proofOfWork()==TARGET_HASH){
            block.hash = hash(block);
            this.getLastBlock((lastBlock) => {
                if (lastBlock) {
                    block.prevHash = lastBlock.hash;
                }
                let newBlock = new blockChainModel(block);           
                newBlock.save((err) => {
                    if (err) return console.log("Cannot save the block to DB", err.message);
                    console.log("Saved the block to DB");
                });
            this.chain.push(block);
            console.log(44);
            console.log("AS REQUESTED");
            console.log(block);
            this.current_transaction = [];
            return block;
            });            
    }
    }

    addNewTransaction(email, password, DoB, name, gender, phone, reports) {
        let temp = [email, password, DoB, name, gender, phone, reports];
        this.current_transaction.push(temp);
        console.log(45);
        console.log(email, password, DoB, name, gender, phone, reports);
        console.log(this.current_transaction.email);
    }

    lastBlock(){
        return this.chain.slice(-1);
    }

    isEmpty(){
        return this.chain.length == 0;
    }
}

module.exports = BlockChain;

