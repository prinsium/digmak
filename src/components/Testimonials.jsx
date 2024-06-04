import Image from "next/image";

export default function Testimonials() {
  return (
    <div className="mx-2 sm:mx-4 md:mx-12 lg:mx-24">

      <div className="flex flex-col gap-6 p-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          <div className="flex justify-start">
            <h2 className="text-slate-100">Our Happy Clients</h2>
          </div>

          <div className="flex justify-start translate-y-0 md:translate-y-8">
            <p className="text-slate-100">
              We are a bunch of young, passionate trendsetters who are led by
              some of the most credible names in the industry. So when you tap
              onto the digital universe with us, we ensure you are heard without
              getting lost in the trends
            </p>
          </div>
        </div>

        <div>

        </div>

      </div>

      <div className="py-2 md:py-8 bg-gray-400 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-inner shadow-zinc-600">
        <div className="overflow-hidden flex flex-row gap-12">
            <div className="inline-block animate-marquee">
              <div className="flex flex-col justify-between p-6 shadow-lg rounded-2xl">


                <div class="flex items-center gap-6">
                  <Image src="/asset/beehiv.svg" width={200} height={200} alt="beehiv" />
                  <Image src="/asset/dot.svg" width={40} height={40} alt="dot" />

                  <Image src="/asset/bmc.svg" width={200} height={200} alt="bmc" />
                  <Image src="/asset/dot.svg" width={40} height={40} alt="dot" />

                  <Image src="/asset/dark.svg" width={200} height={200} alt="dark" />
                  <Image src="/asset/dot.svg" width={40} height={40} alt="dot" />

                  <Image src="/asset/frame.svg" width={200} height={200} alt="frame" />
                  <Image src="/asset/dot.svg" width={40} height={40} alt="dot" />

                  <Image src="/asset/nectar.svg" width={200} height={200} alt="nectar" />
                  <Image src="/asset/dot.svg" width={40} height={40} alt="dot" />

                  <Image src="/asset/vector.svg" width={200} height={200} alt="vector" />
                  <Image src="/asset/dot.svg" width={40} height={40} alt="dot" />

                  <Image src="/asset/beehiv.svg" width={200} height={200} alt="beehiv" />
                  <Image src="/asset/dot.svg" width={40} height={40} alt="dot" />

                  <Image src="/asset/bmc.svg" width={200} height={200} alt="bmc" />
                  <Image src="/asset/dot.svg" width={40} height={40} alt="dot" />

                  <Image src="/asset/dark.svg" width={200} height={200} alt="dark" />
                  <Image src="/asset/dot.svg" width={40} height={40} alt="dot" />

                  <Image src="/asset/frame.svg" width={200} height={200} alt="frame" />
                  <Image src="/asset/dot.svg" width={40} height={40} alt="dot" />

                  <Image src="/asset/nectar.svg" width={200} height={200} alt="nectar" />
                  <Image src="/asset/dot.svg" width={40} height={40} alt="dot" />

                  <Image src="/asset/vector.svg" width={200} height={200} alt="vector" />
                  <Image src="/asset/dot.svg" width={40} height={40} alt="dot" />
                </div>

              </div>
            </div>
        </div>
      </div>

    </div>
  );
}
