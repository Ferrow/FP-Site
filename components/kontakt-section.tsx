import { Button } from "./ui/button";

const KontaktSection = () => {
  return (
    <div className="flex flex-col gap-6 py-24">
      <h2 className="text-2xl font-bold text-center">OTÁZKY?</h2>
      <p>Kontaktujte nás a my urobíme všetko pre to, aby sme vám pomohli.</p>
      <Button className="w-[200px] mx-auto">Kontakt</Button>
    </div>
  );
};

export default KontaktSection;
