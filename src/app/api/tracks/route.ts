// src/app/api/tracks/route.ts
import { NextResponse } from 'next/server';

// This is our mock database for now.
const tracks = [
  {
    id: 1,
    title: "Dreamscape", // Corrected typo from "Dreanscape" in PDF
    artist: "Aria Smith",
    releaseDate: "2024-05-10", // Corrected typo from "2924" in PDF
    genre: "Pop",
    status: "Published",
  },
  {
    id: 2,
    title: "Midnight Beats",
    artist: "DJ Raven",
    releaseDate: "2024-06-22",
    genre: "Electronic",
    status: "Draft",
  },
  {
    id: 3,
    title: "Echoes of Tomorrow",
    artist: "Lian Grey",
    releaseDate: "2024-07-01", // Corrected typo from "2924" in PDF
    genre: "Rock",
    status: "Submitted",
  },
];

export async function GET() {
  // In a real app, you'd fetch this from a database.
  // Here, we're just returning our mock data.
  return NextResponse.json(tracks);
}