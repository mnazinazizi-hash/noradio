import { Station } from "@/types/station";

const BASE_URL = "https://de1.api.radio-browser.info/json";

export async function searchStations(
  query: string,
): Promise<Station[]> {
  const response = await fetch(
    `${BASE_URL}/stations/search?country=Kenya&name=${encodeURIComponent(query)}`,
    {
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch stations.");
  }

  const data = (await response.json()) as Station[];

  return data;
}