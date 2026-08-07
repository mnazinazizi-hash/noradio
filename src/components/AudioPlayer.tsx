"use client";

import { useRadio } from "@/components/RadioProvider";

const statusLabels = {
  idle: "Ready",
  loading: "Connecting...",
  playing: "Live now",
  paused: "Paused",
  error: "Could not start stream",
};

export default function AudioPlayer() {
  const {
    activeStation,
    setVolume,
    skipStation,
    status,
    togglePlayback,
    volume,
  } = useRadio();

  return (
    <div className="fixed bottom-0 w-full glass-player z-40">
      <div className="max-w-7xl mx-auto px-gutter py-sm flex items-center justify-between">
        <div className="flex items-center space-x-md">
          <div className="w-12 h-12 rounded bg-surface-variant overflow-hidden shrink-0">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD2MEDCx_XNwL9mq7SUNvXX9cReXTc_j0nPy8XXBB6JmredO_rixVgLGX7ptSwhxwLOhb9GlsyUk4taI9DbRI_rsudW9a1yVi-d-wF3drl4wTJ4gePmGm6p_PxS6Z1q_vaWcPQCdVOnWl0s8IpjJqqHs2ZdOqidLLTmhcECFUGLRIiAtAZIXmANDTgWBux5cHzPPYPuLFK5PZLTe484LbYOr_jKLasP0E0IgSEQjVFZCQuG35zNipDp")',
              }}
              role="img"
              aria-label="Radio speaker texture"
            />
          </div>
          <div className="min-w-0">
            <div className="font-label-md text-on-surface truncate">
              Now Playing: {activeStation.name}
            </div>
            <div className="font-label-sm text-on-surface-variant">
              {activeStation.genre} · {statusLabels[status]}
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-md">
          <button
            className="text-on-surface-variant hover:text-primary transition-colors"
            onClick={() => void skipStation(-1)}
            aria-label="Previous"
            type="button"
          >
            <span className="material-symbols-outlined">skip_previous</span>
          </button>
          <button
            className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center hover:scale-105 transition-transform"
            onClick={() => void togglePlayback()}
            aria-label={status === "playing" ? "Pause" : "Play"}
            type="button"
          >
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              {status === "playing" ? "pause" : "play_arrow"}
            </span>
          </button>
          <button
            className="text-on-surface-variant hover:text-primary transition-colors"
            onClick={() => void skipStation(1)}
            aria-label="Next"
            type="button"
          >
            <span className="material-symbols-outlined">skip_next</span>
          </button>
        </div>

        <div className="hidden md:flex items-center space-x-sm w-48">
          <span className="material-symbols-outlined text-on-surface-variant text-[18px]">
            volume_up
          </span>
          <label className="sr-only" htmlFor="radio-volume">
            Volume
          </label>
          <input
            className="w-full accent-primary"
            id="radio-volume"
            max="1"
            min="0"
            onChange={(event) => setVolume(Number(event.target.value))}
            step="0.05"
            type="range"
            value={volume}
          />
          <div className="hidden h-1 bg-outline-variant rounded-full w-full relative">
            <div
              className="absolute left-0 top-0 h-full bg-primary rounded-full"
              style={{ width: `${volume * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
