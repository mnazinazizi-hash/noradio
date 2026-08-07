import { NextResponse } from "next/server";
import { favoriteStations } from "@/lib/stations";

export function GET() {
  return NextResponse.json({ stations: favoriteStations });
}
