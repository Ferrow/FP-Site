import Image from "next/image";
import { Button } from "./ui/button";

const ONasSection = () => {
  return (
    <div className="flex gap-56 container py-10">
      <div className="flex flex-col justify-center gap-10 max-w-[500px]">
        <div className="flex flex-col gap-4">
          <span>O NÁS</span>
          <h2 className="text-4xl font-bold">
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
        className="bg-black max-w-[400px] max-h-[800px]"
      />
    </div>
  );
};

export default ONasSection;
