import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 shrink-0"
      aria-label="Rayoza Online"
    >
      <svg width="36" height="36" viewBox="0 0 36 36" aria-hidden="true">
        <defs>
          <linearGradient id="rzg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#3d6db0" />
            <stop offset="1" stopColor="#16315a" />
          </linearGradient>
        </defs>
        <rect width="36" height="36" rx="10" fill="url(#rzg)" />
        <rect x="9" y="8" width="5" height="20" rx="2.5" fill="#fff" />
        <path
          d="M14 8h5.5a6 6 0 0 1 0 12H14v-4.5h5.5a1.5 1.5 0 0 0 0-3H14z"
          fill="#fff"
        />
        <path d="M17.6 20h5.6l4.8 8h-5.6z" fill="#9cc3f5" />
        <circle cx="28" cy="9" r="2" fill="#E5E0D9" />
      </svg>
      <span className="fh text-[20px] font-extrabold text-[#16233a] tracking-[-0.03em] leading-none">
        rayoza<span className="text-[#2B5288]">.online</span>
      </span>
    </Link>
  );
}
