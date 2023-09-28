import { ethers } from "hardhat";

async function main() {
  const faucetFactory = await ethers.getContractFactory("Faucet");
  const faucet = await faucetFactory.deploy("0x5C0Db8091c257f4416c256f0a1F5eDA1bAe11775");

  await faucet.waitForDeployment()

  console.log("Facuet contract deployed: ", faucet);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
