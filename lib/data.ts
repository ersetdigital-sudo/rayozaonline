import { rp } from "./utils";

export type ServiceKey = "pln" | "pulsa" | "data" | "bpjs" | "pdam";
export type IconKey = ServiceKey | "tv" | "ewallet" | "finance";

export type ProductOption = {
  label: string;
  price: number;
};

export type ServiceDef = {
  title: string;
  desc: string;
  inputLabel: string;
  placeholder: string;
  hint: string;
  adm: number;
  options: ProductOption[];
  min: number;
  isOperator?: boolean;
  region?: boolean;
  optionHeading?: string;
};

const nominal = (values: number[]): ProductOption[] =>
  values.map((value) => ({
    label: rp(value),
    price: value + 1500,
  }));

export const SERVICES: Record<ServiceKey, ServiceDef> = {
  pln: {
    title: "Token & Tagihan PLN",
    desc: "Beli token listrik prabayar atau bayar tagihan pascabayar.",
    inputLabel: "ID Pelanggan / Nomor Meter",
    placeholder: "Contoh: 532110000123",
    hint: "11–12 digit, tertera di kWh meter.",
    adm: 2500,
    options: nominal([20000, 50000, 100000, 200000, 500000, 1000000]),
    min: 11,
  },
  pulsa: {
    title: "Pulsa",
    desc: "Isi pulsa semua operator, masuk dalam hitungan detik.",
    inputLabel: "Nomor HP",
    placeholder: "08xxxxxxxxxx",
    hint: "Operator terdeteksi otomatis dari awalan nomor.",
    adm: 0,
    options: nominal([5000, 10000, 25000, 50000, 100000, 200000]),
    min: 10,
    isOperator: true,
  },
  data: {
    title: "Paket Data",
    desc: "Kuota internet untuk semua operator dengan harga hemat.",
    inputLabel: "Nomor HP",
    placeholder: "08xxxxxxxxxx",
    hint: "Operator terdeteksi otomatis dari awalan nomor.",
    adm: 0,
    options: [
      { label: "3 GB · 7 hari", price: 15000 },
      { label: "10 GB · 30 hari", price: 45000 },
      { label: "25 GB · 30 hari", price: 75000 },
      { label: "50 GB · 30 hari", price: 110000 },
      { label: "Unlimited · 30 hari", price: 150000 },
      { label: "1 GB · 1 hari", price: 5000 },
    ],
    min: 10,
    isOperator: true,
  },
  bpjs: {
    title: "BPJS Kesehatan",
    desc: "Bayar iuran BPJS untuk Anda dan keluarga, 1 hingga 6 bulan.",
    inputLabel: "Nomor VA / No. Peserta",
    placeholder: "Contoh: 8888801234567890",
    hint: "16 digit nomor virtual account keluarga.",
    adm: 2500,
    options: [1, 2, 3, 4, 5, 6].map((b) => ({ label: b + " bulan", price: b * 42000 })),
    min: 13,
    optionHeading: "Pilih jumlah bulan iuran",
  },
  pdam: {
    title: "PDAM",
    desc: "Bayar tagihan air PDAM di berbagai wilayah Indonesia.",
    inputLabel: "ID Pelanggan PDAM",
    placeholder: "Contoh: 0012345678",
    hint: "Lihat di struk/tagihan bulan lalu.",
    adm: 2500,
    options: [
      { label: "Tagihan Okt 2026", price: 87500 },
      { label: "Tagihan Sep + Okt", price: 171000 },
    ],
    min: 6,
    optionHeading: "Pilih tagihan",
    region: true,
  },
};

export const SERVICE_TABS: { key: ServiceKey; label: string }[] = [
  { key: "pln", label: "PLN" },
  { key: "pulsa", label: "Pulsa" },
  { key: "data", label: "Paket Data" },
  { key: "bpjs", label: "BPJS" },
  { key: "pdam", label: "PDAM" },
];

export const OPERATORS: { name: string; color: string; prefixes: string[] }[] = [
  {
    name: "Telkomsel",
    color: "#E4002B",
    prefixes: ["0811", "0812", "0813", "0821", "0822", "0823", "0851", "0852", "0853"],
  },
  {
    name: "Indosat",
    color: "#FFC800",
    prefixes: ["0814", "0815", "0816", "0855", "0856", "0857", "0858"],
  },
  {
    name: "XL",
    color: "#0058A9",
    prefixes: ["0817", "0818", "0819", "0859", "0877", "0878"],
  },
  {
    name: "Axis",
    color: "#7A2A90",
    prefixes: ["0831", "0832", "0833", "0838"],
  },
  {
    name: "Tri",
    color: "#E5007E",
    prefixes: ["0895", "0896", "0897", "0898", "0899"],
  },
  {
    name: "Smartfren",
    color: "#E4006C",
    prefixes: ["0881", "0882", "0883", "0884", "0885", "0886", "0887", "0888", "0889"],
  },
];

export const PDAM_REGIONS = [
  "PDAM Kota Bandung",
  "PAM Jaya (DKI Jakarta)",
  "PDAM Surya Sembada Surabaya",
  "PDAM Tirtanadi Medan",
  "PDAM Kota Semarang",
  "PDAM Tirta Pakuan Bogor",
];

export type PayMethod = {
  name: string;
  color: string;
  fee: number;
  group: string;
};

export const PAY_GROUPS: { label: string; methods: PayMethod[] }[] = [
  {
    label: "QRIS",
    methods: [{ name: "QRIS", color: "#222", fee: 0, group: "QRIS" }],
  },
  {
    label: "E-Wallet",
    methods: [
      { name: "DANA", color: "#118EEA", fee: 1000, group: "E-Wallet" },
      { name: "OVO", color: "#4C3494", fee: 1000, group: "E-Wallet" },
      { name: "GoPay", color: "#00AED6", fee: 1000, group: "E-Wallet" },
      { name: "ShopeePay", color: "#EE4D2D", fee: 1000, group: "E-Wallet" },
    ],
  },
  {
    label: "Virtual Account",
    methods: [
      { name: "BCA", color: "#005EAA", fee: 4000, group: "Virtual Account" },
      { name: "BRI", color: "#00529C", fee: 4000, group: "Virtual Account" },
      { name: "Mandiri", color: "#003D79", fee: 4000, group: "Virtual Account" },
      { name: "BNI", color: "#F15A23", fee: 4000, group: "Virtual Account" },
    ],
  },
];

export const VA_PREFIX: Record<string, string> = {
  BCA: "39358",
  BRI: "26215",
  Mandiri: "89508",
  BNI: "98829",
};
