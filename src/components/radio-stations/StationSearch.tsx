"use client";

type StationSearchProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function StationSearch({
  value,
  onChange,
}: StationSearchProps) {
  return (
    <div className="max-w-3xl mx-auto relative">
      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
        search
      </span>

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search radio stations..."
        className="w-full rounded-full border border-outline-variant bg-surface-container py-4 pl-12 pr-5 outline-none focus:border-primary transition-colors"
      />
    </div>
  );
}