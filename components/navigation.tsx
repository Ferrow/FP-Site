"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import Image from "next/image";
import Link from "next/link";

const Navigation = ({ background }: { background?: string }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const pathname = usePathname();
  const router = useRouter();

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

        <ul className="flex text-[11px] sm:text-base gap-4 items-center justify-center text-white">
          <li>
            <Link href={"/"}>Domov</Link>
          </li>
          <li>
            <a href={pathname === "/" ? "#nase-sluzby-section" : "/"}>Služby</a>
          </li>
          <li className="">
            <a href={pathname === "/" ? "#o-nas-section" : "/o-nas"}>O Nás</a>
          </li>
          <li>
            <a href={pathname === "/" ? "#clanky-section" : "/clanky"}>
              Články
            </a>
          </li>
          <li>
            <a href={pathname === "/" ? "#kontakt-section" : "/kontakt"}>
              Kontakt
            </a>
          </li>
          {/* <li>Napíš nám</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
