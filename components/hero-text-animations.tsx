"use client";

import { motion } from "framer-motion";

export default function HeroTextAnimations() {
  return (
    <div className="space-y-2">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
            ease: "easeInOut",
            stiffness: 300,
          },
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
          transition: {
            duration: 0.7,
            delay: 0.2,
            ease: "easeInOut",
            stiffness: 300,
          },
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
          transition: {
            duration: 0.7,
            delay: 0.4,
            ease: "easeInOut",
            stiffness: 300,
          },
        }}
        className="max-w-[900px] text-white [text-shadow:_3px_4px_7px_rgb(0_0_0_/_70%)] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400"
      >
        pomôžeme ti naplniť tvoje finančné ciele
      </motion.p>
      {/* <Button>O Projekte</Button> */}
    </div>
  );
}
