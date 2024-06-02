[![CI](https://github.com/knocks-public/2024-HackFS/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/knocks-public/2024-HackFS/actions/workflows/ci.yml)
![GitHub last commit (by committer)](https://img.shields.io/github/last-commit/knocks-public/2024-HackFS)
![GitHub top language](https://img.shields.io/github/languages/top/knocks-public/2024-HackFS)
![GitHub pull requests](https://img.shields.io/github/issues-pr/knocks-public/2024-HackFS)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/knocks-public/2024-HackFS)
![GitHub repo size](https://img.shields.io/github/repo-size/knocks-public/2024-HackFS)

# MissionChain

ETH Global Link: https://ethglobal.com/showcase/decentrabackup-bncu4

MissionChain is a decentralized application (dApp) that allows companies to store, share, and preserve their mission statements, values, and visions on the blockchain. By leveraging the power of Filecoin for storage and smart contracts for managing these important documents, MissionChain ensures that company mission statements are always accessible, secure, and verifiable.

## Use Cases

- **Transparency**: Publicly share your company's mission and values in an immutable, decentralized manner.
- **Corporate Governance**: Ensure all stakeholders have access to the core principles and vision of the company.
- **Historical Preservation**: Preserve the company's foundational statements for future generations and stakeholders.

## Features

- Decentralized storage with Filecoin
- Smart contract management on Ethereum
- User-friendly interface for uploading and accessing mission statements
- Enhanced privacy and security with encryption
- Immutable and verifiable records of corporate mission statements

## Technology Stack

- **Frontend**: Next.js for the user interface.
- **Blockchain**: Foundry for Ethereum smart contracts.

## How It's Made

MissionChain prioritizes privacy, security, and simplicity. The backend leverages the Filecoin network for decentralized storage, ensuring high durability and availability of data. The Filecoin Virtual Machine (FVM) manages automated tasks such as uploading and accessing mission statements, utilizing smart contracts for efficient and reliable data management.

### Backend:

- **Filecoin**: Provides decentralized storage for mission statements, ensuring high durability and availability.
- **Filecoin Virtual Machine (FVM)**: Manages automated tasks like scheduling backups and executing smart contracts for data management.
- **Encryption**: Uses AES-256 encryption for securing data before uploading it to the Filecoin network.

### Frontend:

- **React.js**: Used for building a responsive and interactive user interface.
- **Node.js**: Serves as the backend framework, handling API requests and integration with Filecoin.

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

# Getting Started

To run MissionChain locally, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/knocks-public/2024-HackFS.git
   ```

2. **Install Dependencies**:

   ```bash
   make install
   ```

## Environment Configuration

Set up the following environment variables:

## Future Prospects

MissionChain aims to revolutionize the preservation and sharing of corporate mission statements by:

1. **Automating Document Management**: Enhancing efficiency by streamlining the storage and retrieval process.
2. **Improving Corporate Transparency**: Significantly reducing costs and increasing transparency for stakeholders, thereby lowering the risk of misinformation or data tampering.

## Contribution

We welcome contributions. Please submit proposals via pull requests or issues.

## License

MissionChain is licensed under the [MIT License](LICENSE).

# The Knocks Team

- [Susumu Tomita](https://www.linkedin.com/in/susumutomita/) - Full Stack Developer
