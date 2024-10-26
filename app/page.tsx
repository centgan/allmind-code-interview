import Link from "next/link";
// button color #d0f424

export default function Home() {
  return (
    <div>
      {/* For when you first load in and see the green background*/}
      <div className="h-[102vh] rounded-b-3xl bg-[#023e34]">
        <nav className="justify-around pt-3">
          <div>
            <Link href="/">
              <button className="px-4 py-2 text-white rounded hover:bg-[#036b68]">
                Sign in
              </button>
            </Link>
            <Link href="/">
              <button className="px-4 py-2 bg-[#d0f424] text-[#023e34] rounded hover:bg-[#b0d800]">
                Book a demo
              </button>
            </Link>
          </div>
        </nav>
        <div className="flex flex-col items-center justify-center pt-24">
          <h1 className="text-white text-center pt-24
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-[64px]
                leading-[36px]
                sm:leading-[48px]
                md:leading-[60px]
                lg:leading-[64px]
                tracking-[-0.04em] max-w-xl break-words">The analytical layer for private markets</h1>
          <p className="text-white text-center mt-4
                leading-[24px]
                lg:px-8
                md:px-12
                tracking-[-0.015em]
                text-balance
                lg:text-pretty">Aviato turns data into deals by delivering high-quality people and company intelligence to your fingertips</p>
          <Link href="/">
            <button className="px-4 py-2 bg-[#d0f424] text-[#023e34] rounded hover:bg-[#b0d800]">
              Book a demo
            </button>
          </Link>
        </div>
      </div>
      {/* This will be for everything under the initial screen when loaded in */}
      <div>
        <div className="pl-10 pt-14">
          <p className="text-lg tracking-[-0.015em]">What is Aviato?</p>
          <h1 className="mt-4 text-5xl max-w-2xl text-pretty text-left tracking-[-0.04em] leading-[58px]">The most comprehensive view on private markets there is, made accessible to you</h1>
          {/* will deal with this later it is just switching between texts and images*/}
          <div></div>
        </div>
        <div className="flex rounded-2xl bg-[#a00c8c] mx-4 p-8">
          <div>
            <h1 className="text-3xl tracking-[-0.02em] text-white">Work wherever you work with our API</h1>
            <p className="mt-2 text-balance text-lg leading-6 tracking-[-0.015em] text-white">Aviato connects seamlessly
              with top CRMs and tools. Powerful API enables an easy transition to data-driven choices, no process
              disruption.</p>
          </div>
          <div>
            This will be an image
          </div>
          <div>
            This will be an image
          </div>
          <div>
            This will be an image
          </div>
        </div>
      </div>
      <footer className="bg-[#023e34] text-white py-16">
        <div className="grid md:grid-cols-2 gap-y-10 pl-16">
          <div className="flex flex-col md:items-start justify-start items-center">
            <p className="text-white tracking-[-0.015em] leading-6 mt-3">Get the latest Aviato company updates</p>
          </div>
          <div className="flex items-start justify-evenly text-center md:text-left flex flex-col gap-y-4 w-32">
            <p className="text-white font-medium tracking-[-0.015em] leading-6">Company</p>
            <ul className="flex flex-col md:gap-y-2 gap-y-4 w-full">
              <li>Careers</li>
              <li>Contact</li>
              <li>X/Twitter</li>
              <li>LinkedIn</li>

            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
