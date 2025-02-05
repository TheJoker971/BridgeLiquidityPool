// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {TokenVault} from "../src/Vault.sol";

contract TokenVaultScript is Script {

    TokenVault public vault;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();
        vault = TokenVault(payable(0x8197bFecb5bC4cb604e6c8746cee5D713520fBDD));
        vm.stopBroadcast();
    }
}
