"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { rp } from "@/lib/utils";

type SavedOrder = {
  inv: string;
  prod: string;
  total: number;
};

export default function OrderLookup() {
  const [invoice, setInvoice] = useState("");
  const [result, setResult] = useState<ReactNode>(null);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = invoice.trim();

    if (!value) {
      setResult(<span className="text-red-600">Masukkan nomor invoice.</span>);
      return;
    }

    let saved: SavedOrder | null = null;
    try {
      saved = JSON.parse(localStorage.getItem("nxLast") || "null");
    } catch {
      saved = null;
    }

    setResult(
      saved && saved.inv === value.toUpperCase() ? (
        <div className="card p-3">
          <b>{saved.inv}</b> · {saved.prod}
          <br />
          <span className="text-amber-600">Menunggu pembayaran</span> · {rp(saved.total)}
        </div>
      ) : (
        <div className="card p-3">
          <b>{value.toUpperCase()}</b>
          <br />
          <span className="text-emerald-600">Sukses</span> · Transaksi telah diproses (simulasi)
        </div>
      ),
    );
  };

  return (
    <div>
      <form id="cekf" className="flex flex-col sm:flex-row gap-2" onSubmit={submit}>
        <input
          id="inv"
          className="inp"
          placeholder="Contoh: RYZ-20261018-4821"
          value={invoice}
          onChange={(event) => setInvoice(event.target.value)}
        />
        <button className="btn shrink-0">Cek</button>
      </form>
      <div id="cekr" className="mt-3 text-sm">
        {result}
      </div>
    </div>
  );
}
