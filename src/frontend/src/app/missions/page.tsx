// src/app/missions/page.tsx
'use client';
import { useState, useEffect } from 'react';
import { BrowserProvider, Contract } from 'ethers';
import { abi, contractAddress } from '../constants/contract';

export default function ViewMissions() {
  const [missions, setMissions] = useState<{ companyName: string, missionCid: string }[]>([]);

  useEffect(() => {
    const fetchMissions = async () => {
      if (!window.ethereum) {
        alert('MetaMask is not installed!');
        return;
      }

      try {
        const provider = new BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = new Contract(contractAddress, abi, signer);
        const missionList = [];
        const count = await contract.getMissionCount();
        for (let i = 0; i < count; i++) {
          const mission = await contract.getMissionByIndex(i);
          const formattedMission = {
            companyName: mission[0],
            missionCid: mission[1],
          };
          console.log('mission', formattedMission);
          missionList.push(formattedMission);
        }

        setMissions(missionList);
      } catch (error) {
        console.error('Error fetching missions:', error);
        alert('Failed to fetch missions');
      }
    };

    fetchMissions();
  }, []);

  return (
    <div className="container mx-auto p-4 dark-mode-bg">
      <h1 className="text-2xl font-bold mb-4">Missions</h1>
      <ul>
        {missions.map((mission, index) => (
          <li key={index} className="mb-2">
            <strong>Company Name:</strong> {mission.companyName}<br />
            <strong>Mission CID:</strong> {mission.missionCid}
          </li>
        ))}
      </ul>
      <button onClick={() => window.history.back()} className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-md dark-mode-button">
        Back
      </button>
    </div>
  );
}
