"use client";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  return (
    <main className="max-w-7xl mx-auto px-gutter py-xl text-center">
      <h1 className="text-3xl font-bold text-primary mb-4">
        Something went wrong
      </h1>

      <p className="text-on-surface-variant mb-6">
        {error.message}
      </p>

      <button
        onClick={() => reset()}
        className="rounded-full bg-primary text-white px-6 py-3 hover:opacity-90"
      >
        Try Again
      </button>
    </main>
  );
}