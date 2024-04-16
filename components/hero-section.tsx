import { Button } from "./ui/button";

export default async function HeroSection() {
  return (
    <section className="w-full h-screen bg-slate-400 flex flex-col items-center justify-center">
      <div className="mx-auto container space-y-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              poraď sa s
            </h1>
            <span className="text-5xl sm:text-8xl font-bold">odborníkmi</span>
            <p className="max-w-[900px] text-zinc-800 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
              pomôžeme ti naplniť tvoje finančné ciele
            </p>
            <Button>O Projekte</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
