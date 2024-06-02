// src/frontend/src/app/constants/contract.ts
export const contractAddress = "0x61F2553332c313F797A54496085Ad6881B81D913";

export const abi = [
  // ABIの内容をここに追加します
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
  // その他のABIのエントリもここに追加します
];
