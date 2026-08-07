import StationCard from "./StationCard";

type StationGridProps = {
  stations: any[];
};

export default function StationGrid({
  stations,
}: StationGridProps) {
  return (
    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-2
        gap-4
        w-full
      "
    >
      {stations.map((station) => (
        <StationCard
          key={station.id}
          station={station}
        />
      ))}
    </div>
  );
}