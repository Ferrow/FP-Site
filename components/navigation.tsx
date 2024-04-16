"use client";

import Image from "next/image";
import Link from "next/link";

const Navigation = ({ background }: { background?: string }) => {
  return (
    <div
      className={`${background} container fixed flex justify-between items-center w-full h-[70px]`}
    >
      <Link href={"/"}>
        <Image src={"/logo.png"} alt="logo" width={100} height={100} />
      </Link>

      <ul className="flex gap-4 items-center justify-center text-white">
        <li>
          <Link href={"/"}>Domov</Link>
        </li>
        <li>O Nás</li>
        <li>Služby</li>
        <li>
          <a href="/clanky">Články</a>
        </li>
        <li>Kontakt</li>
        <li>Napíš nám</li>
      </ul>
    </div>
  );
};

export default Navigation;
