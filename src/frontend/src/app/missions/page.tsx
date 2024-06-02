'use client';
import { useEffect, useState } from 'react';
import { BrowserProvider, Contract } from 'ethers';
import { abi, contractAddress } from '../constants/contract';

// TypeScriptのための型定義
declare global {
  interface Window {
    ethereum: any;
  }
}

// Missionインターフェースを定義
interface Mission {
  companyName: string;
  mission: string;
}

export default function Missions() {
  const [missions, setMissions] = useState<Mission[]>([]); // 型を明示的に指定

  useEffect(() => {
    const fetchMissions = async () => {
      if (!window.ethereum) {
        alert('MetaMask is not installed!');
        return;
      }

      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new Contract(contractAddress, abi, signer);

      try {
        const missionCount = await contract.getMissionCount();
        const missionList: Mission[] = []; // 型を明示的に指定
        for (let i = 0; i < missionCount; i++) {
          const mission = await contract.missions(i);
          missionList.push({
            companyName: mission.companyName,
            mission: mission.mission,
          });
        }
        setMissions(missionList);
      } catch (error) {
        console.error(error);
        alert('Failed to fetch missions');
      }
    };

    fetchMissions();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Missions</h1>
      <ul className="space-y-4">
        {missions.map((mission, index) => (
          <li key={index} className="border p-4 rounded-md shadow-sm">
            <h2 className="text-xl font-bold">{mission.companyName}</h2>
            <p>{mission.mission}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
