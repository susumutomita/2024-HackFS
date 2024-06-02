'use client';
import { useState } from 'react';
import { ethereum } from 'ethers';
import { abi, contractAddress } from '../constants/contract';

export default function AddMission() {
  const [companyName, setCompanyName] = useState('');
  const [mission, setMission] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!window.ethereum) {
      alert('MetaMask is not installed!');
      return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);

    try {
      await contract.setMission(companyName, mission);
      alert('Mission added successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to add mission');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add a Mission</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Company Name:</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Mission:</label>
          <textarea
            value={mission}
            onChange={(e) => setMission(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm w-full"
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
}
