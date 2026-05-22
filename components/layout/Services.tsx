import * as React from "react";
import { CircleCheckBig } from "lucide-react";

/*type ComponentNameProps = {
  propName: string;
};
*/

export default function ComponentName() {
  return (
    <section className="flex flex-col gap-4 w-full p-4 lg:px-16 lg:p-8">
      <header className="space-y-4 mb-8">
        <h3 className="text-lg font-bold text-mayazNiche uppercase">
          Services
        </h3>

        <h1 className="text-3xl font-bold uppercase">Micro Locs Serv</h1>
        <p className="text-base max-w-lg">
          Please note that every new client to Niche must book a consultation
          before your initial service.
        </p>
      </header>
      <div className="flex flex-col lg:flex-row gap-4 w-full">
        <div className="flex flex-col gap-4 border-2 border-mayazNiche/50 hover:border-mayazNiche/100 hover:border-3 transition ease-in-out duration-300 rounded-lg w-full">
          <div className="flex flex-col gap-4 px-6 pt-8 pb-4">
            <h4 className="text-lg text-gray-800 font-semibold">
              Starter Loc Journey
            </h4>
            <p className="text-5xl font-bold">$500+</p>
            <div className="flex flex-col">
              <span className="text-sm">*Prior consultation required</span>
              <span className="text-sm">
                Starting at 4 inches of hair, with $35 for each additional inch
              </span>
            </div>
            <hr />
            <div className="w-full space-y-4">
              <div className="flex gap-2">
                <div>
                  <CircleCheckBig color="#FF4E2A" />
                </div>
                <div className="flex flex-col w-full">
                  <p className="text-sm font-medium">
                    Signature Interloc Micro Loc Experience
                  </p>
                  <span className="text-xs text-gray-500">
                    Micro Locs installation requires a minimum of two days
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <div>
                  <CircleCheckBig color="#FF4E2A" />
                </div>
                <div className="flex flex-col w-full">
                  <p className="text-sm font-medium">
                    Youth Signature Interloc Micro Loc Experience
                  </p>
                  <span className="text-xs text-gray-500">
                    Micro Locs installation requires a minimum of two days (up
                    to 200 locs), and is limited to ages up to 13 years
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <div>
                  <CircleCheckBig color="#FF4E2A" />
                </div>
                <div className="flex flex-col w-full">
                  <p className="text-sm font-medium">
                    Elegant Two-Strand Twist Micro Locs
                  </p>
                  <span className="text-xs text-gray-500">
                    Micro Locs installation requires a minimum of two days
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <div>
                  <CircleCheckBig color="#FF4E2A" />
                </div>
                <div className="flex flex-col w-full">
                  <p className="text-sm font-medium">
                    Artisanal Braided Micro Locs
                  </p>
                  <span className="text-xs text-gray-500">
                    Micro Locs installation requires a minimum of two days
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-8 flex flex-col text-sm">
            <span className="text-xs">Includes:</span>
            <p> - Love Your Locs Starter Kit</p>
            <p> - Hydrating Steam Infusion</p>
            <p> - Scalp Massage</p>
            <p> - Post-Installation Aftercare Blueprint</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-2 border-black/30 hover:border-black/100 hover:border-3 transition ease-in-out duration-300 rounded-lg w-full">
          <div className="flex flex-col gap-4 px-6 pt-8 pb-4">
            <h4 className="text-lg text-gray-800 font-semibold">
              Maintenance Services
            </h4>

            <div className="w-full space-y-4">
              <div className="flex gap-2">
                <div className="flex flex-col gap-1 w-full">
                  <p className="text-3xl font-bold">$205</p>
                  <p className="text-base font-medium leading-tight">
                    High-Density Micro Locs Retie
                  </p>
                  <span className="text-xs text-gray-500">
                    Base Rate (starting at 300 locs)
                  </span>
                  <span className="text-xs text-gray-500">
                    Additional $30 per each additional 100 locs
                  </span>
                </div>
              </div>
              <hr />
              <div className="flex gap-2">
                <div className="flex flex-col gap-1 w-full">
                  <p className="text-3xl font-bold">$15/loc</p>
                  <p className="text-base font-medium leading-tight">
                    Loc Reattachment / Repair / Hole Maintenance
                  </p>
                  <span className="text-xs text-gray-500">Base Price</span>
                  <span className="text-xs text-gray-500">
                    Price is based on the client&apos;s specific issue and is
                    subject to change
                  </span>
                </div>
              </div>
              <hr />
              <div className="flex gap-2">
                <div className="flex flex-col gap-1 w-full">
                  <p className="text-3xl font-bold">$175</p>
                  <p className="text-base font-medium leading-tight">
                    Precision Retightening &amp; Detailed Shampoo Service
                  </p>
                  <span className="text-xs text-gray-500">
                    Loc retie 4-8 weeks. Standard retie (up to 300 locs)
                  </span>
                  <span className="text-xs text-gray-500">
                    **Past due reties will incur a per weekly fee for each week
                    over schedule
                  </span>
                  <span className="text-xs text-gray-500">
                    Detailed Shampoo Service Enjoy a triple cleanse for optimal
                    scalp and hair health: a deep clarifying shampoo, a
                    hydrating shampoo, and a custom treatment tailored to your
                    specific needs (dry scalp, dandruff, and more)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-2 border-gray-300/50 hover:border-gray-300/100 hover:border-3 transition ease-in-out duration-300 rounded-lg w-full">
          <div className="flex flex-col gap-4 px-6 pt-8 pb-4">
            <h4 className="text-lg text-gray-800 font-semibold">
              Scalp &amp; Hair Extras
            </h4>

            <div className="w-full space-y-4">
              <div className="flex gap-2">
                <div className="flex flex-col gap-1 w-full">
                  <p className="text-3xl font-bold">$75</p>
                  <p className="text-sm font-medium leading-tight">
                    Flexi Rod Set and Style
                  </p>
                </div>
              </div>
              <hr />
              <div className="flex gap-2">
                <div className="flex flex-col gap-1 w-full">
                  <p className="text-3xl font-bold">$30</p>
                  <p className="text-sm font-medium leading-tight">
                    Hydrating Steam Infusion
                  </p>
                  <span className="text-xs text-gray-500">
                    Replenish dry hair
                  </span>
                </div>
              </div>
              <hr />
              <div className="flex gap-2">
                <div className="flex flex-col gap-1 w-full">
                  <p className="text-3xl font-bold">$165</p>
                  <p className="text-sm font-medium leading-tight">
                    Permanent Loc Color
                  </p>
                  <span className="text-xs text-gray-500">Base Price</span>
                  <span className="text-xs text-gray-500">
                    Price subject to change based on length and # of locs.
                  </span>
                </div>
              </div>
              <hr />
              <div className="flex gap-2">
                <div className="flex flex-col gap-1 w-full">
                  <p className="text-3xl font-bold">$40</p>
                  <p className="text-sm font-medium leading-tight">ACV Soak</p>
                  <span className="text-xs text-gray-500">
                    Removes lint and product build-up in locs
                  </span>
                </div>
              </div>
              <hr />
              <div className="flex gap-2">
                <div className="flex flex-col gap-1 w-full">
                  <p className="text-3xl font-bold">$35</p>
                  <p className="text-sm font-medium leading-tight">
                    Hydrating Steam Infusion Hot Oil Treatment
                  </p>
                  <span className="text-xs text-gray-500">
                    Replenish dry hair
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
