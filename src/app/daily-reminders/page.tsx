import DailyVerse from "@/components/DailyVerse";

export default function DailyRemindersPage() {
  return (
    <main className="flex min-h-[calc(100vh-20rem)] w-full flex-col items-center justify-center px-margin-mobile py-xl md:px-margin-desktop">
      <section className="mb-lg w-full max-w-2xl text-center">
        <p className="mb-sm font-label-sm uppercase tracking-[0.16em] text-primary">A quiet moment</p>
        <h1 className="font-display-lg mb-sm text-primary">Daily Word</h1>
        <p className="font-body-lg text-on-surface-variant">Find encouragement, hope, and strength in Scripture.</p>
      </section>
      <DailyVerse />
    </main>
  );
}
