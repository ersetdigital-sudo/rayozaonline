import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import BayarClient from "./BayarClient";

export const metadata: Metadata = {
  title: "Pembayaran – Rayoza Online",
};

export default function BayarPage() {
  return (
    <div className="grid-bg min-h-screen">
      <SiteHeader />
      <BayarClient />
    </div>
  );
}
