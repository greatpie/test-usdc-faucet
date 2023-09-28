import { ethers } from "hardhat";


async function main() {
  const tokenFactory = await ethers.getContractFactory("TestUsdcToken");
  const testUsdcToken = await tokenFactory.deploy(100000000, 50);
  await testUsdcToken.waitForDeployment()
  

  console.log("Test USDC Token deployed: ", testUsdcToken);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
