export const contractAddress = "0x7210C0dB851312612A089d48F28DaA5E03A6EB10";

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
        "name": "_missionCid",
        "type": "string"
      }
    ],
    "name": "setMission",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getMissionCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "getMissionByIndex",
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
