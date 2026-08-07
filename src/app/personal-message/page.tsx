export default function PersonalMessagePage() {
  return (
    <div className="flex flex-col items-center w-full max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop py-xl pb-xl">
      <section className="text-center w-full">
        <h1 className="font-display-lg text-primary mb-lg">
          Personal Message
        </h1>
        <div className="bg-surface-container-lowest rounded-xl p-lg soft-shadow border border-outline-variant/20">
          <p className="font-headline-lg-mobile md:font-headline-lg text-on-background leading-relaxed mb-md italic">
            &ldquo;I won&apos;t shrink myself. I won&apos;t measure my worth by
            setbacks or slow days. I won&apos;t look down on myself.&rdquo;
          </p>
          <p className="font-body-lg text-on-surface-variant leading-relaxed">
            I am worthy because I keep going. I can make it in life and I
            don&apos;t need to have it all figured out, but one step at a time.
          </p>
        </div>
        <p className="mt-lg font-body-md text-on-surface-variant/80">
          This space is yours. Return whenever you need a gentle reminder of
          your strength.
        </p>
      </section>
    </div>
  );
}
