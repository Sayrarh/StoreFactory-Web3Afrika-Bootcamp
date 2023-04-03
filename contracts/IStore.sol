// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;

interface IStore{
    function value() external view returns(string memory);
    function setValue(string memory value) external;
}