// $(document).ready(function () {
//   $("#nav").load("header.txt");
// });

import { BlockChain } from "file:///D:/Projects/Hackathons/TechEden/CareLinkUp/CareLinkUp/blockchain/blockChain.js";
const blockChain = new BlockChain();
import hash from 'object-hash';


// let validProof = (proof) => {
//   let guessHash = hash(proof);
//   console.log("hash: ", guessHash);
//   return guessHash == hash(PROOF);
// }

// let proofOfWork = () => {
//   let proof = 0;
//   while (true) {
//     if (!validProof(proof)) {
//       proof++;
//     } else {
//       break;
//     }
//   }
//   return proof;
// }

// if (proofOfWork()==PROOF){
//   blockChain.addNewTransaction("person1", "person2", 300);
//   let prevHash = blockChain.lastBlock() ? blockChain.lastBlock().hash : null;
//   blockChain.addNewBlock(prevHash);
// }

console.log("chain: ", blockChain.chain);



