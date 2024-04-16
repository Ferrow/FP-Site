import Image from "next/image";

const NaseSluzbySection = () => {
  return (
    <div className="flex flex-col py-24 items-center container">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl border-b-2 border-b-slate-600 pb-6">
        Naše služby
      </h1>
      <div className="flex gap-10 pt-20">
        <div className="basis-1/3 flex flex-col gap-4">
          <Image
            src="/5.jpg"
            alt="Poradenstvo"
            width={300}
            height={600}
            className="bg-black w-full"
          />
          <h2 className="text-2xl font-bold sm:text-3xl">
            Investovanie a sporenie
          </h2>
          <p className="max-w-[900px] text-zinc-800 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
            Investovanie a sporenie sú dve kľúčové stratégie, ako sa pripraviť
            na dôchodok a vytvoriť si finančný rezervný fond. Zabezpečenie
            finančnej stability je dôležité pre každého, bez ohľadu na vek a
            finančný stav. Investovanie a sporenie sú však niečo, čo môže byť
            pre mnoho ľudí nedostupné alebo zložité. Avšak, v súčasnej dobe
            existujú mnohé možnosti, ako investovať aj už od 10 eur mesačne.
          </p>
        </div>
        <div className="basis-1/3 flex flex-col gap-4">
          <Image
            src="/uver1.png"
            alt="Poradenstvo"
            width={300}
            height={600}
            className="bg-black w-full"
          />
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
            Úver
          </h2>
          <p className="max-w-[900px] text-zinc-800 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
            Výber úveru by mal byť premyslený a riadne zvážený. Rozdiel v
            desatine percenta úrokovej sadzby môže viesť k veľkým rozdielom pri
            úveroch. Je dôležité, aby ste neplatili viac, ako je nutné.
            Riešenie, ktoré sa zdá najlacnejšie, nemusí byť nutne aj najlepšie
            pre vašu finančnú situáciu. Preto je dôležité, aby ste sa poradili
            so skúsenými odborníkmi v oblasti úverov a financií, ktorí vám
            pomôžu vybrať ten najlepší úver pre vás. Môžete tak ušetriť veľké
            sumy peňazí.
          </p>
        </div>
        <div className="basis-1/3 flex flex-col gap-4">
          <Image
            src="/poistenie1.png"
            alt="Poradenstvo"
            width={300}
            height={600}
            className="bg-black w-full"
          />
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
            Poistenie
          </h2>
          <p className="max-w-[900px] text-zinc-800 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
            Majetok a život sú veci, ktoré sú pre nás nevyčísliteľné a nemožno
            ich nahradiť. Avšak, nechceme trpieť finančnými škodami, ktoré
            prináša nepriaznivý osud. Preto je dôležité zabezpečiť sa proti nim
            poistením. Je dôležité, aby sme pri výbere poistenia venovali
            pozornosť tomu, aby boli náklady na poistenie čo najnižšie, ale
            zároveň aby nám poskytovalo dostatočnú ochranu. To je možné
            dosiahnuť len vtedy, keď sa pri výbere poistenia poradíme s
            odborníkmi a zvážime všetky dostupné možnosti.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NaseSluzbySection;
