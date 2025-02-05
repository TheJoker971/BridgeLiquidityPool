import express from 'express';
import listenForEvents from './contract';

// Créer l'application Express
const app = express();
const port = 3000;

// Écouter les événements du contrat
listenForEvents();

// Route par défaut pour vérifier que l'API fonctionne
app.get('/', (req, res) => {
  res.send('Blockchain Event Listener is running!');
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
