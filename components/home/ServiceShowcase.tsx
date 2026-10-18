import Link from "next/link";
import Icon from "@/components/Icon";
import { FINANCE_PROVIDERS, TV_PROVIDERS } from "@/lib/data";

const WALLETS = [
  { name: "DANA", color: "#118EEA" },
  { name: "OVO", color: "#4C3494" },
  { name: "GoPay", color: "#00AED6" },
  { name: "ShopeePay", color: "#EE4D2D" },
  { name: "LinkAja", color: "#E82529" },
];

function Arrow() {
  return <span aria-hidden="true">→</span>;
}

export default function ServiceShowcase() {
  return (
    <section id="ekosistem" className="max-w-6xl mx-auto px-4 pt-20 scroll-mt-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-bold or tracking-widest">EKOSISTEM RAYOZA</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
            Lebih dari sekadar bayar tagihan
          </h2>
          <p className="muted mt-2 max-w-xl">
            Top up e-wallet, bayar TV &amp; internet, sampai angsuran multifinance. Semua
            dalam satu tempat, tanpa antre.
          </p>
        </div>
        <Link href="#layanan" className="btn2 text-sm shrink-0">
          Lihat semua layanan <Arrow />
        </Link>
      </div>

      <div className="grid lg:grid-cols-[1.2fr_.8fr] gap-4 mt-8">
        <div
          className="relative overflow-hidden rounded-3xl p-6 md:p-8 text-white"
          style={{ background: "linear-gradient(135deg,#2B5288,#16315a)" }}
        >
          <div className="glow w-80 h-80 -right-24 -top-24"></div>
          <div className="relative">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.16em] bg-white/10 border border-white/15 rounded-full px-3 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Top up instan
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold mt-4">
              E-Wallet, saldo langsung masuk
            </h3>
            <p className="text-white/75 text-sm mt-2 max-w-md">
              Pilih penyedia favoritmu, masukkan nomor terdaftar, dan saldo masuk dalam
              hitungan detik. Tanpa biaya admin.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-5">
              {WALLETS.map((wallet) => (
                <Link
                  key={wallet.name}
                  href="/layanan?s=ewallet"
                  className="wallet-tile"
                >
                  <span className="dot" style={{ background: wallet.color }}></span>
                  {wallet.name}
                </Link>
              ))}
            </div>

            <Link
              href="/layanan?s=ewallet"
              className="inline-flex items-center gap-2 mt-6 bg-white text-[#2B5288] font-bold rounded-xl px-5 py-3 hover:scale-[1.03] transition"
            >
              Top up sekarang <Arrow />
            </Link>

            <div className="grid grid-cols-3 gap-3 mt-7 pt-5 border-t border-white/15">
              <div>
                <div className="fh text-2xl font-extrabold">5</div>
                <div className="text-[11px] text-white/60">Penyedia e-wallet</div>
              </div>
              <div>
                <div className="fh text-2xl font-extrabold">3 dtk</div>
                <div className="text-[11px] text-white/60">Rata-rata top up</div>
              </div>
              <div>
                <div className="fh text-2xl font-extrabold">Rp0</div>
                <div className="text-[11px] text-white/60">Biaya admin</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <Link
            href="/layanan?s=tv"
            className="card hov p-6 relative overflow-hidden block group"
          >
            <div className="flex items-start justify-between gap-3">
              <span className="ico w-12 h-12">
                <Icon name="tv" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.14em] muted">
                Tagihan rumah
              </span>
            </div>
            <h3 className="text-xl font-extrabold mt-4">TV &amp; Internet</h3>
            <p className="muted text-sm mt-1">
              IndiHome, First Media, Biznet, MyRepublic, dan lainnya.
            </p>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {TV_PROVIDERS.map((provider) => (
                <span key={provider} className="tag">
                  {provider}
                </span>
              ))}
            </div>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold or mt-4">
              Bayar tagihan <Arrow />
            </span>
          </Link>

          <Link
            href="/layanan?s=finance"
            className="card hov p-6 relative overflow-hidden block group"
          >
            <div className="flex items-start justify-between gap-3">
              <span className="ico w-12 h-12">
                <Icon name="finance" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.14em] muted">
                Cicilan kendaraan
              </span>
            </div>
            <h3 className="text-xl font-extrabold mt-4">Multifinance</h3>
            <p className="muted text-sm mt-1">
              Bayar angsuran motor, mobil, dan pinjaman tanpa antre.
            </p>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {FINANCE_PROVIDERS.slice(0, 4).map((provider) => (
                <span key={provider} className="tag">
                  {provider}
                </span>
              ))}
            </div>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold or mt-4">
              Bayar angsuran <Arrow />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
