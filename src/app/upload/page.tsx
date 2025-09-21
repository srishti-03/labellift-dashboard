// src/app/upload/page.tsx
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function UploadPage() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [genre, setGenre] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/tracks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, artist, releaseDate, genre }),
      });

      if (!response.ok) {
        throw new Error('Failed to upload track. Please try again.');
      }

      // On successful submission, redirect to the dashboard
      router.push('/dashboard');

    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Upload New Track</h1>
      <form onSubmit={handleSubmit} className="max-w-lg bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        {/* Track Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 dark:text-gray-200 font-bold mb-2">Track Title</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        {/* Artist Name */}
        <div className="mb-4">
          <label htmlFor="artist" className="block text-gray-700 dark:text-gray-200 font-bold mb-2">Artist Name</label>
          <input type="text" id="artist" value={artist} onChange={(e) => setArtist(e.target.value)} required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        {/* Release Date */}
        <div className="mb-4">
          <label htmlFor="releaseDate" className="block text-gray-700 dark:text-gray-200 font-bold mb-2">Release Date</label>
          <input type="date" id="releaseDate" value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        {/* Genre */}
        <div className="mb-6">
          <label htmlFor="genre" className="block text-gray-700 dark:text-gray-200 font-bold mb-2">Genre</label>
          <input type="text" id="genre" value={genre} onChange={(e) => setGenre(e.target.value)} required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>

        {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}

        <div className="flex items-center justify-between">
          <button type="submit" disabled={isSubmitting}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-blue-300">
            {isSubmitting ? 'Submitting...' : 'Submit Track'}
          </button>
        </div>
      </form>
    </main>
  );
}