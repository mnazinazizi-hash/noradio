export type FavoriteStation = {
  id: string;
  name: string;
  genre: string;
  logo: string;
  streamUrl: string | null;
  homepage: string;
  codec: "MP3" | "AAC" | null;
};

export const favoriteStations: FavoriteStation[] = [
  { id: "radio47", name: "Radio 47", genre: "Entertainment", logo: "/logos/Radio47.png", streamUrl: "https://streaming.shoutcast.com/radio-47?ver=690109", homepage: "https://radio47.digital/", codec: "MP3" },
  { id: "classic105", name: "Classic 105", genre: "Music", logo: "/logos/Classic105.png", streamUrl: "https://classic105-atunwadigital.streamguys1.com/classic105", homepage: "https://classic105.co.ke/", codec: "AAC" },
  { id: "radiojambo", name: "Radio Jambo", genre: "Talk", logo: "/logos/RadioJambo.png", streamUrl: "https://radiojambo-atunwadigital.streamguys1.com/radiojambo", homepage: "https://radiojambo.co.ke/", codec: "AAC" },
  { id: "milelefm", name: "Milele FM", genre: "Rhumba", logo: "/logos/MileleFM.png", streamUrl: "https://milelefm-atunwadigital.streamguys1.com/milelefm", homepage: "https://milelefm.co.ke/", codec: "AAC" },
  { id: "family-radio", name: "Family Radio 316", genre: "Christian / 103.9 FM", logo: "https://radio.co.ke/media/station/radio-316.webp", streamUrl: "https://uksoutha.streaming.broadcast.radio/familyradio", homepage: "https://familyradio316.com/listen-live/", codec: "MP3" },
  { id: "hope-fm", name: "Hope FM", genre: "Christian / 93.3 FM", logo: "https://radio.co.ke/media/station/hope-fm.webp", streamUrl: "https://a5.asurahosting.com:7530/radio.mp3", homepage: "https://hopemediakenya.org/", codec: "MP3" },
  { id: "radio-waumini", name: "Radio Waumini", genre: "Catholic / 88.3 FM", logo: "https://images.zeno.fm/-SBqrc461rSjjwVFPuFhsZ1nnegQxwrHVm00mBkR6-s/rs%3Afill%3A152%3A152/q%3A75/g%3Ace%3A0%3A0/aHR0cHM6Ly9wcm94eS56ZW5vLmZtL2NvbnRlbnQvc3RhdGlvbnMvYWd4emZucGxibTh0YzNSaGRITnlHd3NTRGxOMFlYUnBiMjVRY205bWFXeGxHSUNBZ0lDZ19Za0tES0lCQkhwbGJtOC9pbWFnZS8_dT0xNTk3MDM4ODk0MDAw.webp", streamUrl: "https://stream.zeno.fm/gvk894g072quv", homepage: "https://radiowaumini.co.ke/", codec: "MP3" },
  { id: "mbci-radio", name: "MBCI Radio", genre: "Christian / 89.5 FM Nakuru", logo: "https://cdn.instant.audio/images/logos/radio-or-ke/mbci.png", streamUrl: "https://radio.mainconnect.co.ke/mbci", homepage: "https://www.mbcimedia.co.ke/live-radio/", codec: "MP3" },
  { id: "truth-fm", name: "Truth FM", genre: "Christian / 90.7 FM Nairobi", logo: "https://radio.co.ke/media/station/truth-fm.webp", streamUrl: "https://truthfm-atunwadigital.streamguys1.com/truthfm", homepage: "https://truthfm.org/", codec: "MP3" },
];

export function getStationById(id: string) {
  return favoriteStations.find((station) => station.id === id);
}
