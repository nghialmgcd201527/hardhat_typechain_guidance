import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  typechain: {
    outDir: "src/types",
    target: "ethers-v5",
    alwaysGenerateOverloads: false,
    externalArtifacts: [],
  },
};

export default config;
