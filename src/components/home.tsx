import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PhotoCarousel } from "@/components/photo-carousel";
import { Cake, Gift, PartyPopper } from "lucide-react";
import {
  BackgroundPattern,
  FloatingHearts,
  Number18Watermark,
} from "@/components/background-decorations";
import { ConfettiEffects } from "@/components/confetti-effects";
import { CountdownTimer } from "@/components/countdown-timer";
import { WishCard } from "@/components/wish-card";
import { supabase } from "@/lib/supabase";

export function Home() {
  const [recentWishes, setRecentWishes] = useState([]);

  useEffect(() => {
    getWishes();
  }, []);

  async function getWishes() {
    try {
      const { data, error } = await supabase
        .from("wishes")
        .select()
        .order("created_at", { ascending: false })
        .range(0, 3);
      console.log(data, error);
      setRecentWishes(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-50 dark:from-pink-950 dark:via-background dark:to-pink-950 overflow-hidden">
      <BackgroundPattern />
      <Number18Watermark />
      <FloatingHearts />
      <ConfettiEffects />

      <div className="container px-4 py-16 space-y-24 mb-32">
        <section className="text-center space-y-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative inline-block"
          >
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-25 blur-3xl" />
            </div>
            <h1 className="text-4xl font-bold sm:text-7xl space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-[#FF1493] to-[#FF69B4] text-transparent bg-clip-text font-extrabold">
                  Happy Birthday Mayuri!
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, type: "spring" }}
                className="flex justify-center gap-4 pt-4"
              >
                <Cake className="h-8 w-8 text-pink-500" />
                <PartyPopper className="h-8 w-8 text-pink-500" />
                <Gift className="h-8 w-8 text-pink-500" />
              </motion.div>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Wishing you the happiest of birthdays Mayu. Your growth and journey
            till this point has been amazing to watch and you will do even more
            amazing things from here onwards.
          </motion.p>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <CountdownTimer />
          </motion.div>
        </section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-semibold text-center">
            <span className="bg-gradient-to-r from-pink-500 to-pink-600 text-transparent bg-clip-text">
              18 Years of Memories
            </span>
          </h2>
          <PhotoCarousel />
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="space-y-8 relative"
        >
          <div className="ml-4 flex items-center justify-between">
            <h2 className="text-3xl font-semibold">
              <span className="bg-gradient-to-r from-pink-500 to-pink-600 text-transparent bg-clip-text">
                Birthday Wishes
              </span>
            </h2>
            <Button
              asChild
              className="relative overflow-hidden bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700"
            >
              <a href="/wishes">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                <Gift className="mr-2 h-4 w-4" />
                Send a Wish
              </a>
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recentWishes.map((wish, index) => (
              <motion.div
                key={wish.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.8 + index * 0.1,
                  type: "spring",
                }}
                className="transition-all duration-300 hover:scale-105"
              >
                <WishCard wish={wish} />
              </motion.div>
            ))}
          </div>
          {recentWishes.length >= 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="text-center"
            >
              <Button
                variant="outline"
                asChild
                className="relative overflow-hidden border-pink-500 hover:bg-pink-50 dark:hover:bg-pink-950"
              >
                <a href="/wishes">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-100/20 to-transparent animate-shimmer" />
                  View All Wishes
                </a>
              </Button>
            </motion.div>
          )}
        </motion.section>
      </div>
    </main>
  );
}
