"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const SpolupracujemeSection = () => {
  return (
    <div className="flex flex-col gap-6 container">
      <h2 className="text-2xl font-bold text-center">Spolupracujeme s</h2>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          <CarouselItem className="basis-1/5">
            <Image
              src="/logo.png"
              alt="logo"
              width={100}
              height={100}
              className="bg-black"
            />
          </CarouselItem>
          <CarouselItem className="basis-1/5">
            <Image
              src="/logo.png"
              alt="logo"
              width={100}
              height={100}
              className="bg-black basis-1/5"
            />
          </CarouselItem>
          <CarouselItem className="basis-1/5">
            <Image
              src="/logo.png"
              alt="logo"
              width={100}
              height={100}
              className="bg-black basis-1/5"
            />
          </CarouselItem>
          <CarouselItem className="basis-1/5">
            <Image
              src="/logo.png"
              alt="logo"
              width={100}
              height={100}
              className="bg-black basis-1/5"
            />
          </CarouselItem>
          <CarouselItem className="basis-1/5">
            <Image
              src="/logo.png"
              alt="logo"
              width={100}
              height={100}
              className="bg-black basis-1/5"
            />
          </CarouselItem>
          <CarouselItem className="basis-1/5">
            <Image
              src="/logo.png"
              alt="logo"
              width={100}
              height={100}
              className="bg-black basis-1/5"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default SpolupracujemeSection;
