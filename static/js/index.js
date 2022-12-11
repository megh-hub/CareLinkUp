// $(document).ready(function () {
//   $("#nav").load("header.txt");
// });
let database = require("./../../database/indexdb");

database.onConnect(() => {
let BlockChain = require("./../../blockchain/blockChain");
const blockChain = new BlockChain();
let hash = require('object-hash');
let arr = {email: "r@email.com", password: "12345", DoB: "12/10/2001", name: "Rujul Srivastava",
gender: "F", phone: "1234567890", reports: "Reports"};

blockChain.addNewTransaction(arr.email, arr.password, arr.DoB, arr.name, arr.gender, arr.phone, arr.reports);
// let preHash = hash(arr);
blockChain.addNewBlock();
console.log("chain: ", blockChain.chain);
})
