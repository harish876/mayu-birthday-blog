import { useEffect, useState } from "react";
import { WishForm } from "@/components/wish-form";
import { WishCard } from "@/components/wish-card";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";

export function WishesPage() {
  const [wishes, setWishes] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    getWishes();
  }, [reload]);

  async function getWishes() {
    try {
      const { data } = await supabase
        .from("wishes")
        .select()
        .order("created_at", { ascending: false });
      setWishes(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-50 dark:from-pink-950 dark:via-background dark:to-pink-950 overflow-hidden">
      <div className="m-4 container px-4 py-16 space-y-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4"
        >
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="hover:bg-pink-50 dark:hover:bg-pink-950"
          >
            <a href="/">
              <ChevronLeft className="h-4 w-4" />
            </a>
          </Button>
          <h1 className="text-3xl font-bold">
            <span className="bg-gradient-to-r from-pink-500 to-pink-600 text-transparent bg-clip-text">
              Birthday Wishes
            </span>
          </h1>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-[400px_1fr]">
          {/* Wish Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-semibold">
              <span className="bg-gradient-to-r from-pink-500 to-pink-600 text-transparent bg-clip-text">
                Send a Wish
              </span>
            </h2>
            <WishForm setReload={setReload} />
          </motion.div>

          {/* Wishes List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold">
              <span className="bg-gradient-to-r from-pink-500 to-pink-600 text-transparent bg-clip-text">
                All Wishes
              </span>
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {wishes.map((wish, index) => (
                <motion.div
                  key={wish.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.6 + index * 0.1,
                    type: "spring",
                  }}
                >
                  <WishCard wish={wish} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
