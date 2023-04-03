import { ethers } from "hardhat";

async function main() {
   const Interaction = await ethers.getContractAt("IStore", "0xB7A5bd0345EF1Cc5E66bf61BdeC17D2461fBd968");

   const SetValue = await Interaction.setValue("Anything");
   await SetValue.wait();

   const GetValue = await Interaction.value();
   console.log("My Value is", GetValue);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
