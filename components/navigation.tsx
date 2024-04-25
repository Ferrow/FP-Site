"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import Image from "next/image";
import Link from "next/link";

const Navigation = ({ background }: { background?: string }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const updateBackgroundColor = () => {
    if (pathname === "/" && scrollPosition > 500) {
      return "bg-slate-800"; // Change this to the desired background color
    }
    return background;
  };

  return (
    <div className={`${updateBackgroundColor()} fixed w-full`}>
      <div className="container flex justify-between items-center h-[70px]">
        <Link href={"/"}>
          <Image src={"/logo.png"} alt="logo" width={100} height={100} />
        </Link>

        <ul className="flex gap-4 items-center justify-center text-white">
          <li>
            <Link href={"/"}>Domov</Link>
          </li>
          <li>
            <a href="#o-nas-section">O Nás</a>
          </li>
          <li>Služby</li>
          <li>
            <a href="/clanky">Články</a>
          </li>
          <li>Kontakt</li>
          {/* <li>Napíš nám</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
