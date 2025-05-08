const hre = require("hardhat");
async function main() {
    
    
    // Contract Factory sahi tarike se load karein
    const Chai = await hre.ethers.getContractFactory("chai");
    const contract = await Chai.deploy(); 
  
    await contract.deployed(); // Fix: Hardhat v3 ke liye updated method
    
    console.log("Contract deployed at:", contract.address);
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });