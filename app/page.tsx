import ClankySection from "@/components/clanky-section";
import HeroSection from "@/components/hero-section";
import KontaktSection from "@/components/kontakt-section";
import NaseSluzbySection from "@/components/nase-sluzby-section";
import ONasSection from "@/components/o-nas-section";
import SpolupracujemeSection from "@/components/spolupracujeme-section";
import Image from "next/image";

export default async function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      {/* <div className="bg-black text-white h-screen w-screen flex flex-col justify-center items-center">
        <Image src={"/logo.png"} alt="logo" width={150} height={150} />
        <p>Stránka je momentálne nedostupná, prebieha renovácia.</p>
        <p>Ďakujeme za pochopenie.</p>
      </div> */}
      <HeroSection />
      <NaseSluzbySection />
      <ONasSection />
      <ClankySection />
      {/* <SpolupracujemeSection /> */}
      <KontaktSection />
    </main>
  );
}
