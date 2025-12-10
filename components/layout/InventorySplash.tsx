"use client";
//import * as React from "react";
// temporary splash screen during inventory update - vercel update
import Image from "next/image";
import { usePathname } from "next/navigation";

const EXCLUDED_PATHS = [
  "/studio",
  "/studio/*",
  "/niche",
  "/niche-micro-loc-studio",
  "/niche-booking",
];

function isExcluded(path: string) {
  return EXCLUDED_PATHS.some((excluded) =>
    excluded.endsWith("/*")
      ? path.startsWith(excluded.replace("/*", "/"))
      : path === excluded,
  );
}

export default function InventorySplash() {
  const pathname = usePathname();
  if (isExcluded(pathname)) {
    return null;
  }
  return (
    <div className="fixed flex flex-col justify-center items-center gap-4 w-screen h-screen bg-white z-50 p-8">
      <Image
        src="/Logo_Txt_Col_Blk.svg"
        alt="Maÿaz Collection Logo"
        width={400}
        height={100}
        className="w-full max-w-[300px] mb-12"
      />
      <p className="text-lg md:text-2xl lg:text-3xl uppercase tracking-[0.75em] text-mayazDarker text-center">
        Updating Inventory
      </p>
      <p>...be back soon!</p>
    </div>
  );
}
