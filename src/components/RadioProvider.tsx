"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { favoriteStations, type FavoriteStation } from "@/lib/stations";

type PlaybackStatus = "idle" | "loading" | "playing" | "paused" | "error";

type RadioContextValue = {
  activeStation: FavoriteStation;
  stations: FavoriteStation[];
  status: PlaybackStatus;
  volume: number;
  playStation: (station: FavoriteStation) => Promise<void>;
  togglePlayback: () => Promise<void>;
  skipStation: (direction: 1 | -1) => Promise<void>;
  setVolume: (volume: number) => void;
};

const RadioContext = createContext<RadioContextValue | null>(null);

export function RadioProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [activeStation, setActiveStation] = useState(favoriteStations[0]);
  const [status, setStatus] = useState<PlaybackStatus>("idle");
  const [volume, setVolumeState] = useState(0.7);

  const ensureAudio = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
      audioRef.current.preload = "none";
      audioRef.current.addEventListener("ended", () => setStatus("paused"));
      audioRef.current.addEventListener("error", () => setStatus("error"));
    }

    return audioRef.current;
  }, []);

  const playStation = useCallback(
    async (station: FavoriteStation) => {
      const audio = ensureAudio();

      setActiveStation(station);
      setStatus("loading");

      if (audio.src !== station.streamUrl) {
        audio.pause();
        audio.src = station.streamUrl;
      }

      audio.volume = volume;

      try {
        await audio.play();
        setStatus("playing");
      } catch {
        setStatus("error");
      }
    },
    [ensureAudio, volume],
  );

  const togglePlayback = useCallback(async () => {
    const audio = ensureAudio();

    if (status === "playing") {
      audio.pause();
      setStatus("paused");
      return;
    }

    await playStation(activeStation);
  }, [activeStation, ensureAudio, playStation, status]);

  const skipStation = useCallback(
    async (direction: 1 | -1) => {
      const currentIndex = favoriteStations.findIndex(
        (station) => station.id === activeStation.id,
      );
      const nextIndex =
        (currentIndex + direction + favoriteStations.length) %
        favoriteStations.length;

      await playStation(favoriteStations[nextIndex]);
    },
    [activeStation.id, playStation],
  );

  const setVolume = useCallback(
    (nextVolume: number) => {
      const normalizedVolume = Math.min(1, Math.max(0, nextVolume));
      const audio = ensureAudio();

      audio.volume = normalizedVolume;
      setVolumeState(normalizedVolume);
    },
    [ensureAudio],
  );

  const value = useMemo(
    () => ({
      activeStation,
      stations: favoriteStations,
      status,
      volume,
      playStation,
      togglePlayback,
      skipStation,
      setVolume,
    }),
    [
      activeStation,
      playStation,
      setVolume,
      skipStation,
      status,
      togglePlayback,
      volume,
    ],
  );

  return (
    <RadioContext.Provider value={value}>{children}</RadioContext.Provider>
  );
}

export function useRadio() {
  const context = useContext(RadioContext);

  if (!context) {
    throw new Error("useRadio must be used inside RadioProvider");
  }

  return context;
}
