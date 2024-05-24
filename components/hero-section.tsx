"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="domov"
      className="w-full h-screen bg-castle-img bg-black/30 bg-blend-multiply bg-cover flex flex-col items-center justify-center text-white"
    >
      <div className="mx-auto container space-y-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.7 },
              }}
              className="text-3xl [text-shadow:_3px_4px_7px_rgb(0_0_0_/_70%)] font-bold tracking-tighter sm:text-5xl"
            >
              poraď sa s
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: -3,
                transition: { duration: 0.7, delay: 0.2 },
              }}
              className="text-5xl sm:text-8xl font-bold [text-shadow:_3px_4px_7px_rgb(0_0_0_/_70%)]"
            >
              odborníkmi
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: -5,
                transition: { duration: 0.7, delay: 0.4 },
              }}
              className="max-w-[900px] text-white [text-shadow:_3px_4px_7px_rgb(0_0_0_/_70%)] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400"
            >
              pomôžeme ti naplniť tvoje finančné ciele
            </motion.p>
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
