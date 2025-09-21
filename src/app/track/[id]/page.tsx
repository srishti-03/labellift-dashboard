// src/app/track/[id]/page.tsx
"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation'; // Hook to access URL parameters

// Define the Track type again for consistency
type Track = {
  id: number;
  title: string;
  artist: string;
  releaseDate: string;
  genre: string;
  status: string;
};

export default function TrackDetailPage() {
  const params = useParams(); // Get the dynamic part of the URL
  const id = params.id;

  const [track, setTrack] = useState<Track | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Only fetch if the id is available
    if (id) {
      const fetchTrack = async () => {
        try {
          const response = await fetch(`/api/tracks/${id}`);
          if (!response.ok) {
            // If response is not 200 OK, throw an error
            throw new Error('Track not found');
          }
          const data = await response.json();
          setTrack(data);
        } catch (err) {
          setError((err as Error).message);
        } finally {
          setIsLoading(false);
        }
      };

      fetchTrack();
    }
  }, [id]); // Effect runs whenever the id changes

  if (isLoading) return <div className="text-center p-10">Loading track details...</div>;
  if (error) return <div className="text-center p-10 text-red-500">Error: {error}</div>;
  if (!track) return <div className="text-center p-10">No track details available.</div>;

  return (
    <main className="container mx-auto p-8">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">{track.title}</h1>
        <h2 className="text-xl text-gray-600 dark:text-gray-300 mb-4">{track.artist}</h2>
        <div className="border-t border-gray-200 dark:border-gray-700 my-4"></div>
        <div className="grid grid-cols-2 gap-4 text-sm">
            <p className="text-gray-500 dark:text-gray-400">Release Date:</p>
            <p className="text-gray-900 dark:text-white">{track.releaseDate}</p>

            <p className="text-gray-500 dark:text-gray-400">Genre:</p>
            <p className="text-gray-900 dark:text-white">{track.genre}</p>

            <p className="text-gray-500 dark:text-gray-400">Status:</p>
            <p>
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${track.status === 'Published' ? 'bg-green-100 text-green-800' : ''}
                    ${track.status === 'Draft' ? 'bg-yellow-100 text-yellow-800' : ''}
                    ${track.status === 'Submitted' ? 'bg-blue-100 text-blue-800' : ''}`}>
                    {track.status}
                </span>
            </p>
        </div>
      </div>
    </main>
  );
}