"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Icon from "./Icon";

const NAV_SERVICES = [
  { key: "pln", short: "Token PLN", label: "Token & Tagihan PLN", desc: "Prabayar & pascabayar" },
  { key: "pulsa", short: "Pulsa", label: "Pulsa", desc: "Semua operator" },
  { key: "data", short: "Paket Data", label: "Paket Data", desc: "Kuota internet" },
  { key: "bpjs", short: "BPJS", label: "BPJS Kesehatan", desc: "Iuran 1–6 bulan" },
  { key: "pdam", short: "PDAM", label: "PDAM", desc: "Air seluruh wilayah" },
] as const;

const NAV_LINKS = [
  ["Promo", "/#promo"],
  ["Cara Order", "/#cara"],
  ["Cek Pesanan", "/#cek"],
  ["FAQ", "/#faq"],
] as const;

const NAV_ITEM =
  "px-3 py-2 rounded-lg font-medium transition hover:text-[#2B5288] hover:bg-white/60";

export default function SiteHeader() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const servicesActive = pathname.startsWith("/layanan");

  useEffect(() => {
    setServicesOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!servicesOpen) return;

    const onPointerDown = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setServicesOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [servicesOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-[#d3ccc2] bg-[#E5E0D9]/85 backdrop-blur-md">
      <div className="relative max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <Logo />

        <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-1 text-sm text-[#33415a]">
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className={`${NAV_ITEM} flex items-center gap-1.5 ${servicesActive ? "text-[#2B5288] bg-white/70" : ""}`}
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((value) => !value)}
            >
              Layanan
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            {servicesOpen && (
              <div className="absolute left-0 top-full pt-2">
                <div className="w-[360px] rounded-2xl border border-[#d3ccc2] bg-[#F4F1EC] shadow-[0_24px_60px_-24px_rgba(22,35,58,0.5)] p-2">
                  {NAV_SERVICES.map((service) => (
                    <Link
                      key={service.key}
                      href={`/layanan?s=${service.key}`}
                      onClick={() => setServicesOpen(false)}
                      className="group flex items-start gap-3 rounded-xl p-2.5 transition hover:bg-white"
                    >
                      <span className="ico w-9 h-9 rounded-lg shrink-0 transition group-hover:scale-105">
                        <Icon name={service.key} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold text-[#16233a]">
                          {service.label}
                        </span>
                        <span className="block text-xs muted mt-0.5">{service.desc}</span>
                      </span>
                    </Link>
                  ))}
                  <div className="border-t border-[#d3ccc2] mt-2 pt-2">
                    <Link
                      href="/#layanan"
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center justify-between rounded-xl px-3 py-2 text-sm font-semibold text-[#2B5288] transition hover:bg-white"
                    >
                      Lihat semua layanan
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {NAV_LINKS.map(([label, href]) => (
            <Link key={label} className={NAV_ITEM} href={href}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/#layanan" className="btn py-2 px-4 text-sm">
            Bayar
          </Link>
          <button
            type="button"
            id="mbtn"
            className="lg:hidden btn2 p-2"
            aria-label="menu"
            aria-expanded={mobileOpen}
            aria-controls="mnav"
            onClick={() => setMobileOpen((value) => !value)}
          >
            <svg width="20" height="20" fill="none" stroke="#16233a" strokeWidth={2}>
              {mobileOpen ? (
                <path d="M5 5l10 10M15 5L5 15" />
              ) : (
                <path d="M3 6h14M3 10h14M3 14h14" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mnav"
        className={`${mobileOpen ? "" : "hidden"} lg:hidden border-t border-[#d3ccc2] bg-[#E5E0D9]/95 backdrop-blur-md`}
      >
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#6b7586] mb-2">
            Layanan
          </div>
          <div className="grid grid-cols-2 gap-1">
            {NAV_SERVICES.map((service) => (
              <Link
                key={service.key}
                href={`/layanan?s=${service.key}`}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2.5 rounded-xl px-2 py-2 text-sm font-medium text-[#33415a] transition hover:bg-white/70 hover:text-[#2B5288]"
              >
                <span className="ico w-8 h-8 rounded-lg shrink-0">
                  <Icon name={service.key} />
                </span>
                {service.short}
              </Link>
            ))}
          </div>

          <div className="border-t border-[#d3ccc2] my-3" />

          <div className="grid grid-cols-2 gap-1 text-sm">
            {NAV_LINKS.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="px-2 py-2 rounded-xl font-medium text-[#33415a] transition hover:bg-white/70 hover:text-[#2B5288]"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
