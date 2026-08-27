"use client";

export default function StatusBadge() {
  return (
    <span className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-sm">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-crimson opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-crimson" />
      </span>
      <span className="label text-smoke">Available for work</span>
    </span>
  );
}
