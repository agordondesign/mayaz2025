import React from "react";
import Image from "next/image";
//import SetmoreEmbed from "../ui/setmoreEmbed";
import Link from "next/link";

export default function SetmoreFormHeader() {
  return (
    <section className="relative py-12 md:py-0 px-8 md:px-8 lg:px-8 lg:pr-24 bg-black -z-20 mb-4">
      <div className="flex flex-col md:flex-row items-center justify-between md:gap-4 w-full">
        <div className="flex flex-col gap-6 w-full md:w-2/3 lg:px-12 lg:py-24">
          <div>
            <Image
              src="/svg/NICHE - Micro Locs Logo WHT.svg"
              alt="NICHE - Micro Locs Logo"
              width={100}
              height={100}
              className="w-72"
            />
          </div>
          <h2 className="text-white font-semibold text-3xl md:text-4xl lg:text-5xl">
            Neat, full, and endlessly versatile
          </h2>
          <p className="font-medium text-lg lg:text-xl text-white max-w-2xl">
            Microlocs offer luxurious styling tailored to your hair&apos;s
            unique density. Whether thick or fine, achieve the look you love.
            Book now to start your microlocs journey.
          </p>
          <div className="flex flex-col md:flex-row gap-6 mt-4 font-medium">
            <Link
              href="/niche-booking/"
              type="button"
              className="flex justify-center md:justify-start items-center bg-mayazNiche text-white  text-base font-bold px-10 py-3 rounded-full"
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
        <div className="relative flex flex-col bg-mayazNiche text-white rounded-full md:rounded-t-none md:rounded-b-full justify-center items-center text-center text-5xl font-bold gap-4 md:pb-14 md:pt-40 my-12 md:-translate-y-32 md:-translate-x-10 w-72 h-72 md:h-full md:w-1/4 lg:w-1/5 xl:w-1/6 z-10">
          {/*<SetmoreEmbed />*/}
          <div className="flex flex-col gap-0 uppercase relative">
            <div className="text-black text-3xl font-bold mb-3">Book Now</div>
            <div className="flex gap-2 md:gap-0 md:flex-col">
              <div className="">$150</div>
              <div className="tracking-widest">off</div>
            </div>
            <div className="text-3xl">install</div>
            <div className="text-base">exp. 12/31/25</div>
          </div>
          <div className="flex flex-col text-black text-sm uppercase">
            <div>New clients only /</div>
            <div>Limited availability</div>
          </div>
          <div className="hidden flex flex-col items-center justify-center absolute -top-16 -left-16 -rotate-45">
            <div className="w-36 h-36 rounded-full bg-black flex items-center justify-center text-white text-sm text-center font-bold">
              expires
              <br />
              12/31/25
            </div>
          </div>
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
