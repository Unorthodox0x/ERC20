import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();
const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
const privateKey = fs.readFileSync(".secret").toString();

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {  
    polygon: {
      url: `https://polygon-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [privateKey]
    }
  }
};

export default config;
