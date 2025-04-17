import Link from "next/link";

export default function Footer() {
  return (
    <div className="mx-2 sm:mx-4 md:mx-12 lg:mx-24">
      <div className="w-full h-fit flex flex-col gap-6 md:gap-12 p-8 bg-slate-100 rounded-3xl">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
          <div className="flex justify-start">
            <h2>Ready to work with us?</h2>
          </div>
          <div className="flex justify-start">
            <button className="w-fit h-fit translate-y-0 md:-translate-y-6 group flex flex-row justify-between items-center rounded-full bg-red-600 text-gray-100 text-2xl p-3 gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#dc2626"
                class="size-12 rounded-full bg-gray-100 p-2 group-hover:-rotate-45 transition delay-150"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
              <div className="group-hover:-translate-x-1 -translate-y-0.5 transition delay-150 text-[3rem]">Contact</div>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col justify-start">
            <ul>
                <li>Home</li>
                <li>Services</li>
                <li>Work</li>
                <li>About</li>
                <li>Blog</li>
            </ul>
          </div>
          <div className="flex flex-col justify-start">
            <div className="flex flex-col text-gray-800">
                <h6>Lets Build!</h6>
                <Link href="mailto:princetrivedi2000@gmail.com" className='footer-link'>hi@digmak.com</Link>
            </div>
            <div className="flex flex-col text-gray-800">
                <h6>Join Us!</h6>
                <Link href="mailto:princetrivedi2000@gmail.com" className='footer-link'>hi@digmak.com</Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
