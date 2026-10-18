import localFont from "next/font/local";

export const inter = localFont({
  src: [
    { path: "../fonts/inter_24pt-regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/inter_24pt-medium.ttf", weight: "500", style: "normal" },
    { path: "../fonts/inter_24pt-semibold.ttf", weight: "600", style: "normal" },
    { path: "../fonts/inter_24pt-bold.ttf", weight: "700", style: "normal" },
    { path: "../fonts/inter_24pt-extrabold.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const jakarta = localFont({
  src: [
    { path: "../fonts/plusjakartasans-medium.ttf", weight: "500", style: "normal" },
    { path: "../fonts/plusjakartasans-semibold.ttf", weight: "600", style: "normal" },
    { path: "../fonts/plusjakartasans-bold.ttf", weight: "700", style: "normal" },
    { path: "../fonts/plusjakartasans-extrabold.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-jakarta",
  display: "swap",
});
