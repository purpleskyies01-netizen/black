// components/EvidenceCarousel.tsx
"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

interface ImageItem {
  src: string;
  caption: string;
  blurred: boolean;
}

export default function EvidenceCarousel({ images }: { images: ImageItem[] }) {
  return (
    <div className="bg-black border-2 border-red-800 rounded-xl p-6 shadow-2xl">
      <h2 className="text-red-500 font-black text-2xl mb-4 text-center uppercase tracking-wider">
        COMPROMISED NUDES (PROOF)
      </h2>
      <Carousel className="w-full max-w-2xl relative mx-auto">
        <CarouselContent>
          {images.map((img, i) => (
            <CarouselItem key={i}>
              <div className="relative h-96 bg-gray-900 rounded-lg overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  className={`object-contain`}
                />
              </div>
              <p className="text-center text-red-300 mt-3 font-mono text-sm">
                {img.caption}
              </p>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-red-800 text-white hover:bg-red-700" />
        <CarouselNext className="bg-red-800 text-white hover:bg-red-700" />
      </Carousel>
      <p className="text-red-500 text-center mt-4 font-bold text-sm">
        ALL IMAGES WILL BE POSTED TO WEST VIRGINIA SOCIAL PLATFORMS
      </p>
    </div>
  );
}
