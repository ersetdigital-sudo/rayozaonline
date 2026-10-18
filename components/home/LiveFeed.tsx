"use client";

import { useEffect, useState } from "react";
import Icon from "@/components/Icon";
import type { IconKey } from "@/lib/data";

type FeedItem = {
  id: number;
  name: string;
  product: string;
  icon: IconKey;
};

const NAMES = ["Andi", "Siti", "Budi", "Dewi", "Rizky", "Ayu", "Fajar", "Nina", "Yoga", "Lina"];

const PRODUCTS: { label: string; icon: IconKey }[] = [
  { label: "Token PLN 50rb", icon: "pln" },
  { label: "Pulsa 25rb", icon: "pulsa" },
  { label: "Data 10GB", icon: "data" },
  { label: "BPJS 2 bln", icon: "bpjs" },
  { label: "PDAM", icon: "pdam" },
  { label: "DANA 100rb", icon: "ewallet" },
];

function randomItem(): FeedItem {
  const product = PRODUCTS[Math.floor(Math.random() * PRODUCTS.length)];
  return {
    id: Date.now() + Math.random(),
    name: NAMES[Math.floor(Math.random() * NAMES.length)],
    product: product.label,
    icon: product.icon,
  };
}

export default function LiveFeed() {
  const [items, setItems] = useState<FeedItem[]>([]);

  useEffect(() => {
    const add = () =>
      setItems((previous) => [randomItem(), ...previous].slice(0, 4));

    add();
    add();
    add();
    add();

    const timer = setInterval(add, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="feed" className="space-y-2">
      {items.map((item) => (
        <div
          key={item.id}
          className="feed-item flex items-center gap-3 bg-[#ffffff] border border-[#d3ccc2] rounded-xl p-2.5"
        >
          <span className="ico w-9 h-9 rounded-lg shrink-0">
            <Icon name={item.icon} />
          </span>
          <div className="min-w-0 flex-1">
            <div className="text-sm font-medium truncate">
              {item.name}*** · {item.product}
            </div>
            <div className="muted text-xs">baru saja</div>
          </div>
          <span className="text-xs text-emerald-600 font-semibold">Sukses</span>
        </div>
      ))}
    </div>
  );
}
