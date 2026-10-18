import type { ReactNode } from "react";
import type { IconKey } from "@/lib/data";

const paths: Record<IconKey, ReactNode> = {
  pln: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />,
  pulsa: (
    <>
      <rect x="6" y="2" width="12" height="20" rx="2.5" />
      <path d="M11 18h2" />
    </>
  ),
  data: (
    <>
      <path d="M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0" />
      <circle cx="12" cy="19.5" r="1" fill="currentColor" />
    </>
  ),
  pdam: <path d="M12 2.7s6 6.3 6 11.3a6 6 0 0 1-12 0c0-5 6-11.3 6-11.3z" />,
  bpjs: (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M12 8.5v6M9 11.5h6" />
    </>
  ),
  tv: (
    <>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="m17 2-5 5-5-5" />
    </>
  ),
  ewallet: (
    <>
      <path d="M19 7V4H5a2 2 0 0 0 0 4h15v12H5a2 2 0 0 1-2-2V6" />
      <circle cx="16" cy="14" r="1.2" fill="currentColor" />
    </>
  ),
  finance: (
    <>
      <path d="M3 17v-5l2.5-5h13L21 12v5H3z" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
    </>
  ),
};

export default function Icon({ name }: { name: IconKey }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
