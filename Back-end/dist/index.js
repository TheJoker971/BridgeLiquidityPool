"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contract_1 = __importDefault(require("./contract"));
// Créer l'application Express
const app = (0, express_1.default)();
const port = 3000;
// Écouter les événements du contrat
(0, contract_1.default)();
// Route par défaut pour vérifier que l'API fonctionne
app.get('/', (req, res) => {
    res.send('Blockchain Event Listener is running!');
});
// Démarrer le serveur
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
