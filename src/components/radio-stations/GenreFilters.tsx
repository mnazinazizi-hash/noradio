const genres = [
  "All",
  "News",
  "Talk",
  "Pop",
  "Rock",
  "Jazz",
  "Classical",
  "Christian",
];

export default function GenreFilters() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {genres.map((genre) => (
        <button
          key={genre}
          className="rounded-full border border-outline-variant px-5 py-2 hover:bg-primary hover:text-white transition"
        >
          {genre}
        </button>
      ))}
    </div>
  );
}