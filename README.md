[![CI](https://github.com/knocks-public/2024-HackFS/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/knocks-public/2024-HackFS/actions/workflows/ci.yml)
![GitHub last commit (by committer)](https://img.shields.io/github/last-commit/knocks-public/2024-HackFS)
![GitHub top language](https://img.shields.io/github/languages/top/knocks-public/2024-HackFS)
![GitHub pull requests](https://img.shields.io/github/issues-pr/knocks-public/2024-HackFS)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/knocks-public/2024-HackFS)
![GitHub repo size](https://img.shields.io/github/repo-size/knocks-public/2024-HackFS)

# DecentraCard

ETH Global Link: https://ethglobal.com/showcase/decentrabackup-bncu4

DecentraCard is a decentralized application (dApp) that allows users to create, store, and share their business cards on the blockchain. By leveraging the power of Filecoin for storage and smart contracts for managing user profiles, DecentraCard ensures that your business card is always accessible, secure, and verifiable.

## Use Cases

- **Networking Events**: Easily share and receive business cards without physical exchange.
- **Job Applications**: Provide verifiable, up-to-date professional information.
- **Freelancers and Consultants**: Showcase your skills and portfolio securely.

## Features

- Decentralized storage with Filecoin
- Smart contract management on Ethereum
- User-friendly interface for creating and sharing cards
- Enhanced privacy and security with encryption

## Technology Stack

- **Frontend**: React.js for the user interface.
- **Backend**: Node.js for server-side logic.
- **Blockchain**: Filecoin for decentralized storage and Ethereum for smart contracts.


Certainly! Here is the continuation and completion of your README:

---

## How It's Made

DecentraCard prioritizes privacy, security, and simplicity. The backend leverages the Sindri API for zero-knowledge proofs, with Noir for crafting age verification logic, ensuring only necessary age information is verified. The frontend uses modern JavaScript frameworks, including React.js, for a smooth, user-friendly experience.

### Backend:

- **Filecoin**: Provides decentralized storage for user data, ensuring high durability and availability.
- **Filecoin Virtual Machine (FVM)**: Manages automated tasks like scheduling backups and executing smart contracts for data management.
- **Sindri API**: Implements zero-knowledge proofs for age verification and identity management.
- **Encryption**: Uses AES-256 encryption for securing data before uploading it to the Filecoin network.

### Frontend:

- **React.js**: Used for building a responsive and interactive user interface.
- **Node.js**: Serves as the backend framework, handling API requests and integration with Filecoin and Sindri APIs.

### Integration with Partner Technologies:

- **Web3.storage**: Simplifies data upload and retrieval processes.
- **Ceramic Network**: Manages decentralized identities (DIDs) securely.
- **Chainlink Oracles**: Provides real-time data and external triggers for backup and notification processes.

### Hacky Solutions and Innovations:

- **Automated Data Recovery**: Designed a mechanism where FVM can automatically initiate data recovery processes if corruption or loss is detected.
- **Smart Contract-based Billing**: Created a billing system using smart contracts to handle payments for storage and retrieval services.
- **Compression Algorithms**: Applied advanced data compression techniques to reduce storage costs and improve speeds.
- **Decentralized Notification System**: Developed using IPFS and PubSub to ensure users receive alerts even if centralized services are unavailable.

# Images

## System Overview

## Screenshots

## Getting Started

To run DecentraCard locally, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/knocks-public/2024-HackFS.git
   ```

2. **Install Dependencies**:

   ```bash
   make install
   ```

3. **Deploy Circuit**:

   ```bash
   make deploy_circuit
   ```

4. **Build the Application**:
   Navigate to `packages/frontend`, then:

   ```bash
   npm run prebuild
   npm run ios
   ```

   Open Xcode with `2024-HackFS/packages/frontend/ios/frontend.xcodeproj`.

5. **Start the Application**:
   For development, initiate the Expo development server:

   ```bash
   cd packages/frontend
   npm run start:dev
   ```

## Environment Configuration

Set up the following environment variables:

### packages/frontend

Copy `.env_sample` to `.env` and adjust as necessary:

- `EXPO_PUBLIC_SINDRI_API_KEY`: Your Sindri API key.
- `EXPO_PUBLIC_SINDRI_API_URL`: The Sindri API URL.
- `EXPO_PUBLIC_CIRCUIT_ID`: Your circuit ID for zero-knowledge proofs.
- `LOCAL_IP_ADDR`: Your local IP address (for Expo in Docker+docker-compose setups).

## Future Prospects

DecentraCard aims to revolutionize digital identity verification by:

1. **Automating Age Verification in Bars**: Enhancing efficiency by streamlining the age verification process.
2. **Improving the eKYC Process**: Significantly reducing costs and waiting times for account openings, thereby lowering labor costs associated with manual verifications.

Such innovations are increasingly crucial as the need for robust digital identity management and privacy protection grows.

## Contribution

We welcome contributions. Please submit proposals via pull requests or issues.

## License

DecentraCard is licensed under the [MIT License](LICENSE).

# The Knocks Team

- [Susumu Tomita](https://www.linkedin.com/in/susumutomita/) - Full Stack Developer
