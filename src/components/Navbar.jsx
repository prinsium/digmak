import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex justify-center items-center">
      <nav class="mx-2 w-lg flex rounded-full bg-[hsla(0,0%,93%,0.72)] backdrop-blur-xl translate-y-12 fixed z-40 flex justify-center items-center gap-x-24 p-3">
        
        <div class="navtitle -translate-y-1 flex justify-between items-center">
          <Image src="asset/dig.svg" width={30} height={30} alt="logo" />
        <span className="translate-y-1 md:translate-y-0">digmak</span>
        </div>

        <div className="flex flex-row gap-2 justify-center items-center">
          <div className="hidden md:block ">
        <button className="w-fit h-fit group flex flex-row justify-between items-center rounded-full bg-gray-900 text-gray-100 text-2xl p-3 gap-2">
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

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#1F1E33" 
              class="size-12 rounded-full p-3 bg-gray-100">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" /></svg>

        </div>
      </nav>
    </div>
  );
}
