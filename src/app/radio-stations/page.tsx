import RadioSearch from "@/components/radio-stations/RadioSearch";
import DiscoverHero from "@/components/radio-stations/DiscoverHero";
import StationGrid from "@/components/radio-stations/StationGrid";
import { kenyanStations } from "@/lib/kenyanStations";

export default function RadioStationsPage() {
  return (
    <main className="max-w-7xl mx-auto px-gutter py-xl space-y-10">
      <DiscoverHero />

      <RadioSearch />

      <StationGrid stations={kenyanStations} />
    </main>
  );
}