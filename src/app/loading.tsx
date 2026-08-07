export default function Loading() {
  return (
    <main className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center overflow-hidden bg-primary">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(128,0,32,0.5),transparent_70%)] animate-pulse" />

      <div className="relative z-10 flex flex-col items-center">
        {/* Glow Ring */}
        <div className="relative mb-10 h-72 w-72">
          <div className="absolute inset-0 animate-pulse rounded-full border-2 border-white/40" />

          <div className="absolute inset-4 overflow-hidden rounded-full border-4 border-white shadow-[0_0_40px_rgba(255,255,255,0.25)]">
            <img
              src="/icon.png"
              alt="NoRadio"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-white">
          Loading NoRadio
        </h1>

        <p className="mt-3 text-white/80">
          Preparing your listening experience...
        </p>

        {/* Soundwave */}
        <div className="mt-10 flex h-12 items-end gap-2">
          <span className="sound-bar h-4"></span>
          <span className="sound-bar h-8"></span>
          <span className="sound-bar h-12"></span>
          <span className="sound-bar h-8"></span>
          <span className="sound-bar h-4"></span>
        </div>
      </div>
    </main>
  );
}