import { Button } from "./ui/button";

export default async function HeroSection() {
  return (
    <section
      id="domov"
      className="w-full h-screen bg-hero-img bg-cover flex flex-col items-center justify-center text-white"
    >
      <div className="mx-auto container space-y-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              poraď sa s
            </h1>
            <span className="text-5xl sm:text-8xl font-bold">odborníkmi</span>
            <p className="max-w-[900px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
              pomôžeme ti naplniť tvoje finančné ciele
            </p>
            {/* <Button>O Projekte</Button> */}
          </div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="absolute bottom-4 w-6 h-6 animate-bounce"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
        />
      </svg>
    </section>
  );
}
