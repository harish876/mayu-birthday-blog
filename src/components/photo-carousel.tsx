import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import MayuMomPic from "../assets/mayu_mom_1.jpg";

const photos = [
  {
    src: MayuMomPic,
    caption: "Sweet 16 celebration with the whole family",
    year: "2016",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    caption: "Summer vacation in Paris",
    year: "2018",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    caption: "Graduation day!",
    year: "2020",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    caption: "First day at the new job",
    year: "2021",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    caption: "Birthday party last year",
    year: "2023",
  },
];

export function PhotoCarousel() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: false })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-5xl mx-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      onSlideChanged={(carousel) => {
        setCurrentIndex(carousel.selectedScrollSnap());
      }}
    >
      <CarouselContent>
        {photos.map((photo, index) => (
          <CarouselItem key={index}>
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="p-1"
              >
                <Card>
                  <CardContent className="relative p-0 aspect-[4/3]">
                    <img
                      src={photo.src}
                      alt={photo.caption}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="absolute bottom-0 left-0 right-0 p-6 text-white"
                    >
                      <div className="text-sm font-medium mb-2">
                        {photo.year}
                      </div>
                      <p className="text-lg font-semibold">{photo.caption}</p>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
