import type { Metadata } from "next";
import { Suspense } from "react";
import SiteHeader from "@/components/SiteHeader";
import LayananClient from "./LayananClient";

export const metadata: Metadata = {
  title: "Layanan – Rayoza Online",
};

export default function LayananPage() {
  return (
    <div className="grid-bg min-h-screen">
      <SiteHeader />
      <Suspense fallback={null}>
        <LayananClient />
      </Suspense>
    </div>
  );
}
