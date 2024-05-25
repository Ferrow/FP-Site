import Image from "next/image";
import castle from "../public/castle.jpg";
import HeroTextAnimations from "./hero-text-animations";

export default function HeroSection() {
  return (
    <section
      id="domov"
      className="w-full h-screen bg-black/30 bg-blend-multiply flex flex-col items-center justify-center text-white"
    >
      <Image
        src={castle}
        alt="logo"
        sizes="(100vw, 100vh)"
        priority
        className="w-full h-full object-cover object-top absolute left-0 top-0 z-[-1]"
      />
      <div className="mx-auto container space-y-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <HeroTextAnimations />
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
