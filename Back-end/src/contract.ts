import Web3, {EventLog} from 'web3';
import * as contractABI from "./abi/Vault.json";

// L'adresse de votre nœud ou fournisseur RPC
const providerUrl = 'https://eth-sepolia.g.alchemy.com/v2/6vGzZCKCuSqSzw302dUwjICQQ4xtLGdz'; // Exemple avec Alchemy
const web3 = new Web3(new Web3.providers.HttpProvider(providerUrl));

// Adresse du contrat et ABI (interface du contrat)
const contractAddress = '0xYourContractAddress'; // Remplacez par l'adresse réelle de votre contrat

// Connexion au contrat
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Fonction pour écouter les événements
const listenForEvents = () => {
  // Gestion des événements
    contract.events
    .Deposit({
    fromBlock: 'latest',
    })
    .on('data', (event: EventLog) => {
    console.log('Event received:', event);
    console.log('User:', event.returnValues.user);
    console.log('Amount:', event.returnValues.amount);
    })
    .on('changed', (changed: EventLog) => {
    console.log('Changed event:', changed); // Enregistre les événements modifiés
    })
    .on('error', (error: Error) => {
    console.error('Error while listening for events:', error);
    });
};

export default listenForEvents;
