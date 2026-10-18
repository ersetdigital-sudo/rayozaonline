"use client";

import { useState } from "react";

const FAQ = [
  ["Berapa lama transaksi diproses?", "Rata-rata 3 detik. Pada jam sibuk maksimal 5 menit."],
  ["Apakah perlu daftar akun?", "Tidak perlu. Cukup isi nomor tujuan dan nomor WhatsApp untuk struk."],
  [
    "Metode pembayaran apa saja?",
    "QRIS, DANA, OVO, GoPay, ShopeePay, serta virtual account BCA, BRI, Mandiri, dan BNI.",
  ],
  ["Bagaimana jika transaksi gagal?", "Dana dikembalikan otomatis 100% ke metode pembayaran semula."],
  ["Apakah aman?", "Semua transaksi terenkripsi dan diproses langsung lewat mitra resmi."],
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<boolean[]>(() => FAQ.map(() => false));

  const toggle = (index: number) =>
    setOpen((previous) => previous.map((value, i) => (i === index ? !value : value)));

  return (
    <div id="faql" className="mt-8 space-y-3">
      {FAQ.map(([question, answer], index) => (
        <div key={question} className={`acc card ${open[index] ? "open" : ""}`}>
          <button
            type="button"
            className="w-full flex justify-between items-center gap-4 p-5 text-left font-semibold"
            onClick={() => toggle(index)}
          >
            {question}
            <span className="acc-i or text-2xl leading-none">+</span>
          </button>
          <div className="acc-b">
            <p className="muted px-5 pb-5">{answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
