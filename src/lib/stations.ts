export type FavoriteStation = {
  id: string;
  name: string;
  genre: string;
  logo: string;
  streamUrl: string;
  homepage: string;
  codec: "MP3" | "AAC";
};

export const favoriteStations: FavoriteStation[] = [
  {
    id: "radio47",
    name: "Radio 47",
    genre: "Entertainment",
    logo: "/logos/Radio47.png",
    streamUrl: "https://streaming.shoutcast.com/radio-47?ver=690109",
    homepage: "https://radio47.digital/",
    codec: "MP3",
  },
  {
    id: "classic105",
    name: "Classic 105",
    genre: "Music",
    logo: "/logos/Classic105.png",
    streamUrl: "https://classic105-atunwadigital.streamguys1.com/classic105",
    homepage: "https://classic105.co.ke/",
    codec: "AAC",
  },
  {
    id: "radiojambo",
    name: "Radio Jambo",
    genre: "Talk",
    logo: "/logos/RadioJambo.png",
    streamUrl: "https://radiojambo-atunwadigital.streamguys1.com/radiojambo",
    homepage: "https://radiojambo.co.ke/",
    codec: "AAC",
  },
  {
    id: "milelefm",
    name: "Milele FM",
    genre: "Rhumba",
    logo: "/logos/MileleFM.png",
    streamUrl: "https://milelefm-atunwadigital.streamguys1.com/milelefm",
    homepage: "https://milelefm.co.ke/",
    codec: "AAC",
  },
];

export function getStationById(id: string) {
  return favoriteStations.find((station) => station.id === id);
}