import Image from "next/image";
import { Button } from "./ui/button";

const ONasSection = () => {
  return (
    <section
      id="o-nas-section"
      className="flex flex-col md:flex-row gap-56 container py-10 justify-center"
    >
      <div className="flex flex-col justify-center gap-10 max-w-[500px]">
        <div className="flex flex-col gap-4">
          <span>O NÁS</span>
          <h2 className="font-bold text-3xl sm:text-5xl">
            Sme odborníci v oblasti finančného poradenstva.
          </h2>
        </div>
        <p className="text-lg">
          Potrebujete poradiť s úverom, investíciami, poistením alebo
          refinancovať svoj stávajúci produkt? U nás ste v správnych rukách.
        </p>
        <Button size={"default"} className="w-[200px]">
          Dozvedieť sa viac
        </Button>
      </div>
      <Image
        src="/3.jpg"
        alt="Poradenstvo"
        width={400}
        height={800}
        className="w-full md:max-w-[400px] md:max-h-[800px]"
      />
    </section>
  );
};

export default ONasSection;
