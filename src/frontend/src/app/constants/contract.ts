// src/frontend/src/app/constants/contract.ts
export const contractAddress = "0xf87cB09134b4e7926FAC638731A8723F4ea9C478";

export const abi = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_companyName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_missionCID",
        "type": "string"
      }
    ],
    "name": "setMission",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_owner",
        "type": "address"
      }
    ],
    "name": "getMission",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];
