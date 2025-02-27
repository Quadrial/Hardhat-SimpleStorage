// tasks.js
// const { task } = require("hardhat/config")

// task("block-number", "Prints the current block number").setAction(
//     async (taskArgs, hre) => {
//         const blockNumber = await hre.ethers.provider.getBlockNumber();
//         console.log(`Current block number: ${blockNumber}`)
//     },
// )

const { task } = require("hardhat/config")

task(
    "block-number",
    "Prints the current block number",
    async (taskArgs, hre) => {
        const blockNumber = await hre.ethers.provider.getBlockNumber()
        console.log("Current block number:", blockNumber)
    },
)

module.exports = {}
