"use client";

import { useState } from "react";
import Link from "next/link";
import Icon from "@/components/Icon";
import type { IconKey } from "@/lib/data";

type CatalogItem = {
  id: string;
  name: string;
  cat: string;
  desc: string;
  href: string;
  search: string;
  icon: IconKey;
};

const CATALOG: CatalogItem[] = [
  {
    id: "pln",
    name: "Token & Tagihan PLN",
    cat: "Listrik",
    desc: "Prabayar & pascabayar",
    href: "/layanan?s=pln",
    search: "token & tagihan plnprabayar & pascabayar",
    icon: "pln",
  },
  {
    id: "pulsa",
    name: "Pulsa",
    cat: "Pulsa & Data",
    desc: "Semua operator",
    href: "/layanan?s=pulsa",
    search: "pulsasemua operator",
    icon: "pulsa",
  },
  {
    id: "data",
    name: "Paket Data",
    cat: "Pulsa & Data",
    desc: "Kuota internet",
    href: "/layanan?s=data",
    search: "paket datakuota internet",
    icon: "data",
  },
  {
    id: "pdam",
    name: "PDAM",
    cat: "Tagihan",
    desc: "Air seluruh wilayah",
    href: "/layanan?s=pdam",
    search: "pdamair seluruh wilayah",
    icon: "pdam",
  },
  {
    id: "bpjs",
    name: "BPJS Kesehatan",
    cat: "Tagihan",
    desc: "Iuran 1–6 bulan",
    href: "/layanan?s=bpjs",
    search: "bpjs kesehataniuran 1–6 bulan",
    icon: "bpjs",
  },
  {
    id: "tv",
    name: "TV & Internet",
    cat: "TV & Internet",
    desc: "IndiHome, Biznet, First Media",
    href: "/layanan?s=tv",
    search: "tv & internetindihome, biznet, first media",
    icon: "tv",
  },
  {
    id: "ewallet",
    name: "E-Wallet",
    cat: "E-Wallet",
    desc: "DANA, OVO, GoPay, ShopeePay",
    href: "/layanan?s=ewallet",
    search: "e-walletdana, ovo, gopay, shopeepay, linkaja",
    icon: "ewallet",
  },
  {
    id: "finance",
    name: "Multifinance",
    cat: "Cicilan",
    desc: "Adira, FIF, BAF",
    href: "/layanan?s=finance",
    search: "multifinancecicilan kendaraan, adira, fif, baf",
    icon: "finance",
  },
];

const CHIPS = [
  "Semua",
  "Listrik",
  "Pulsa & Data",
  "Tagihan",
  "TV & Internet",
  "E-Wallet",
  "Cicilan",
];

export default function ServiceCatalog() {
  const [cat, setCat] = useState("Semua");
  const [query, setQuery] = useState("");

  const q = query.toLowerCase();
  const items = CATALOG.filter(
    (service) =>
      (cat === "Semua" || service.cat === cat) && service.search.includes(q),
  );

  return (
    <section id="layanan" className="max-w-6xl mx-auto px-4 pt-20 scroll-mt-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold">Pilih layanan</h2>
          <p className="muted mt-2">8 kategori, semua bisa dibayar dalam hitungan detik.</p>
        </div>
        <input
          id="q"
          className="inp md:max-w-xs"
          placeholder="Cari layanan…"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>

      <div id="chips" className="flex flex-wrap gap-2 mt-6">
        {CHIPS.map((chip) => (
          <button
            key={chip}
            type="button"
            className={`chip ${chip === cat ? "on" : ""}`}
            onClick={() => setCat(chip)}
          >
            {chip}
          </button>
        ))}
      </div>

      <div id="grid" className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {items.map((service) => (
          <Link
            key={service.id}
            href={service.href}
            data-c={service.cat}
            className="svc card hov p-4 md:p-5 block group relative overflow-hidden"
          >
            <span className="ico w-16 h-16 md:w-20 md:h-20 object-cover transition group-hover:scale-110">
              <Icon name={service.icon} />
            </span>
            <h3 className="font-bold mt-4 text-sm md:text-base">{service.name}</h3>
            <p className="muted text-xs mt-1">{service.desc}</p>
            <span className="absolute right-4 top-4 text-[10px] font-bold uppercase tracking-wider or opacity-0 transition group-hover:opacity-100">
              Buka →
            </span>
          </Link>
        ))}
      </div>

      {items.length === 0 && (
        <p id="empty" className="muted text-center py-10">
          Layanan tidak ditemukan.
        </p>
      )}
    </section>
  );
}
