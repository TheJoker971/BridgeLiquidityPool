// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

import {JokerToken} from "./JokerToken.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract TokenVault is Ownable{

    // Variables Globales
    JokerToken public token;
    mapping(address => uint256) public balances;
    mapping(address => uint256) public starts;

    // Evénements
    event Deposit(address indexed user, uint256 amount);
    event Withdraw(address indexed user, uint256 amount);

    // Errors
    error INSUFFICIENT_AMOUNT(uint256);
    error USER_ALREADY_DEPOSIT(address);
    error INSUFFICIENT_BALANCE();


    constructor(address _token) Ownable(msg.sender) {
        token = JokerToken(_token);
    }

    // Fonction de dépôt
    function deposit(address user, uint256 amount) external {
        // Assurez-vous que le montant est non nul
        require(amount > 0, INSUFFICIENT_AMOUNT(amount));
        require(balances[user] == 0 && starts[user] == 0,USER_ALREADY_DEPOSIT(user));

        // Mise à jour du solde de l'utilisateur
        balances[user] += amount;
        starts[user] += block.timestamp;
        // Emission de l'événement de dépôt
        emit Deposit(user, amount);
    }

    // Fonction de retrait
    function withdraw(address user, uint256 amount) external {
        // Vérifier que l'utilisateur a assez de fonds pour le retrait
        require(balances[user] >= amount,INSUFFICIENT_BALANCE());

        // Le retrait peut être sécurisé avec un "proof" (preuve) pour valider l'opération, 
        // cette logique peut être étendue selon vos besoins (par exemple, pour les "Merkle proofs").
        // Ici, nous ignorons l'implémentation réelle de la preuve pour simplifier.

        // Mise à jour du solde de l'utilisateur
        balances[user] -= amount;

        // Emission de l'événement de retrait
        emit Withdraw(user, amount);

        // Si le contrat a des fonds en ETH ou autres tokens, les envoyer à l'utilisateur
        // Si c'est un contrat ERC20, vous pouvez appeler la fonction `transfer` sur le token.
        token.transfer(user,amount);
    }

    // Fonction pour obtenir le solde en ETH du contrat
    function getContractBalance() external view returns (uint256) {
        return address(this).balance;
    }

    // Fonction permettant de recevoir des ethers dans le contrat
    receive() external payable {}
}

