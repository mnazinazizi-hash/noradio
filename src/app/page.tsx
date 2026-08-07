import Link from "next/link";
import FavoriteStations from "@/components/FavoriteStations";

export default function HomePage() {
  return (
    <div className="pb-xl">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex items-center mb-xl">
        <div className="absolute inset-0 w-full h-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Hero — warm contemplative atmosphere"
            className="w-full h-full object-cover"
            src="Nosh.png"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-gutter grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-6 lg:col-span-5 flex flex-col justify-center">
            <p className="font-headline-lg-mobile md:font-headline-lg text-primary leading-tight mb-md">
              &ldquo;I won&apos;t shrink myself. I won&apos;t measure my worth by
              setbacks or slow days. I won&apos;t look down on myself.&rdquo;
            </p>
            
          </div>
        </div>
      </section>

      {/* Personal Message Card */}
      <section className="max-w-7xl mx-auto px-gutter mb-xl" id="personal-message">
        <Link
          href="/personal-message"
          className="block bg-surface-container-lowest rounded-xl p-lg soft-shadow md:w-2/3 mx-auto text-center border border-transparent hover:scale-[1.02] transition-transform cursor-pointer"
        >
          <h2 className="font-headline-md text-primary mb-md">
            Personal Message
          </h2>
          <p className="font-body-md text-on-surface-variant mb-md">
            I am worthy because I keep going. I can make it in life and I
            don&apos;t need to have it all figured out, but one step at a time
          </p>
        </Link>
      </section>

      <FavoriteStations />
    </div>
  );
}
