// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;
import "./Store.sol";

contract StoreFactory{
    //EVENTS
    event ContractCreated(Store indexed newStoreAddr, uint256 contractPosition);

    Store[] allStoreAddresses;

    uint256 contractIndex = 1;
    mapping(uint256 => address) public _contractAddress;

    function createStore() external returns(Store){
        Store newStoreAddr = new Store();

        _contractAddress[contractIndex] = address(newStoreAddr);

        allStoreAddresses.push(newStoreAddr);
        contractIndex++;

        emit ContractCreated(newStoreAddr, allStoreAddresses.length);
        return newStoreAddr;

    }

    function getAllCreatedStoreAddress() external view returns(Store[] memory){
        return allStoreAddresses;
    }

}