"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PAY_GROUPS, VA_PREFIX, type PayMethod } from "@/lib/data";
import { QRIS_IMAGE, pad, rp } from "@/lib/utils";

type Order = {
  svc: string;
  k: string;
  num: string;
  prod: string;
  price: number;
  adm: number;
};

const DEFAULT_ORDER: Order = {
  svc: "Token PLN",
  k: "pln",
  num: "532110000123",
  prod: "Rp50.000",
  price: 51500,
  adm: 2500,
};

export default function BayarClient() {
  const [order, setOrder] = useState<Order>(DEFAULT_ORDER);
  const [method, setMethod] = useState<PayMethod | null>(null);
  const [wa, setWa] = useState("");
  const [paid, setPaid] = useState(false);
  const [invoice, setInvoice] = useState("");
  const [deadline, setDeadline] = useState<number | null>(null);
  const [remaining, setRemaining] = useState(15 * 60);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("nxOrder");
      if (raw) {
        const saved = JSON.parse(raw) as Partial<Order>;
        setOrder({ ...DEFAULT_ORDER, ...saved });
      }
    } catch {
      /* storage unavailable */
    }
  }, []);

  useEffect(() => {
    if (deadline === null) return;

    const tick = () =>
      setRemaining(Math.max(0, Math.floor((deadline - Date.now()) / 1000)));

    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, [deadline]);

  const total = order.price + order.adm + (method?.fee ?? 0);
  const canPay = Boolean(method && wa.length >= 10);
  const countdown =
    remaining > 0
      ? pad(Math.floor(remaining / 60)) + ":" + pad(remaining % 60)
      : "Kedaluwarsa";

  const handlePay = () => {
    if (!method) return;

    const now = new Date();
    const inv =
      "RYZ-" +
      now.getFullYear() +
      pad(now.getMonth() + 1) +
      pad(now.getDate()) +
      "-" +
      Math.floor(1000 + Math.random() * 9000);

    try {
      localStorage.setItem(
        "nxLast",
        JSON.stringify({ inv, prod: order.svc + " " + order.prod, total }),
      );
    } catch {
      /* storage unavailable */
    }

    setInvoice(inv);
    setDeadline(Date.now() + 15 * 60 * 1000);
    setRemaining(15 * 60);
    setPaid(true);
    window.scrollTo(0, 0);
  };

  const va =
    method?.group === "Virtual Account"
      ? (VA_PREFIX[method.name] ?? "") + wa.slice(-8)
      : "";

  const steps = !method
    ? []
    : method.name === "QRIS"
      ? [
          "Buka aplikasi e-wallet atau m-banking.",
          "Pindai kode QR di bawah.",
          "Periksa nominal lalu konfirmasi.",
        ]
      : method.group === "E-Wallet"
        ? [
            `Notifikasi pembayaran dikirim ke aplikasi ${method.name} terdaftar di ${wa}.`,
            `Buka aplikasi ${method.name} dan konfirmasi pembayaran.`,
            "Struk dikirim ke WhatsApp setelah berhasil.",
          ]
        : [
            `Buka m-banking / ATM ${method.name}.`,
            "Pilih menu Transfer → Virtual Account.",
            "Masukkan nomor VA lalu konfirmasi.",
          ];

  return (
    <main className="relative max-w-6xl mx-auto px-4 py-8 md:py-10">
      <div className="glow w-[420px] h-[420px] -top-32 -right-32"></div>

      <nav className="relative text-sm muted mb-5">
        <Link href="/" className="hover:text-[#2B5288]">
          Beranda
        </Link>{" "}
        /{" "}
        <Link href={`/layanan?s=${order.k}`} className="hover:text-[#2B5288]">
          Layanan
        </Link>{" "}
        / <span className="text-[#16233a]">Pembayaran</span>
      </nav>

      {!paid ? (
        <div
          id="step1"
          className="relative grid lg:grid-cols-[1fr_360px] gap-6 items-start"
        >
          <div className="space-y-5 min-w-0">
            <h1 className="text-2xl md:text-3xl font-extrabold">
              Pilih metode pembayaran
            </h1>

            <div id="pm" className="space-y-5">
              {PAY_GROUPS.map((group) => (
                <div key={group.label} className="card p-5 md:p-6">
                  <h2 className="font-bold mb-3">{group.label}</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {group.methods.map((item) => (
                      <button
                        key={item.name}
                        type="button"
                        className={`opt flex flex-col gap-2 ${method?.name === item.name ? "on" : ""}`}
                        onClick={() => setMethod(item)}
                      >
                        <span
                          className="logo-op self-start"
                          style={{ background: item.color }}
                        >
                          {item.name}
                        </span>
                        <span className="muted text-xs">
                          {item.fee ? `Biaya ${rp(item.fee)}` : "Gratis biaya"}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="card p-5 md:p-6">
              <label htmlFor="wa" className="font-semibold text-sm block mb-2">
                Nomor WhatsApp (untuk struk)
              </label>
              <input
                id="wa"
                className="inp"
                inputMode="numeric"
                placeholder="08xxxxxxxxxx"
                value={wa}
                onChange={(event) => setWa(event.target.value.replace(/\D/g, ""))}
              />
              <p className="muted text-xs mt-2">
                Struk &amp; status transaksi dikirim ke nomor ini.
              </p>
            </div>
          </div>

          <aside className="card p-5 md:p-6 lg:sticky lg:top-24">
            <h2 className="font-bold">Ringkasan pesanan</h2>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between gap-3">
                <span className="muted">Layanan</span>
                <span className="text-right">{order.svc}</span>
              </div>
              <div className="flex justify-between gap-3">
                <span className="muted">Nomor</span>
                <span className="text-right break-all">{order.num}</span>
              </div>
              <div className="flex justify-between gap-3">
                <span className="muted">Produk</span>
                <span className="text-right break-all">{order.prod}</span>
              </div>
              <div className="flex justify-between gap-3">
                <span className="muted">Harga</span>
                <span>{rp(order.price)}</span>
              </div>
              <div className="flex justify-between gap-3">
                <span className="muted">Biaya admin</span>
                <span>{rp(order.adm)}</span>
              </div>
              <div className="flex justify-between gap-3">
                <span className="muted">Biaya metode</span>
                <span>{method ? rp(method.fee) : "-"}</span>
              </div>
              <div className="border-t border-[#d3ccc2] pt-3 flex justify-between">
                <span className="font-semibold">Total</span>
                <span className="fh text-xl font-extrabold or">{rp(total)}</span>
              </div>
            </div>
            <button
              id="pay"
              className="btn w-full mt-5"
              disabled={!canPay}
              onClick={handlePay}
            >
              Bayar Sekarang
            </button>
          </aside>
        </div>
      ) : (
        <div id="step2" className="relative max-w-xl mx-auto">
          <div className="card p-6 md:p-8 text-center">
            <div className="muted text-sm">Nomor invoice</div>
            <div className="fh text-2xl font-extrabold mt-1 break-all">{invoice}</div>

            <div className="mt-5 inline-flex flex-col items-center card px-6 py-4 border-[#2B5288]">
              <div className="muted text-xs">Selesaikan pembayaran dalam</div>
              <div className="fh text-4xl font-extrabold or mt-1">{countdown}</div>
            </div>

            <div className="mt-5 text-left">
              <div className="flex justify-between text-sm">
                <span className="muted">Total bayar</span>
                <span className="fh font-extrabold text-lg">{rp(total)}</span>
              </div>
              <div className="flex justify-between text-sm mt-2">
                <span className="muted">Metode</span>
                <span>{method?.name}</span>
              </div>
            </div>

            <div id="ins" className="mt-5 text-left">
              {method?.name === "QRIS" && (
                <div className="mx-auto w-56 max-w-full bg-white rounded-xl p-2 mb-4">
                  <Image
                    src={QRIS_IMAGE}
                    alt="QRIS pembayaran Rayoza Online"
                    width={1135}
                    height={1600}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              )}

              {va && (
                <div className="card p-3 mb-4 flex justify-between items-center gap-2">
                  <div className="min-w-0">
                    <div className="muted text-xs">
                      No. Virtual Account {method?.name}
                    </div>
                    <div className="fh font-bold text-lg break-all">{va}</div>
                  </div>
                  <button
                    type="button"
                    className="btn2 py-2 text-sm shrink-0"
                    onClick={() => {
                      navigator.clipboard?.writeText(va);
                      setCopied(true);
                    }}
                  >
                    {copied ? "Tersalin" : "Salin"}
                  </button>
                </div>
              )}

              <div className="font-semibold text-sm mb-2">Instruksi pembayaran</div>
              <ol className="space-y-2 text-sm">
                {steps.map((step, index) => (
                  <li key={step} className="flex gap-3">
                    <span className="w-6 h-6 shrink-0 rounded-full bg-[#2B5288] text-white text-xs flex items-center justify-center font-bold">
                      {index + 1}
                    </span>
                    <span className="muted">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 mt-6">
              <Link href="/#cek" className="btn2 flex-1">
                Cek Status
              </Link>
              <Link href="/" className="btn flex-1">
                Kembali ke Beranda
              </Link>
            </div>

            <p className="muted text-xs mt-4">
              Ini simulasi. Belum terhubung ke payment gateway.
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
