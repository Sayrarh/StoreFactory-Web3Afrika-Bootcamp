// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import {IStore} from "./IStore.sol";

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract  Store{
    string public value;

    function setValue(string memory _value) external{
        value = _value;
    }
}
