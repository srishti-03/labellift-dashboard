// src/app/api/tracks/route.ts
import { NextResponse } from 'next/server';
import { tracks } from '@/lib/data'; // <-- IMPORT from our new file

export async function GET() {
  return NextResponse.json(tracks);
}

export async function POST(request: Request) {
  const newTrackData = await request.json();

  if (!newTrackData.title || !newTrackData.artist) {
    return NextResponse.json({ message: "Title and artist are required" }, { status: 400 });
  }

  const newTrack = {
    id: tracks.length + 1,
    ...newTrackData,
    status: "Submitted",
  };

  tracks.push(newTrack); // This now modifies the SHARED list

  return NextResponse.json(newTrack, { status: 201 });
}