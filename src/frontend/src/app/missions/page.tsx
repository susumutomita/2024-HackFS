'use client';
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { abi, contractAddress } from '../constants/contract';

export default function Missions() {
  const [missions, setMissions] = useState([]);

  useEffect(() => {
    async function fetchMissions() {
      if (!window.ethereum) {
        alert('MetaMask is not installed!');
        return;
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(contractAddress, abi, provider);

      try {
        const missionCount = await contract.getMissionCount();
        const missions = [];
        for (let i = 0; i < missionCount; i++) {
          const mission = await contract.getMissionByIndex(i);
          missions.push(mission);
        }
        setMissions(missions);
      } catch (error) {
        console.error(error);
        alert('Failed to fetch missions');
      }
    }

    fetchMissions();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All Missions</h1>
      <ul className="space-y-4">
        {missions.map((mission, index) => (
          <li key={index} className="p-4 border border-gray-300 rounded-md shadow-sm">
            <h2 className="text-xl font-bold">{mission.companyName}</h2>
            <p>{mission.mission}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
