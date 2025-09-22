// src/app/api/tracks/[id]/route.ts
import { NextResponse } from 'next/server';
import { tracks } from '@/lib/data'; // <-- IMPORT from our new file

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    const trackId = parseInt(params.id, 10);

    // Find the track in the SHARED array
    const track = tracks.find(t => t.id === trackId);

    if (!track) {
        return NextResponse.json({ message: "Track not found" }, { status: 404 });
    }

    return NextResponse.json(track);
}