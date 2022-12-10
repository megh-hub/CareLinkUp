let hash = require('object-hash');

class BlockChain {

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