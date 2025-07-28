//SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

contract theSafe {

// I needa adata structure to record the addresses and their deposited amounts

mapping(address => uint) public deposit_details;

// I need a function to handle the deposit

// user-defined payable function -

// fallback function - just like the receive function but executes only when theres no receive function

// receive function - a function called when we send tokens to a contract without calling a function

// I need a function to handle the withdraw

// global variables - default solidity variables
    // msg.sender - stores the address that is calling a function on a contract
    // msg.value - stores amout of tokens in the native currency of a blockchain that is being send to the contract
// state variables - defined within the contract directly
// local variable - defined with =in functions

function deposit() public payable {
    deposit_details[msg.sender] = msg.value;
}

function withdraw(uint _amount) external {
        require( _amount <= deposit_details[msg.sender], "You dont have this balance");

        payable(msg.sender).transfer(_amount);

        
}

}
