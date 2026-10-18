import SiteHeader from "@/components/SiteHeader";
import Logo from "@/components/Logo";
import ServiceCatalog from "@/components/home/ServiceCatalog";
import ServiceShowcase from "@/components/home/ServiceShowcase";
import LiveFeed from "@/components/home/LiveFeed";
import FlashCountdown from "@/components/home/FlashCountdown";
import OrderLookup from "@/components/home/OrderLookup";
import FaqAccordion from "@/components/home/FaqAccordion";

const MARQUEE = [
  "Token PLN",
  "Pulsa Telkomsel",
  "Paket Data XL",
  "BPJS Kesehatan",
  "PDAM",
  "IndiHome",
  "Biznet",
  "DANA",
  "OVO",
  "GoPay",
  "ShopeePay",
  "LinkAja",
  "Indosat",
  "Tri",
  "Smartfren",
  "Adira Finance",
  "FIF Astra",
  "Multifinance",
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <section className="relative grid-bg overflow-hidden">
        <div className="glow w-[520px] h-[520px] -top-40 -left-40"></div>
        <div className="glow w-[420px] h-[420px] top-40 -right-40"></div>
        <div className="relative max-w-6xl mx-auto px-4 py-14 md:py-20 grid lg:grid-cols-[1.15fr_.85fr] gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
              Bayar tagihan tanpa antre, <span className="or">kelar dalam 3 detik.</span>
            </h1>
            <p className="muted mt-5 text-lg max-w-xl">
              Token PLN, pulsa, paket data, BPJS, PDAM, top up e-wallet, tagihan TV &amp;
              internet, sampai angsuran multifinance. Semua beres dari HP, refund otomatis
              kalau gagal, struk langsung masuk WhatsApp.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <a href="#layanan" className="btn">
                Bayar Tagihan →
              </a>
              <a href="#cek" className="btn2">
                Cek Pesanan
              </a>
            </div>
            <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-10 max-w-lg">
              <div className="card p-3 sm:p-4 flex flex-col justify-between min-h-[92px] sm:min-h-[104px]">
                <div className="fh text-xl sm:text-2xl font-extrabold leading-none whitespace-nowrap">
                  2jt+
                </div>
                <div className="muted text-[11px] sm:text-xs leading-snug mt-2">
                  Transaksi sukses
                </div>
              </div>
              <div className="card p-3 sm:p-4 flex flex-col justify-between min-h-[92px] sm:min-h-[104px]">
                <div className="fh text-xl sm:text-2xl font-extrabold leading-none whitespace-nowrap">
                  3 dtk
                </div>
                <div className="muted text-[11px] sm:text-xs leading-snug mt-2">
                  Rata-rata proses
                </div>
              </div>
              <div className="card p-3 sm:p-4 flex flex-col justify-between min-h-[92px] sm:min-h-[104px]">
                <div className="fh text-xl sm:text-2xl font-extrabold leading-none whitespace-nowrap">
                  4.9<span className="or">★</span>
                </div>
                <div className="muted text-[11px] sm:text-xs leading-snug mt-2">
                  Rating pelanggan
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 min-w-0">
            <div className="card p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold">Transaksi terbaru</h3>
                <span className="text-xs text-emerald-600 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 pulse"></span>Live
                </span>
              </div>
              <LiveFeed />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div
                className="card p-5 relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg,#2B5288,#1a3560)",
                  border: "none",
                }}
              >
                <div className="text-white/80 text-xs">Promo pengguna baru</div>
                <div className="fh text-3xl font-extrabold text-white mt-1">Cashback 5%</div>
                <div className="text-white/85 text-xs mt-1">
                  Maks. Rp10.000, semua layanan
                </div>
              </div>
              <div className="card p-5">
                <div className="muted text-xs mb-2">Kenapa Rayoza?</div>
                <ul className="space-y-1.5 text-sm">
                  <li>
                    <span className="or">✓</span> Harga termurah, tanpa biaya tersembunyi
                  </li>
                  <li>
                    <span className="or">✓</span> Gagal? Refund otomatis 100%
                  </li>
                  <li>
                    <span className="or">✓</span> CS siap bantu 24 jam
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-y border-[#d3ccc2] bg-[#ffffff] py-4 overflow-hidden">
        <div className="marq gap-10 text-[#6b7586] fh font-semibold whitespace-nowrap">
          {[...MARQUEE, ...MARQUEE].map((item, index) => (
            <span key={`${item}-${index}`} className="flex items-center gap-10">
              {item}
              <span className="or">✦</span>
            </span>
          ))}
        </div>
      </div>

      <section id="promo" className="max-w-6xl mx-auto px-4 pt-16 scroll-mt-20">
        <div className="card relative overflow-hidden p-6 md:p-10 grid md:grid-cols-2 gap-6 items-center">
          <div className="glow w-96 h-96 -right-20 -top-20"></div>
          <div className="relative">
            <span className="text-xs font-bold or tracking-widest">⚡ FLASH SALE</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
              Token PLN diskon hingga Rp5.000
            </h2>
            <p className="muted mt-2">
              Berlaku untuk semua nominal token. Buruan, waktunya terbatas!
            </p>
            <a href="/layanan?s=pln" className="btn mt-5">
              Ambil Promo
            </a>
          </div>
          <FlashCountdown />
        </div>
      </section>

      <ServiceCatalog />

      <ServiceShowcase />

      <section id="cara" className="max-w-6xl mx-auto px-4 pt-20 scroll-mt-20">
        <h2 className="text-3xl md:text-4xl font-extrabold">Cara order</h2>
        <p className="muted mt-2">Cuma 4 langkah, tanpa daftar akun.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <div className="card hov p-6">
            <div className="fh text-4xl font-extrabold or">01</div>
            <h3 className="font-bold mt-3">Pilih layanan</h3>
            <p className="muted text-sm mt-1">Tentukan produk yang ingin dibayar.</p>
          </div>
          <div className="card hov p-6">
            <div className="fh text-4xl font-extrabold or">02</div>
            <h3 className="font-bold mt-3">Isi nomor</h3>
            <p className="muted text-sm mt-1">Masukkan ID pelanggan atau nomor HP.</p>
          </div>
          <div className="card hov p-6">
            <div className="fh text-4xl font-extrabold or">03</div>
            <h3 className="font-bold mt-3">Bayar</h3>
            <p className="muted text-sm mt-1">QRIS, e-wallet, atau virtual account.</p>
          </div>
          <div className="card hov p-6">
            <div className="fh text-4xl font-extrabold or">04</div>
            <h3 className="font-bold mt-3">Selesai</h3>
            <p className="muted text-sm mt-1">Struk langsung terkirim ke WhatsApp.</p>
          </div>
        </div>
      </section>

      <section id="cek" className="max-w-6xl mx-auto px-4 pt-20 scroll-mt-20">
        <div className="card p-6 md:p-10 relative overflow-hidden">
          <div className="glow w-80 h-80 -left-20 -bottom-32"></div>
          <div className="relative grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-3xl font-extrabold">Cek status pesanan</h2>
              <p className="muted mt-2">
                Masukkan nomor invoice yang kamu terima setelah checkout.
              </p>
            </div>
            <OrderLookup />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pt-20">
        <h2 className="text-3xl md:text-4xl font-extrabold">Kata pelanggan</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          <div className="card hov p-6">
            <div className="or">★★★★★</div>
            <p className="mt-3 text-[#2b3647]">
              &quot;Token PLN masuk kurang dari 5 detik, padahal tengah malam. Mantap!&quot;
            </p>
            <div className="mt-4 font-semibold">Rina A.</div>
            <div className="muted text-xs">Bandung</div>
          </div>
          <div className="card hov p-6">
            <div className="or">★★★★★</div>
            <p className="mt-3 text-[#2b3647]">
              &quot;Bayar BPJS sekeluarga sekaligus 3 bulan, struknya langsung ke WA.&quot;
            </p>
            <div className="mt-4 font-semibold">Dedi S.</div>
            <div className="muted text-xs">Surabaya</div>
          </div>
          <div className="card hov p-6">
            <div className="or">★★★★★</div>
            <p className="mt-3 text-[#2b3647]">
              &quot;Harga paket data lebih murah dari konter. Sekarang langganan di sini.&quot;
            </p>
            <div className="mt-4 font-semibold">Putri M.</div>
            <div className="muted text-xs">Medan</div>
          </div>
        </div>
      </section>

      <section id="faq" className="max-w-3xl mx-auto px-4 pt-20 scroll-mt-20">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center">Pertanyaan umum</h2>
        <FaqAccordion />
      </section>

      <section className="max-w-6xl mx-auto px-4 py-20">
        <div
          className="rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg,#2B5288,#1a3560)" }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Bayar tagihan bulan ini sekarang.
          </h2>
          <p className="text-white/85 mt-2">
            Cepat, aman, dan dapat cashback 5% untuk transaksi pertama.
          </p>
          <a
            href="#layanan"
            className="inline-flex mt-6 bg-white text-[#2B5288] font-semibold rounded-xl px-6 py-3 hover:scale-105 transition"
          >
            Mulai Bayar →
          </a>
        </div>
      </section>

      <footer className="border-t border-[#d3ccc2]">
        <div className="max-w-6xl mx-auto px-4 py-10 grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div className="sm:col-span-2 md:col-span-1">
            <Logo />
            <p className="muted mt-3">
              Platform pembayaran tagihan &amp; produk digital terpercaya.
            </p>
          </div>
          <div>
            <div className="font-semibold mb-3">Layanan</div>
            <div className="space-y-2 muted">
              <a className="block hover:text-[#2B5288]" href="/layanan?s=pln">
                Token PLN
              </a>
              <a className="block hover:text-[#2B5288]" href="/layanan?s=pulsa">
                Pulsa
              </a>
              <a className="block hover:text-[#2B5288]" href="/layanan?s=data">
                Paket Data
              </a>
              <a className="block hover:text-[#2B5288]" href="/layanan?s=bpjs">
                BPJS
              </a>
            </div>
          </div>
          <div>
            <div className="font-semibold mb-3">Bantuan</div>
            <div className="space-y-2 muted">
              <a className="block hover:text-[#2B5288]" href="#cara">
                Cara Order
              </a>
              <a className="block hover:text-[#2B5288]" href="#cek">
                Cek Pesanan
              </a>
              <a className="block hover:text-[#2B5288]" href="#faq">
                FAQ
              </a>
            </div>
          </div>
          <div>
            <div className="font-semibold mb-3">Kontak</div>
            <div className="space-y-2 muted">
              <p>Senin–Minggu, 24 jam</p>
              <p>support@rayozaonline.id</p>
            </div>
          </div>
        </div>
        <div className="text-center muted text-xs pb-8">
          © 2026 Rayoza Online. Semua hak dilindungi.
        </div>
      </footer>
    </>
  );
}
