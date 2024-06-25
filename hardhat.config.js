require("@nomiclabs/hardhat-ethers")
require("dotenv").config()
require("@nomiclabs/hardhat-waffle")
require("@nomicfoundation/hardhat-ignition")
require("@nomicfoundation/hardhat-verify")
require("./tasks/block-number")
require("hardhat-gas-reporter")

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL
const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        sepolia: {
            url: SEPOLIA_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 11155111,
        },
        localhost: {
            url: "http://127.0.0.1:8545/",
            // accounts: Thnaks Abdulquadri
            chainId: 31337,
        },
        gasReporter: {
            enabled: true,
            currency: "USD", // Optional: Set the currency to display gas prices
            gasPrice: 100, // Optional: Set the gas price in gwei (default: 100)
            url: process.env.ETHERSCAN_API_KEY, // Example: Set your Etherscan API URL
        },
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    solidity: "0.8.24",
}
