"use client";

import { useEffect, useRef, useState } from "react";
import { getDailyReminders } from "@/lib/daily-reminders";

export default function DailyReminderCarousel() {
  const [reminders, setReminders] = useState(getDailyReminders);
  const [slide, setSlide] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStart = useRef<number | null>(null);

  const visibleCards = isDesktop ? 3 : 1;
  const maxSlide = Math.max(0, reminders.length - visibleCards);
  const currentSlide = Math.min(slide, maxSlide);

  useEffect(() => {
    const updateForToday = () => setReminders(getDailyReminders());
    updateForToday();
    const timer = window.setInterval(updateForToday, 60_000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const updateViewport = () => setIsDesktop(window.innerWidth >= 768);
    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  useEffect(() => {
    const autoSlide = window.setInterval(() => {
      setSlide((current) => (current >= maxSlide ? 0 : current + 1));
    }, 5_000);
    return () => window.clearInterval(autoSlide);
  }, [maxSlide]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    if (!card) return;
    const gap = 24;
    track.style.transform = `translateX(-${(card.offsetWidth + gap) * currentSlide}px)`;
  }, [currentSlide, isDesktop]);

  const goToSlide = (nextSlide: number) => setSlide(Math.max(0, Math.min(nextSlide, maxSlide)));

  return (
    <section className="w-full" aria-label="Daily recommendations">
      <h2 className="font-headline-lg text-on-background mb-md border-b border-outline-variant pb-2 inline-block">Daily Recommendations</h2>
      <div className="overflow-hidden w-full" onTouchStart={(event) => { touchStart.current = event.changedTouches[0].clientX; }} onTouchEnd={(event) => { if (touchStart.current === null) return; const distance = event.changedTouches[0].clientX - touchStart.current; if (Math.abs(distance) > 45) goToSlide(currentSlide + (distance < 0 ? 1 : -1)); touchStart.current = null; }}>
        <div ref={trackRef} className="flex gap-gutter transition-transform duration-500 ease-in-out">
          {reminders.map((reminder) => {
            const isFeatured = reminder.period === "Focus";
            return <article key={`${reminder.period}-${reminder.title}`} className={`flex-none w-full md:w-[calc((100%_-_48px)_/_3)] affirmation-card rounded-xl p-md min-h-72 flex flex-col justify-between relative overflow-hidden ${isFeatured ? "bg-primary shadow-md text-on-primary" : "bg-surface-container-lowest border border-outline-variant/30 shadow-sm"}`}>
              {isFeatured ? <div className="absolute inset-0 bg-gradient-to-br from-primary-container to-primary opacity-50" /> : <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />}
              <div className="relative"><span className={`inline-block px-3 py-1 rounded-full font-label-sm mb-sm ${isFeatured ? "bg-white/15 text-on-primary backdrop-blur-sm" : "bg-secondary-container text-primary"}`}>{reminder.period}</span><h3 className={`font-headline-md ${isFeatured ? "text-on-primary" : "text-primary"}`}>{reminder.title}</h3></div>
              <p className={`font-body-md relative ${isFeatured ? "text-on-primary/90" : "text-on-surface-variant"}`}>{reminder.body}</p>
              <span className={`material-symbols-outlined relative self-end ${isFeatured ? "text-inverse-primary" : "text-outline"}`}>{reminder.icon}</span>
            </article>;
          })}
        </div>
      </div>
      <div className="flex justify-center mt-6 gap-2" aria-label="Daily reminder slides">
        {Array.from({ length: maxSlide + 1 }, (_, index) => <button key={index} type="button" aria-label={`Go to slide ${index + 1}`} aria-current={currentSlide === index} onClick={() => goToSlide(index)} className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? "bg-primary" : "bg-outline-variant hover:bg-outline"}`} />)}
      </div>
    </section>
  );
}
