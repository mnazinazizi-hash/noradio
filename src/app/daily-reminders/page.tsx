export default function DailyRemindersPage() {
  return (
    <div className="flex flex-col items-center w-full max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-lg pb-xl">
      {/* Header */}
      <section className="text-center w-full mb-xl max-w-2xl mx-auto">
        <h1 className="font-display-lg text-on-background mb-sm">
          Daily Reminders
        </h1>
        <p className="font-body-lg text-on-surface-variant">
          A quiet space for reflection. Draw a card, read a quote, and find your
          center for the day.
        </p>
      </section>

      {/* Today's Draw */}
      <section className="w-full mb-xl">
        <h2 className="font-headline-lg text-on-background mb-md border-b border-outline-variant pb-2 inline-block">
          Today&apos;s Draw
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Morning Card */}
          <div className="affirmation-card bg-surface-container-lowest rounded-xl p-md shadow-sm border border-outline-variant/30 cursor-pointer card-hover flex flex-col justify-between h-64 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
            <div>
              <span className="inline-block px-3 py-1 bg-secondary-container text-primary font-label-sm rounded-full mb-sm">
                Morning
              </span>
              <h3 className="font-headline-md text-primary mb-2">
                Breathe deeply.
              </h3>
            </div>
            <p className="font-body-md text-on-surface-variant">
              Inhale calm, exhale the noise. The present moment is all there is.
            </p>
            <div className="flex justify-end mt-4">
              <span className="material-symbols-outlined text-outline">spa</span>
            </div>
          </div>

          {/* Focus Card (featured) */}
          <div className="affirmation-card bg-primary rounded-xl p-md shadow-md cursor-pointer card-hover flex flex-col justify-between h-64 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-container to-primary opacity-50 z-0" />
            <div className="z-10">
              <span className="inline-block px-3 py-1 bg-surface/20 text-on-primary font-label-sm rounded-full mb-sm backdrop-blur-sm">
                Focus
              </span>
              <h3 className="font-headline-md text-on-primary mb-2">
                One step at a time
              </h3>
            </div>
            <p className="font-body-md text-on-primary/90 z-10">
              Progress is not always a leap. Sometimes it&apos;s just moving one
              foot in front of the other, slowly.
            </p>
            <div className="flex justify-end mt-4 z-10">
              <span className="material-symbols-outlined text-inverse-primary group-hover:scale-110 transition-transform">
                auto_awesome
              </span>
            </div>
          </div>

          {/* Evening Card */}
          <div className="affirmation-card bg-surface-container-lowest rounded-xl p-md shadow-sm border border-outline-variant/30 cursor-pointer card-hover flex flex-col justify-between h-64 relative overflow-hidden">
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/5 rounded-full blur-2xl pointer-events-none" />
            <div>
              <span className="inline-block px-3 py-1 bg-surface-container-high text-on-surface font-label-sm rounded-full mb-sm">
                Evening
              </span>
              <h3 className="font-headline-md text-on-background mb-2">
                Let go of today.
              </h3>
            </div>
            <p className="font-body-md text-on-surface-variant">
              Whatever happened, it is done. Rest your mind for tomorrow&apos;s
              dawn.
            </p>
            <div className="flex justify-end mt-4">
              <span className="material-symbols-outlined text-outline">
                nightlight
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Collected Wisdom */}
      <section className="w-full mb-xl">
        <h2 className="font-headline-md text-on-background mb-md">
          Collected Wisdom
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-base md:gap-sm">
          {/* Large Feature Quote */}
          <div className="md:col-span-2 md:row-span-2 glass-card rounded-xl p-md md:p-lg flex flex-col justify-center items-center text-center relative overflow-hidden border-l-4 border-l-primary group min-h-[280px]">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-500 z-0"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDCqtrgAfTxexhHMOuwyH9l2cp2Ik-dTcJL6nR2pDPgS4g0gdCP4Zdp1oUHT7MhXy5YRU-Z7LTQ_k5DMeGDOA8WEqAKp3trSrPlVPehbkjs1o-EsAWC1mBrlrmGcAKxaKsNStwiEiJKLgZ-gGB8ctVUSLTzRh44MuPf8aFut3VPp27ge5dXhSDNoNnQw3P9xY5ooqqoN393qkMmKx31SdSoEWzSiXNMAOcVgvUPGjQP4LhwiiKy_NRh')",
              }}
            />
            <div className="z-10 relative">
              <span className="material-symbols-outlined text-primary text-4xl mb-4 opacity-50">
                format_quote
              </span>
              <blockquote className="font-headline-lg-mobile md:font-headline-lg text-on-background mb-sm italic">
                &ldquo;Worthiness is not earned.&rdquo;
              </blockquote>
              <cite className="font-label-md text-on-surface-variant block mt-4">
                — A Gentle Truth
              </cite>
            </div>
          </div>

          {/* Small quote */}
          <div className="md:col-span-1 bg-surface-container rounded-xl p-md flex flex-col justify-center border border-surface-variant shadow-sm hover:shadow-md transition-shadow min-h-[120px]">
            <blockquote className="font-body-lg text-on-surface">
              &ldquo;Choose joy today.&rdquo;
            </blockquote>
          </div>

          {/* Small text */}
          <div className="md:col-span-1 bg-surface-container-lowest rounded-xl p-md flex flex-col justify-center border border-outline-variant/50 shadow-sm min-h-[120px]">
            <p className="font-body-md text-on-surface-variant">
              Stillness is where we find our true resonance.
            </p>
          </div>

          {/* Wide cell */}
          <div className="md:col-span-2 bg-secondary-container rounded-xl p-md flex items-center shadow-sm min-h-[100px]">
            <span className="material-symbols-outlined text-secondary text-3xl mr-md hidden sm:block">
              self_improvement
            </span>
            <p className="font-body-lg text-on-secondary-container">
              Your energy introduces you before you even speak. Cultivate a quiet
              confidence.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
