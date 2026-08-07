"use client";

import { useRadio } from "@/components/RadioProvider";

type StationCardProps = {
  station: any;
};


const badgeColors = [
  "bg-[#7b001b]",
  "bg-[#5c3a0a]",
  "bg-[#111111]",
  "bg-[#6d6863]",
  "bg-[#b52038]",
  "bg-[#4b2700]",
];


export default function StationCard({
  station,
}: StationCardProps) {

  const { playStation } = useRadio();


  function play() {

    playStation({
      id: station.id,
      name: station.name,
      genre: station.genre,
      logo: station.logo,
      streamUrl: station.streamUrl,
      homepage: station.homepage,
      codec: station.codec || "AAC",
    });

  }


  const color =
    badgeColors[
      station.name.length %
      badgeColors.length
    ];


  return (

    <button
      onClick={play}
      className="
        group
        flex
        items-center
        w-full
        rounded-[28px]
        bg-[#f7efeb]
        px-4
        py-3
        text-left
        transition-all
        duration-200
        hover:bg-[#f1e5df]
        hover:shadow-sm
      "
    >

      {/* Circle badge */}
      <div
        className={`
          ${color}
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-full
          text-white
          text-xs
          font-semibold
        `}
      >
        {station.name
          .slice(0,2)
          .toUpperCase()}
      </div>


      {/* Text */}
      <div className="ml-4">

        <h3
          className="
            text-[15px]
            font-medium
            text-[#7d2938]
            leading-tight
          "
        >
          {station.name}
        </h3>


        <p
          className="
            mt-1
            text-[11px]
            text-gray-500
          "
        >
          {station.genre || "Live Radio"}
        </p>

      </div>


    </button>

  );
}