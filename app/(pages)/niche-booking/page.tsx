import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function Page() {
  return (
    <div>
      <section className="flex flex-col gap-8 w-full mt-2 text-sm">
        <div className="relative w-auto h-auto bg-transparent">
          <div className="relative flex justify-center items-center z-10 w-full min-h-full">
            <div className="relative flex flex-col items-center justify-center gap-8 p-20 py-16 bg-black w-full overflow-hidden">
              <Image
                src="/svg/micro-locs-studio.svg"
                alt="Niche Micro Locs Studio"
                width={200}
                height={100}
                style={{
                  objectFit: "contain",
                }}
                className="w-full max-w-[800px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] h-auto z-10"
              />
              <div className="z-10">
                <p className="text-sm lg:text-xl text-white">
                  Micro Loc installation, reties, maintenance, and more!
                </p>
                <div className="flex flex-col justify-center items-center sm:flex-row gap-6 mt-4 font-medium">
                  <Link
                    href="/niche-micro-loc-studio/"
                    type="button"
                    className="flex justify-center md:justify-start items-center bg-mayazNiche text-white text-base font-medium px-10 py-3 rounded-full"
                  >
                    Learn More
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
              <Image
                src="/svg/texture.svg"
                alt="texture"
                width={2000}
                height={700}
                className="absolute object-cover object-center left-1 top-0 w-full h-full opacity-60"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="h-screen">
        <Suspense fallback={<div>Loading...</div>}>
          <iframe
            src="https://niche.setmore.com"
            width="100%"
            height="100%"
            title="Niche Setmore Booking"
            className="border-0 h-full w-full"
            scrolling="yes"
          />
        </Suspense>
      </div>
    </div>
  );
}
