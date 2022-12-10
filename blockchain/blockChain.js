// let hash = require('object-hash');
import hash from 'object-hash';
import { BlockChain } from "file:///D:/Projects/Hackathons/TechEden/CareLinkUp/CareLinkUp/blockchain/validator.js";

let TARGET_HASH = 15;

export class BlockChain {

    //constructor
    constructor() {
        this.chain = [];
        this.current_transaction = [];
    }

    addNewBlock(prevHash){
        let block = {
            index: this.chain.length+1,
            timestamp: Date.now(),
            transactions: this.current_transaction,
            hash: null,
            prevHash: prevHash

        };

        if (validator.proofOfWork()==TARGET_HASH){

            //add it to the instance
            //save to db
            //console success
            blockChain.addNewTransaction("person1", "person2", 300);
            let prevHash = blockChain.lastBlock() ? blockChain.lastBlock().hash : null;
            blockChain.addNewBlock(prevHash);
          }

        //put hash
        this.hash=hash(block);
        //adding to the chain
        this.chain.push(block);
        this.current_transaction = [];
        return block;
    }

    addNewTransaction(sender, recipient, amount) {
        this.current_transaction.push({sender, recipient, amount});
    }

    lastBlock(){
        return this.chain.slice(-1);
    }

    isEmpty(){
        return this.chain.length == 0;
    }
}
// module.exports = BlockChain;

