import { ethers } from "hardhat";

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
   
  const StoreFactory = await ethers.getContractFactory("StoreFactory");
  const storefactory = await StoreFactory.deploy();

  console.log("StoreFactory Contract Address is", storefactory.address);

  const CreateStore = await storefactory.createStore();
  await CreateStore.wait();

  const firstAddr = await storefactory._contractAddress(1);
  console.log("First Store Address is", firstAddr);

  ///Create a second store contract
  const CreateASecondStore = await storefactory.createStore();
  await CreateASecondStore.wait();

  const SecondAddr = await storefactory._contractAddress(2);
  console.log("Second Store Address is", SecondAddr);

  const AllStoreAddresses = await storefactory.getAllCreatedStoreAddress();
  console.log("All Created Addresses", AllStoreAddresses);


  //INTERACTION SCRIPTS
  //INteracting with the second contract
  const Interaction = await ethers.getContractAt("IStore", SecondAddr);

   const SetValue = await Interaction.setValue("Anything");
   await SetValue.wait();

   const GetValue = await Interaction.value();
   console.log("My Value is", GetValue);

  ///Interacting with the first contract
  const InteractFirst = await ethers.getContractAt("IStore", firstAddr);
  const SetFirstValue = await InteractFirst.setValue("My First Contract Interaction");
  await SetFirstValue.wait();

   const GetFisrtValue = await InteractFirst.value();
   console.log("My First Contract Value is", GetFisrtValue);



}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
