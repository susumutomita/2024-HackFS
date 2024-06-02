// src/app/page.tsx
'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto p-4  dark-mode-bg">
      <h1 className="text-2xl font-bold mb-4">Welcome to MissionChain</h1>
      <div className="space-x-4">
        <Link href="/add-mission" className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md dark-mode-button">
          Add a Mission
        </Link>
        <Link href="/missions" className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md dark-mode-button">
          View Missions
        </Link>
      </div>
    </div>
  );
}
