const { ethers, run, network } = require("hardhat")

async function main() {
    const SimpleStorageFactory =
        await ethers.getContractFactory("SimpleStorage")
    console.log("Deploying contract...")
    const simpleStorage = await SimpleStorageFactory.deploy()

    await simpleStorage.deployed() // Ensure the contract is deployed

    console.log("Contract deployed!")
    console.log(`Deployed contract to: ${simpleStorage.address}`)

    if (network.config.chainId == 11155111 && process.env.ETHERSCAN_API_KEY) {
        console.log("Waiting for 6 confirmations...")
        await simpleStorage.deployTransaction.wait(6)
        await verify(simpleStorage.address, [])
    }

    const currentValue = await simpleStorage.retrieve()
    console.log(`Current value is ${currentValue}`)

    const transactionResponse = await simpleStorage.store(7)
    await transactionResponse.wait(1)
    const updatedValue = await simpleStorage.retrieve()
    console.log(`Updated Value is: ${updatedValue}`)
}

async function main() {
    const [deployer] = await ethers.getSigners()
    console.log("Deploying contracts with the account:", deployer.address)

    const Contract = await ethers.getContractFactory("simpleStorage")
    const contract = await Contract.deploy()
    await contract.deployed()

    console.log("Contract deployed to:", contract.address)
    console.log("Waiting for 6 confirmations...")
    await contract.deployTransaction.wait(6)

    console.log("Verifying contract...")
    try {
        await hre.run("verify:verify", {
            address: contract.address,
            constructorArguments: [
                // constructor arguments
            ],
        })
        console.log("Contract verified successfully!")
    } catch (error) {
        console.error("Error verifying contract:", error)
    }

    // Example of interacting with the contract
    const currentValue = await contract.someGetterFunction() // Replace with actual getter function
    console.log("Current value is", currentValue.toString())

    const tx = await contract.someSetterFunction(7) // Replace with actual setter function
    await tx.wait()

    const updatedValue = await contract.someGetterFunction() // Replace with actual getter function
    console.log("Updated Value is:", updatedValue.toString())
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
