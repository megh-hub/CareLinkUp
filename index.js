let BlockChain = require("./blockchain/blockChain");
let blockChain = new BlockChain();
let hash = require('object-hash');
let PROOF = 1560;

let validProof = (proof) => {
  let guessHash = hash(proof);
  console.log("hash: ", guessHash);
  return guessHash == hash(PROOF);
}

let proofOfWork = () => {
  let proof = 0;
  while (true) {
    if (!validProof(proof)) {
      proof++;
    } else {
      break;
    }
  }
  return proof;
}

if (proofOfWork()==PROOF){
  blockChain.addNewTransaction("person1", "person2", 300);
  let prevHash = blockChain.lastBlock() ? blockChain.lastBlock().hash : null;
  blockChain.addNewBlock(prevHash);
}

console.log("chain: ", blockChain.chain);

$(document).ready(function () {
    $("#nav").load("header.txt");
  });

