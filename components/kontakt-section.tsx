import { Button } from "./ui/button";

const KontaktSection = () => {
  return (
    <section
      id="kontakt-section"
      className="container flex flex-col text-center gap-6 py-24"
    >
      <h2 className="text-2xl font-bold text-center">OTÁZKY?</h2>
      <p>Kontaktujte nás a my urobíme všetko pre to, aby sme vám pomohli.</p>
      <Button className="w-[200px] mx-auto">Kontakt</Button>
    </section>
  );
};

export default KontaktSection;
