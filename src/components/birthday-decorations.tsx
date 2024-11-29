import { motion } from "framer-motion";

export function AnimatedCandle({
  delay = 0,
  left,
  top,
}: {
  delay: number;
  left: string;
  top: string;
}) {
  return (
    <motion.div
      className="absolute"
      style={{ left, top }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="relative w-4 h-16">
        {/* Candle */}
        <div className="absolute bottom-0 w-4 h-12 bg-gradient-to-b from-yellow-100 to-yellow-200 rounded-sm" />
        {/* Flame */}
        <motion.div
          className="absolute -top-4 left-1/2 -translate-x-1/2 w-3 h-4"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-3 h-4 bg-gradient-to-b from-orange-300 via-orange-400 to-yellow-500 rounded-full blur-[2px]" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export function BirthdayCake() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-64 h-64"
    >
      {/* Bottom Layer */}
      <div className="absolute bottom-0 w-64 h-32 bg-gradient-to-b from-pink-300 to-pink-400 rounded-lg" />

      {/* Middle Layer */}
      <div className="absolute bottom-32 w-56 h-24 left-4 bg-gradient-to-b from-pink-200 to-pink-300 rounded-lg" />

      {/* Top Layer */}
      <div className="absolute bottom-56 w-48 h-20 left-8 bg-gradient-to-b from-pink-100 to-pink-200 rounded-lg" />

      {/* Decorations */}
      <div className="absolute bottom-0 w-64 h-full">
        {/* Sprinkles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-purple-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.02 }}
          />
        ))}

        {/* Candles */}
        <AnimatedCandle delay={0.2} left="20%" top="-20%" />
        <AnimatedCandle delay={0.3} left="40%" top="-20%" />
        <AnimatedCandle delay={0.4} left="60%" top="-20%" />
        <AnimatedCandle delay={0.5} left="80%" top="-20%" />
      </div>

      {/* "18" Topper */}
      <motion.div
        className="absolute -top-8 left-1/2 -translate-x-1/2 text-4xl font-bold text-pink-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        18
      </motion.div>
    </motion.div>
  );
}

export function FloatingNumber18() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-[120px] font-bold text-pink-100 dark:text-pink-950/20"
          style={{
            left: `${25 + i * 25}%`,
            top: `${20 + i * 20}%`,
          }}
          initial={{ opacity: 0, scale: 0, rotate: -30 }}
          animate={{ opacity: 0.3, scale: 1, rotate: 0 }}
          transition={{
            duration: 1,
            delay: i * 0.2,
            type: "spring",
          }}
        >
          18
        </motion.div>
      ))}
    </div>
  );
}

export function DecorationBalloons() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${20 + i * 15}%`,
            bottom: "-20px",
          }}
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="relative">
            <div
              className="w-20 h-24 rounded-full"
              style={{
                background: `linear-gradient(45deg, ${
                  ["#FF69B4", "#FFB6C1", "#FF1493"][i % 3]
                }, ${["#FF69B4", "#FFB6C1", "#FF1493"][(i + 1) % 3]})`,
              }}
            />
            <div className="absolute bottom-0 left-1/2 w-1 h-32 bg-white/30 -translate-x-1/2" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function SparklingStars() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-yellow-300"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 2,
            delay: i * 0.1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ✨
        </motion.div>
      ))}
    </div>
  );
}
