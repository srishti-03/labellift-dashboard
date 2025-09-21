// src/app/api/tracks/route.ts
import { NextResponse } from 'next/server';

// IMPORTANT: We declare the array outside the handlers so it can be modified.
// This acts as our in-memory "database".
let tracks = [
  { id: 1, title: "Dreamscape", artist: "Aria Smith", releaseDate: "2024-05-10", genre: "Pop", status: "Published" },
  { id: 2, title: "Midnight Beats", artist: "DJ Raven", releaseDate: "2024-06-22", genre: "Electronic", status: "Draft" },
  { id: 3, title: "Echoes of Tomorrow", artist: "Lian Grey", releaseDate: "2024-07-01", genre: "Rock", status: "Submitted" },
];

// This is our existing GET handler to fetch all tracks
export async function GET() {
  return NextResponse.json(tracks);
}

// This is our NEW POST handler to add a track
export async function POST(request: Request) {
  const newTrackData = await request.json();

  // Basic validation
  if (!newTrackData.title || !newTrackData.artist) {
    return NextResponse.json({ message: "Title and artist are required" }, { status: 400 });
  }

  // Create a new track object
  const newTrack = {
    id: tracks.length + 1, // Simple way to generate a new ID
    ...newTrackData,
    status: "Submitted", // Default status for new tracks
  };

  tracks.push(newTrack); // Add the new track to our "database"

  return NextResponse.json(newTrack, { status: 201 }); // 201 means "Created"
}