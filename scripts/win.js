// add the game address here and update the contract name if necessary
const gameAddr = "0x610178da211fef7d417bc0e6fed39f05609ad788";
const contractName = "Game5";

async function main() {
  // attach to the game
  const game = await hre.ethers.getContractAt(contractName, gameAddr);

  // do whatever you need to do to win the game here:
  //Game2
  /*await game.setX(25);
  await game.setY(25);
  */
  //game4
  /*const tx = await game.win(56);*/
  //game55
  await game.giveMeAllowance(10001);
  await game.mint(10001);
  const tx = await game.win();

  // did you win? Check the transaction receipt!
  // if you did, it will be in both the logs and events array

  const receipt = await tx.wait();
  console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
