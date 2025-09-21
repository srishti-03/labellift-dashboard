
// src/app/dashboard/page.tsx
"use client"; // This directive tells Next.js to render this page on the client-side

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// We'll define a type for our track object for TypeScript
type Track = {
  id: number;
  title: string;
  artist: string;
  releaseDate: string;
  status: string;
};

export default function DashboardPage() {
  // State to store the list of tracks
  const router = useRouter();
  const [tracks, setTracks] = useState<Track[]>([]);
  // State to handle loading state
  const [isLoading, setIsLoading] = useState(true);

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    if (!loggedIn) {
      router.push('/'); // If not logged in, redirect to login page
      return; // Stop running the rest of the effect
    }
    const fetchTracks = async () => {
      try {
        const response = await fetch('/api/tracks');
        const data = await response.json();
        setTracks(data); // Update state with fetched tracks
      } catch (error) {
        console.error("Failed to fetch tracks:", error);
      } finally {
        setIsLoading(false); // Set loading to false after fetch is complete
      }
    };

    fetchTracks();
  }, [router]); // The empty array [] means this effect runs only once after the initial render

  if (isLoading) {
    return <div className="text-center p-10">Loading tracks...</div>;
  }

  return (
    <main className="container mx-auto p-4 sm:p-6 md:p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold">Music Dashboard</h1>
        <Link href="/upload" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Upload Track
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Title</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Artist</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Release Date</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
  {tracks.map((track) => (
    <tr key={track.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
      
      {/* CORRECTED TITLE CELL */}
      <td className="py-4 px-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
        <Link href={`/track/${track.id}`} className="hover:underline">
          {track.title}
        </Link>
      </td>

      <td className="py-4 px-4 whitespace-nowrap text-gray-600 dark:text-gray-300">{track.artist}</td>
      <td className="py-4 px-4 whitespace-nowrap text-gray-600 dark:text-gray-300">{track.releaseDate}</td>
      <td className="py-4 px-4 whitespace-nowrap">
        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
          ${track.status === 'Published' ? 'bg-green-100 text-green-800' : ''}
          ${track.status === 'Draft' ? 'bg-yellow-100 text-yellow-800' : ''}
          ${track.status === 'Submitted' ? 'bg-blue-100 text-blue-800' : ''}`}>
          {track.status}
        </span>
      </td>
    </tr>
  ))}
</tbody>
        </table>
      </div>
    </main>
  );
}