module.exports.validProof = () => {
    let guessHash = hash(proof);
    console.log("hashing: ", guessHash);
    return guessHash == hash(PROOF);
}

module.exports.proofOfWork = () => {
    let proof = 0;
  while (true) {
    if (!validProof(proof)) {
      proof++;
    } else {
      break;
    }
  }
  return hash(proof);
}