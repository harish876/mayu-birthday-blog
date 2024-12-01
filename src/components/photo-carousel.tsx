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

const photos = [
  {
    src: "/mayu_solo_2.jpeg",
    caption: "Mayu with Crayons Mayu",
    year: "2012",
  },
  {
    src: "/mayu_fam_1.jpeg",
    caption: "Mayu with the fam at Swaminarayan Temple Jamnagar",
    year: "2012",
  },
  {
    src: "/mayu_mom_2.jpeg",
    caption: "Mayu with Mom at Sankalp Restaurant",
    year: "2012",
  },
  {
    src: "/mayu_solo_1.jpeg",
    caption: "Mayu holding Dad's Birthday Gift from Essar",
    year: "2013",
  },
  {
    src: "/mayu_solo_3.jpeg",
    caption: "Beautiful Mayu ready for Garba Night",
    year: "2013",
  },
  {
    src: "/mayu_solo_4.jpeg",
    caption: "Pattu Pavadai Mayu with a Pen Stand and a Gold Watch",
    year: "2013",
  },
  {
    src: "/mayu_friends_1.jpeg",
    caption: "Mayu Birthday at US Pizza with friends",
    year: "2013",
  },
  {
    src: "/mayu_solo_5.jpeg",
    caption: "Throwback to Mayu'a Birthday at Laxmi Apartments",
    year: "2013",
  },
  {
    src: "/mayu_fam_2.jpeg",
    caption: "Mayu with the one and only Acchu",
    year: "2013",
  },
  {
    src: "/mayu_mom_3.jpeg",
    caption: "Mayu with Mom at New Year's at Essar Township",
    year: "2013",
  },
  {
    src: "/mayu_fam_3.jpeg",
    caption: "A very small Mayu with the Fam at Taj Hotel Mumbai",
    year: "2013",
  },
  {
    src: "/mayu_friends_2.jpeg",
    caption: "Cute Mayu at birthday with presumably Otta Pallu",
    year: "2013",
  },
  {
    src: "/mayu_solo_6.jpeg",
    caption: 'Mayuri sometime during the early 2010s -  "Bear come, scratch"',
    year: "2013",
  },
  {
    src: "/mayu_solo_7.jpeg",
    caption: "10 years Ago. Crystal Mall smooth quad bike driver",
    year: "2013",
  },
  {
    src: "/mayu_fam_4.jpeg",
    caption: "Quite the poser. Mayu and the Fam at Udaipur Fort",
    year: "2013",
  },
  {
    src: "/mayu_solo_holi.jpeg",
    caption: "Mayu after playing some Holi at Laxmi Apartments",
    year: "2013",
  },
  {
    src: "/mayu_solo_dandya.jpeg",
    caption: "Mayu about to go play Dandya",
    year: "2013",
  },
  {
    src: "/mayu_solo_fin.jpeg",
    caption: "Fin. Happy Birthday Mayuuuuuu!",
    year: "2013",
  },
];

export function PhotoCarousel() {
  const [, setCurrentIndex] = React.useState(0);
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-5xl mx-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      //@ts-expect-error
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
                      className="w-full h-full object-contain rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="absolute bottom-0 left-0 right-0 p-6 text-white"
                    >
                      {/* <div className="text-sm font-medium mb-2">
                        {photo.year}
                      </div> */}
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
