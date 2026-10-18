import type { Metadata } from "next";
import { inter, jakarta } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rayoza Online – Bayar Tagihan & Produk Digital",
  description:
    "Bayar token PLN, pulsa, paket data, BPJS, PDAM, tagihan TV & internet, top up e-wallet, dan angsuran multifinance tanpa antre. Harga hemat, refund otomatis, struk langsung ke WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className={`${inter.variable} ${jakarta.variable}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
