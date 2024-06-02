// src/app/page.tsx
'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto p-4  dark-mode-bg">
      <h1 className="text-2xl font-bold mb-4">Welcome to MissionChain</h1>
      <div className="space-x-4">
        <Link href="/add-mission" className="text-blue-500 hover:underline dark-mode-link">
          Add a Mission
        </Link>
        <Link href="/missions" className="text-blue-500 hover:underline  dark-mode-link">
          View Missions
        </Link>
      </div>
    </div>
  );
}
