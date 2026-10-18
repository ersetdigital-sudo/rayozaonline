import localFont from "next/font/local";

export const inter = localFont({
  src: [
    { path: "../fonts/inter_24pt-regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/inter_24pt-medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/inter_24pt-semibold.woff2", weight: "600", style: "normal" },
    { path: "../fonts/inter_24pt-bold.woff2", weight: "700", style: "normal" },
    { path: "../fonts/inter_24pt-extrabold.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const jakarta = localFont({
  src: [
    { path: "../fonts/plusjakartasans-medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/plusjakartasans-semibold.woff2", weight: "600", style: "normal" },
    { path: "../fonts/plusjakartasans-bold.woff2", weight: "700", style: "normal" },
    { path: "../fonts/plusjakartasans-extrabold.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-jakarta",
  display: "swap",
});
