import DailyReminderCarousel from "@/components/DailyReminderCarousel";

export default function DailyRemindersPage() {
  return (
    <div className="flex-grow flex flex-col items-center w-full max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl">
      <section className="text-center w-full mb-xl max-w-2xl mx-auto">
        <h1 className="font-display-lg text-on-background mb-sm">Daily Reminders</h1>
        <p className="font-body-lg text-on-surface-variant">A quiet space for reflection. Draw a card, read a quote, and find your center for the day.</p>
      </section>
      <DailyReminderCarousel />
    </div>
  );
}
