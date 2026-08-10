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
          Nosh&apos;s favorite Radio stations
        </h2>
        <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
      </div>

      {/* Radio Station Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-sm">
        {stations.map((station) => {
          const isActive = activeStation.id === station.id;

          return (
            <button
              key={station.id}
              type="button"
              disabled={!station.streamUrl}
              onClick={() => void playStation(station)}
              className={`bg-surface-container-lowest p-2.5 rounded-lg soft-shadow border text-left transition-all group ${
                station.streamUrl ? "cursor-pointer" : "cursor-not-allowed opacity-60"
              } ${
                isActive
                  ? "border-primary/30 ring-2 ring-primary/10"
                  : "border-transparent hover:border-primary/20"
              }`}
            >
              {/* Station Logo */}
              <div className="w-full aspect-[3/2] bg-white rounded-md mb-2 overflow-hidden flex items-center justify-center p-2">
                <Image
                  src={station.logo}
                  alt={station.name}
                  width={120}
                  height={80}
                  className="object-contain w-full h-full"
                />
              </div>

              {/* Station Name */}
              <div className="text-sm leading-5 font-bold text-on-surface group-hover:text-primary transition-colors truncate">
                {station.name}
              </div>

              {/* Genre */}
              <div className="text-[11px] leading-4 text-on-surface-variant min-h-8">
                {station.genre}
              </div>

              {/* Stream Status */}
              <div className="mt-1 text-[10px] leading-4 font-medium text-outline">
                {station.streamUrl
                  ? isActive && status === "playing"
                    ? "Live now"
                    : `${station.codec} stream`
                  : "Stream offline"}
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
