import { NextRequest, NextResponse } from "next/server";
import { searchStations } from "@/lib/radio-browser";

export async function GET(request: NextRequest) {
  try {
    const query = request.nextUrl.searchParams.get("q") ?? "";

    const stations = await searchStations(query);

    const cleanedStations = stations
      .filter((station) => station.url_resolved || station.url)
      .map((station) => ({
        id: station.stationuuid,
        name: station.name.trim(),
        streamUrl: station.url_resolved || station.url,
        favicon: station.favicon,
        homepage: station.homepage,
        country: station.country,
        language: station.language,
        tags: station.tags,
      }));

    return NextResponse.json(cleanedStations);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Failed to fetch Kenyan stations.",
      },
      {
        status: 500,
      },
    );
  }
}