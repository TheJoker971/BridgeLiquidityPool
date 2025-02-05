// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {JokerToken} from "../src/JokerToken.sol";

contract JokerTokenScript is Script {

    JokerToken public token;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();
        token = JokerToken(0xC554cb653Dd31ba84BdC250e6Ca5a0fA7dB97E46);
        vm.stopBroadcast();
    }
}
