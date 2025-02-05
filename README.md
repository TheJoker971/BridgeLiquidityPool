# BridgeLiquidityPool

This project implements a **bridge liquidity pool** between Ethereum (ETH) and Tezos. It aims to facilitate cross-chain liquidity transfers for users, enabling them to interact with both blockchains seamlessly.

## Features

- **Cross-chain liquidity pool** between Ethereum and Tezos.
- Ability to deposit and withdraw tokens from the pool.
- Event handling for deposits and withdrawals.
- Contract ownership functionalities with `Ownable` pattern.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/TheJoker971/BridgeLiquidityPool.git

2. Install Node.js dependencies
Navigate into the project directory:

bash
Copier
cd BridgeLiquidityPool
Then install the required dependencies using npm:

bash
Copier
npm install
This will install all the necessary packages, including:

web3: For interacting with the Ethereum blockchain.
ethers: (Optional) For additional Ethereum functionality.
Any other packages listed in your package.json file.
3. Configure the environment
If your project uses environment variables (like private keys or RPC URLs), create a .env file in the root directory of the project. Here's an example:

bash
Copier
# .env
ETH_RPC_URL=https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID
PRIVATE_KEY=your_private_key
Make sure to replace the YOUR_INFURA_PROJECT_ID and your_private_key with your actual values. You may also use environment variables to store the Tezos-related settings if necessary.

4. Installing Tezos-related dependencies
If you also need to interact with the Tezos blockchain, you may need to install Tezos-related tools and dependencies. For Tezos interaction, you can use libraries such as taquito:

bash
Copier
npm install @taquito/core
5. Run the project
After setting everything up, you can start your project by running the following command:

bash
Copier
node dist/index.js
This assumes you've compiled your TypeScript into JavaScript using npx tsc.

Alternatively, if you are working directly with TypeScript, you can run it directly using ts-node:

bash
Copier
npx ts-node src/index.ts

### Explications :
- **Usage** : Montre comment interagir avec le contrat (exemple de dépôt et retrait).
- **Installation** : Étapes pour cloner le repo et installer les dépendances.
- **License** : Ajoute la mention de licence AGPL-3.0 comme spécifié sur votre repo.

Si vous avez des modifications spécifiques ou des ajouts, n'hésitez pas à me le dire.




