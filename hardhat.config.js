
// require("@nomicfoundation/hardhat-toolbox");
// require('dotenv').config();

// /** @type import('hardhat/config').HardhatUserConfig */
// const SEPOLIA_URL= process.env.SEPOLIA_URL;
// const PRIVATE_KEY = process.env.PRIVATE_KEY;
// module.exports = {
//   solidity: "0.8.17",
//   network:{
//     sepolia: {
//       url: SEPOLIA_URL, // Alchemy ya Infura ka RPC URL
//       accounts:[PRIVATE_KEY], // MetaMask se apni private key yahan paste karein
//     },
//   },
 
// };
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/13DaY_yqI8Daq6dKW2S-gCEL8_elf5FD", 
      accounts: ["a7959e9b12634ef883e9d38df9cb3c59fb208d8e4456c60d5f9ab0db2b92a884"]
    }
  }
};
