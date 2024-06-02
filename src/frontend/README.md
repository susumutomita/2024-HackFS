# MissionChain Frontend

MissionChain is a decentralized application (dApp) that allows users to create, store, and view company missions on the blockchain.

## Getting Started

First, clone the repository and install the dependencies:

```bash
git clone https://github.com/your-repo/2024-HackFS.git
cd 2024-HackFS/src/frontend
npm install
```

Next, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Features

- **Add Mission**: Allows users to add new missions for their company.
- **View Missions**: Displays the list of missions added by all users.
- **Blockchain Integration**: Uses Ethereum and smart contracts to store and verify mission data.

## Technology Stack

- **Frontend**: Next.js, React

## Project Structure

- `app/page.tsx`: Home page of the application.
- `app/add-mission.tsx`: Page to add a new mission.
- `app/missions.tsx`: Page to view all missions.
- `constants/contract.ts`: Contains the contract address and ABI.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## License

This project is licensed under the MIT License.
