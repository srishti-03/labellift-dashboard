// src/app/api/tracks/[id]/route.ts
import { NextResponse } from 'next/server';

// We need our mock data again
const tracks = [
    { id: 1, title: "Dreamscape", artist: "Aria Smith", releaseDate: "2024-05-10", genre: "Pop", status: "Published" },
    { id: 2, title: "Midnight Beats", artist: "DJ Raven", releaseDate: "2024-06-22", genre: "Electronic", status: "Draft" },
    { id: 3, title: "Echoes of Tomorrow", artist: "Lian Grey", releaseDate: "2024-07-01", genre: "Rock", status: "Submitted" },
];

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    // Convert the id from the URL (which is a string) to a number
    const trackId = parseInt(params.id, 10);

    // Find the track in our array
    const track = tracks.find(t => t.id === trackId);

    // If no track is found, return a 404 error
    if (!track) {
        return NextResponse.json({ message: "Track not found" }, { status: 404 });
    }

    // If the track is found, return its data
    return NextResponse.json(track);
}