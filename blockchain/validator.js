let hash = require('object-hash');

const TARGET_HASH = 10;

module.exports.validProof = (proof) => {
    let guessHash = hash(proof);
    console.log("hashing: ", guessHash);
    return guessHash == hash(TARGET_HASH);
}

module.exports.proofOfWork = () => {
    let proof = 0;
    while (true) {
        if (!module.exports.validProof(proof)) {
            proof++;
        } else {
            break;
        }
    }
    return hash(proof);
}