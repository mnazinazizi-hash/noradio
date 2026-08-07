"use client";

import Image from "next/image";
import Link from "next/link";
import { useRadio } from "@/components/RadioProvider";

export default function FavoriteStations() {
  const { activeStation, playStation, stations, status } = useRadio();

  return (
    <section className="max-w-7xl mx-auto px-gutter mb-xl" id="stations">
      {/* Section Heading */}
      <div className="text-center mb-lg">
        <h2 className="font-headline-md text-primary mb-xs">
          Nosh's favorite Radio stations
        </h2>
        <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
      </div>

      {/* Radio Station Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
        {stations.map((station) => {
          const isActive = activeStation.id === station.id;

          return (
            <button
              key={station.id}
              type="button"
              onClick={() => void playStation(station)}
              className={`bg-surface-container-lowest p-md rounded-xl soft-shadow border text-left transition-all cursor-pointer group ${
                isActive
                  ? "border-primary/30 ring-2 ring-primary/10"
                  : "border-transparent hover:border-primary/20"
              }`}
            >
              {/* Station Logo */}
              <div className="w-full aspect-square bg-white rounded-lg mb-md overflow-hidden flex items-center justify-center p-4">
                <Image
                  src={station.logo}
                  alt={station.name}
                  width={180}
                  height={180}
                  className="object-contain w-full h-full"
                />
              </div>

              {/* Station Name */}
              <div className="font-bold text-on-surface group-hover:text-primary transition-colors">
                {station.name}
              </div>

              {/* Genre */}
              <div className="font-label-sm text-on-surface-variant">
                {station.genre}
              </div>

              {/* Stream Status */}
              <div className="mt-sm font-label-sm text-outline">
                {isActive && status === "playing"
                  ? "Live now"
                  : `${station.codec} stream`}
              </div>
            </button>
          );
        })}
      </div>

      {/* Browse Other Stations Button */}
      <div className="flex justify-center mt-xl">
        <Link
          href="/radio-stations"
          className="inline-flex items-center gap-2 rounded-full bg-[#6D1F3A] hover:bg-[#5B1930] text-white font-semibold px-10 py-4 transition-colors duration-200 shadow-md"
        >
          <span className="material-symbols-outlined text-[22px]">
            radio
          </span>
          Browse Other Radio Stations
        </Link>
      </div>
    </section>
  );
}