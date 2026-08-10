"use client";

import { useEffect, useState } from "react";

const AUTO_REFRESH_INTERVAL = 2 * 60 * 60 * 1000;

type Verse = {
  text: string;
  reference: string;
  translation: string;
};

export default function DailyVerse() {
  const [verse, setVerse] = useState<Verse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const loadVerse = async () => {
    setIsLoading(true);
    setHasError(false);

    try {
      const response = await fetch("/api/daily-verse", { cache: "no-store" });
      if (!response.ok) throw new Error("Could not load a verse");
      setVerse((await response.json()) as Verse);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const initialLoad = window.setTimeout(() => {
      void loadVerse();
    }, 0);
    const autoRefresh = window.setInterval(() => {
      void loadVerse();
    }, AUTO_REFRESH_INTERVAL);

    return () => {
      window.clearTimeout(initialLoad);
      window.clearInterval(autoRefresh);
    };
  }, []);

  return (
    <section className="w-full max-w-4xl" aria-label="Daily Bible verse">
      <div className="relative min-h-[360px] overflow-hidden rounded-2xl border border-outline-variant/30 bg-surface-container-lowest shadow-lg">
        <div
          className="absolute -inset-8 scale-110 bg-cover bg-center blur-md opacity-25"
          style={{ backgroundImage: "url('/Nosh.png')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-surface-container-lowest/85 to-primary-fixed/45" aria-hidden="true" />

        <div className="relative z-10 flex min-h-[360px] flex-col items-center justify-center px-md py-xl text-center md:px-xl">
          <span className="material-symbols-outlined mb-md text-6xl text-primary/25" aria-hidden="true">
            format_quote
          </span>

          {isLoading ? (
            <div className="flex items-center gap-sm text-on-surface-variant" aria-live="polite">
              <span className="material-symbols-outlined animate-spin">progress_activity</span>
              Finding today&apos;s encouragement...
            </div>
          ) : hasError || !verse ? (
            <div className="text-on-surface-variant" role="alert">
              We could not load a verse right now. Please try again.
            </div>
          ) : (
            <div className="max-w-3xl">
              <blockquote className="font-headline-lg-mobile md:font-headline-lg text-on-background italic leading-relaxed">
                &ldquo;{verse.text}&rdquo;
              </blockquote>
              <p className="mt-lg font-headline-md text-primary">{verse.reference}</p>
              <p className="mt-xs font-label-sm uppercase tracking-[0.14em] text-on-surface-variant">
                {verse.translation}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-lg flex justify-center">
        <div className="text-center">
          <button
            type="button"
            onClick={() => void loadVerse()}
            disabled={isLoading}
            className="inline-flex items-center gap-2 rounded-full bg-secondary-container px-6 py-3 font-label-md text-on-secondary-container shadow-sm transition-colors hover:bg-surface-variant disabled:cursor-wait disabled:opacity-70"
          >
            <span className="material-symbols-outlined">refresh</span>
            {isLoading ? "Loading verse" : "New verse"}
          </button>
          {/*<p className="mt-sm font-label-sm text-on-surface-variant">Refreshes automatically every 2 hours</p>*/}
        </div>
      </div>
    </section>
  );
}
