"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Icon from "@/components/Icon";
import {
  OPERATORS,
  PDAM_REGIONS,
  SERVICES,
  SERVICE_TABS,
  type ServiceKey,
} from "@/lib/data";
import { rp } from "@/lib/utils";

export default function LayananClient() {
  const params = useSearchParams();
  const raw = params.get("s") || "pln";
  const key: ServiceKey = raw in SERVICES ? (raw as ServiceKey) : "pln";

  return <ServiceForm key={key} serviceKey={key} />;
}

function ServiceForm({ serviceKey }: { serviceKey: ServiceKey }) {
  const router = useRouter();
  const service = SERVICES[serviceKey];

  const [selected, setSelected] = useState<number | null>(null);
  const [num, setNum] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    document.title = service.title + " – Rayoza Online";
  }, [service.title]);

  const digits = num.replace(/\D/g, "");
  const operator =
    service.isOperator && digits.length >= 4
      ? OPERATORS.find((item) => item.prefixes.includes(digits.slice(0, 4)))
      : undefined;

  const option = selected === null ? null : service.options[selected];
  const productLabel = option
    ? option.label + (operator ? ` (${operator.name})` : "")
    : "-";

  const total = rp((option?.price ?? 0) + (option ? service.adm : 0));
  const disabled = !(
    option &&
    digits.length >= service.min &&
    (!service.isOperator || operator) &&
    (!service.region || region)
  );

  const handlePay = () => {
    if (!option) return;

    try {
      localStorage.setItem(
        "nxOrder",
        JSON.stringify({
          svc: service.title,
          k: serviceKey,
          num: digits,
          prod:
            option.label +
            (operator ? ` (${operator.name})` : "") +
            (service.region ? ` · ${region}` : ""),
          price: option.price,
          adm: service.adm,
        }),
      );
    } catch {
      /* storage unavailable */
    }

    router.push("/bayar");
  };

  return (
    <main className="relative max-w-6xl mx-auto px-4 py-8 md:py-10">
      <div className="glow w-[420px] h-[420px] -top-32 -left-32"></div>

      <div id="tabs" className="relative hidden md:flex flex-wrap gap-2 mb-8">
        {SERVICE_TABS.map((tab) => (
          <Link
            key={tab.key}
            href={`/layanan?s=${tab.key}`}
            className={`chip flex items-center gap-2 ${tab.key === serviceKey ? "on" : ""}`}
          >
            <span className="ico w-6 h-6 rounded-md">
              <Icon name={tab.key} />
            </span>
            {tab.label}
          </Link>
        ))}
      </div>

      <nav className="relative text-sm muted mb-5">
        <Link href="/" className="hover:text-[#2B5288]">
          Beranda
        </Link>{" "}
        /{" "}
        <Link href="/#layanan" className="hover:text-[#2B5288]">
          Layanan
        </Link>{" "}
        / <span className="text-[#16233a]">{service.title}</span>
      </nav>

      <div className="relative grid lg:grid-cols-[1fr_360px] gap-6 items-start">
        <div className="space-y-5 min-w-0">
          <div className="card p-5 md:p-6 flex gap-4 items-center">
            <div className="ico w-16 h-16 md:w-20 md:h-20 shrink-0 object-cover">
              <Icon name={serviceKey} />
            </div>
            <div className="min-w-0">
              <h1 className="text-2xl md:text-3xl font-extrabold">{service.title}</h1>
              <p className="muted text-sm mt-1">{service.desc}</p>
            </div>
          </div>

          <div className="card p-5 md:p-6">
            <label htmlFor="num" className="font-semibold text-sm block mb-2">
              {service.inputLabel}
            </label>
            <div className="relative">
              <input
                id="num"
                className="inp pr-28"
                inputMode="numeric"
                placeholder={service.placeholder}
                value={digits}
                onChange={(event) => setNum(event.target.value.replace(/\D/g, ""))}
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2">
                {operator && (
                  <span
                    className="logo-op"
                    style={{
                      background: operator.color,
                      color: operator.name === "Indosat" ? "#111" : undefined,
                    }}
                  >
                    {operator.name}
                  </span>
                )}
              </div>
            </div>
            <p className="muted text-xs mt-2">{service.hint}</p>

            {service.region && (
              <div className="mt-4">
                <label htmlFor="reg" className="font-semibold text-sm block mb-2">
                  Wilayah PDAM
                </label>
                <select
                  id="reg"
                  className="inp"
                  value={region}
                  onChange={(event) => setRegion(event.target.value)}
                >
                  <option value="">Pilih wilayah</option>
                  {PDAM_REGIONS.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </div>
            )}
          </div>

          <div className="card p-5 md:p-6">
            <h2 className="font-bold mb-4">{service.optionHeading ?? "Pilih nominal"}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {service.options.map((item, index) => (
                <button
                  key={item.label}
                  type="button"
                  className={`opt ${selected === index ? "on" : ""}`}
                  onClick={() => setSelected(index)}
                >
                  <div className="font-semibold text-sm">{item.label}</div>
                  <div className="or fh font-bold mt-1">{rp(item.price)}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <aside className="card p-5 md:p-6 lg:sticky lg:top-24">
          <h2 className="font-bold">Ringkasan pesanan</h2>
          <div className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between gap-3">
              <span className="muted">Layanan</span>
              <span className="text-right">{service.title}</span>
            </div>
            <div className="flex justify-between gap-3">
              <span className="muted">Nomor</span>
              <span className="text-right break-all">{digits || "-"}</span>
            </div>
            <div className="flex justify-between gap-3">
              <span className="muted">Produk</span>
              <span className="text-right">{productLabel}</span>
            </div>
            <div className="flex justify-between gap-3">
              <span className="muted">Harga</span>
              <span>{option ? rp(option.price) : "-"}</span>
            </div>
            <div className="flex justify-between gap-3">
              <span className="muted">Biaya admin</span>
              <span>{rp(service.adm)}</span>
            </div>
            <div className="border-t border-[#d3ccc2] pt-3 flex justify-between">
              <span className="font-semibold">Total</span>
              <span className="fh text-xl font-extrabold or">{total}</span>
            </div>
          </div>
          <button
            id="go"
            className="btn w-full mt-5"
            disabled={disabled}
            onClick={handlePay}
          >
            Lanjut Bayar →
          </button>
          <p className="muted text-xs mt-3 text-center">Harga contoh, dapat berubah.</p>
        </aside>
      </div>
    </main>
  );
}
