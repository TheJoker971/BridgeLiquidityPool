"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const web3_1 = __importDefault(require("web3"));
const contractABI = __importStar(require("../abi/Vault.json"));
// L'adresse de votre nœud ou fournisseur RPC
const providerUrl = 'https://eth-sepolia.g.alchemy.com/v2/6vGzZCKCuSqSzw302dUwjICQQ4xtLGdz'; // Exemple avec Alchemy
const web3 = new web3_1.default(new web3_1.default.providers.HttpProvider(providerUrl));
// Adresse du contrat et ABI (interface du contrat)
const contractAddress = '0xYourContractAddress'; // Remplacez par l'adresse réelle de votre contrat
// Connexion au contrat
const contract = new web3.eth.Contract(contractABI, contractAddress);
// Fonction pour écouter les événements
const listenForEvents = () => {
    contract.events.Deposit({
        fromBlock: 'latest' // Écoute à partir du dernier bloc
    })
        .on('data', (event) => {
        console.log('Event received:', event);
        console.log('User:', event.returnValues.user);
        console.log('Amount:', event.returnValues.amount);
    })
        .on('changed', (changed) => {
        console.log('Changed event:', changed); // Enregistre les événements modifiés
    })
        .on('error', (error) => {
        console.error('Error while listening for events:', error);
    });
};
exports.default = listenForEvents;
