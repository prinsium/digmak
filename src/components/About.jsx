import Image from "next/image";

export default function About() {
  return (
    <div className="mx-2 sm:mx-4 md:mx-12 lg:mx-24">
      <div className="flex flex-col gap-6 p-8">
        <div className="flex flex-col justify-center">
          <div className="flex justify-start translate-y-8 translate-x-0 sm:translate-y-8 sm:translate-x-8 md:translate-y-14 md:translate-x-14 z-30">
            <button className="w-fit h-fit translate-y-0 md:-translate-y-6 group flex flex-row justify-between items-center rounded-full bg-red-600 text-gray-100 text-2xl p-3 gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#dc2626"
                class="size-8 rounded-full bg-gray-100 p-2 group-hover:-rotate-45 transition delay-150"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
              <div className="hidden md:block group-hover:-translate-x-1 -translate-y-0.5 transition delay-150">
                Contact
              </div>
            </button>
          </div>

<div className="relative rounded-3xl w-fit gap-x-4">

<div className="absolute rounded-3xl w-full h-full flex justify-center items-center z-10">
<img className='rounded-3xl object-contain w-[30vw] h-[30vw] transform hover:rotate-y-12 hover:rotate-x-12 transition delay-300 duration-300 ease-in-out' src="/asset/Path.svg" alt="imagel" />
</div>

<div className="w-fit h-fit">
    <img className="rounded-3xl md:rounded-[2.5rem] object-contain w-[90] h-[90]" src="/asset/cvr.jpg" alt="image" />
</div>
</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          <div className="flex justify-start">
            <h2 className="text-slate-100">We deliver for your need</h2>
          </div>

          <div className="flex justify-start translate-y-0 md:translate-y-8">
            <p className="text-slate-100">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
              exercitationem voluptatem ipsa cupiditate quia maiores labore
              blanditiis accusamus qui tempore.
            </p>
          </div>
        </div>

        <div></div>
      </div>

      <div className="flex flex-row justify-between px-8">
        <div className="flex flex-col items-start sm:items-center">
          <div className="flex flex-row">
            <h2 className="text-slate-100">100</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              stroke-width="12"
              stroke="#dc2626"
              fill="none"
              class="size-[4vw]"
            >
              <path d="M32 7v50M7 32h50"></path>
            </svg>
          </div>
          <p className="text-slate-100">Happy Customers</p>
        </div>

        <div className="flex flex-col items-start sm:items-center">
          <div className="flex flex-row">
            <h2 className="text-slate-100">400</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              stroke-width="12"
              stroke="#dc2626"
              fill="none"
              class="size-[4vw]"
            >
              <path d="M32 7v50M7 32h50"></path>
            </svg>
          </div>
          <p className="text-slate-100">Successful Projects</p>
        </div>

        <div className="flex flex-col items-start sm:items-center">
          <div className="flex flex-row">
            <h2 className="text-slate-100">500</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              stroke-width="12"
              stroke="#dc2626"
              fill="none"
              class="size-[4vw]"
            >
              <path d="M32 7v50M7 32h50"></path>
            </svg>
          </div>
          <p className="text-slate-100">Campains Every Month</p>
        </div>

        <div className="flex flex-col items-start sm:items-center">
          <div className="flex flex-row">
            <h2 className="text-slate-100">20</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              stroke-width="12"
              stroke="#dc2626"
              fill="none"
              class="size-[4vw]"
            >
              <path d="M32 7v50M7 32h50"></path>
            </svg>
          </div>
          <p className="text-slate-100">Awards Won</p>
        </div>
      </div>
    </div>
  );
}
