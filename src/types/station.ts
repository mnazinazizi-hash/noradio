export interface Station {
  id?: string;

  // Radio Browser API fields
  stationuuid?: string;
  name: string;
  url: string;
  url_resolved?: string;
  homepage?: string;
  favicon?: string;

  country?: string;
  state?: string;
  language?: string;
  tags?: string;

  codec?: "MP3" | "AAC" | "Unknown";

  votes?: number;
  clickcount?: number;
}