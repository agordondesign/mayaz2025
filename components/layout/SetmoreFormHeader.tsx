import React from "react";
import Image from "next/image";
import SetmoreEmbed from "../ui/setmoreEmbed";
import Link from "next/link";

export default function SetmoreFormHeader() {
  return (
    <section className="relative py-12 md:py-0 px-8 md:px-8 lg:px-8 lg:pr-24 bg-black -z-20 lg:max-h-[600px] mb-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
        <div className="flex flex-col gap-4 w-full md:w-1/2 lg:w-2/3 lg:p-12 md:-mt-24">
          <h2 className="text-white font-semibold text-4xl md:text-5xl lg:text-6xl">
            Neat, full, and endlessly versatile
          </h2>
          <p className="font-medium text-lg lg:text-xl text-white max-w-2xl">
            Microlocs offer luxurious styling tailored to your hair&apos;s
            unique density. Whether thick or fine, achieve the look you love.
            Book now to start your microlocs journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 mt-4 font-medium">
            <Link
              href="/niche-booking/"
              type="button"
              className="flex justify-center md:justify-start items-center bg-mayazNiche text-white text-base font-medium px-10 py-3 rounded-full"
            >
              Book Now
            </Link>
            <Link
              href="/niche/"
              type="button"
              className="flex justify-center md:justify-start items-center bg-transparent border-2 border-white text-white text-base font-medium px-10 py-3 rounded-full"
            >
              Shop Products
            </Link>
          </div>
        </div>
        <div className="hidden my-12 md:block w-full md:w-1/2 lg:w-1/3 z-10">
          <SetmoreEmbed />
        </div>
      </div>
      <Image
        src="/svg/texture.svg"
        alt="texture"
        width={2000}
        height={700}
        className="absolute object-cover object-center left-1 top-0 w-full h-full opacity-20 -z-10"
      />
      <Image
        src="/webp/img_7073-squashed-squashed.webp"
        alt="Professional services"
        width={774}
        height={516}
        className="absolute inset-0 object-cover w-full h-full opacity-40 -z-10"
      />
    </section>
  );
}
