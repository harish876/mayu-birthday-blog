'use client'

import { motion } from "framer-motion"

export function BackgroundPattern() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none opacity-10">
      <svg width="100%" height="100%">
        <pattern
          id="birthday-pattern"
          x="0"
          y="0"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M20 2.5C20 3.88071 18.8807 5 17.5 5C16.1193 5 15 3.88071 15 2.5C15 1.11929 16.1193 0 17.5 0C18.8807 0 20 1.11929 20 2.5Z"
            fill="currentColor"
            className="text-pink-300 dark:text-pink-800"
          />
          <path
            d="M5 17.5C5 18.8807 3.88071 20 2.5 20C1.11929 20 0 18.8807 0 17.5C0 16.1193 1.11929 15 2.5 15C3.88071 15 5 16.1193 5 17.5Z"
            fill="currentColor"
            className="text-pink-200 dark:text-pink-900"
          />
          <path
            d="M40 17.5C40 18.8807 38.8807 20 37.5 20C36.1193 20 35 18.8807 35 17.5C35 16.1193 36.1193 15 37.5 15C38.8807 15 40 16.1193 40 17.5Z"
            fill="currentColor"
            className="text-pink-200 dark:text-pink-900"
          />
          <path
            d="M20 37.5C20 38.8807 18.8807 40 17.5 40C16.1193 40 15 38.8807 15 37.5C15 36.1193 16.1193 35 17.5 35C18.8807 35 20 36.1193 20 37.5Z"
            fill="currentColor"
            className="text-pink-300 dark:text-pink-800"
          />
        </pattern>
        <rect width="100%" height="100%" fill="url(#birthday-pattern)" />
      </svg>
    </div>
  )
}

export function Number18Watermark() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none flex items-center justify-center opacity-[0.03]">
      <svg viewBox="0 0 200 100" className="w-full max-w-4xl">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" className="text-pink-500" style={{ stopColor: 'currentColor' }} />
            <stop offset="100%" className="text-purple-500" style={{ stopColor: 'currentColor' }} />
          </linearGradient>
        </defs>
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="url(#grad)"
          className="text-[80px] font-bold"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          18
        </text>
      </svg>
    </div>
  )
}

export function BottomCakeDecoration() {
  return (
    <div className="fixed bottom-0 left-0 right-0 pointer-events-none">
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="flex justify-between px-8 pb-4"
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.1, type: "spring" }}
            className="relative"
          >
            {/* Candle */}
            <div className="relative w-6 h-24">
              <div className="absolute bottom-0 w-6 h-20 bg-gradient-to-b from-pink-200 to-pink-300 rounded-t-lg" />
              {/* Flame */}
              <motion.div
                className="absolute -top-4 left-1/2 -translate-x-1/2"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-4 h-6 bg-gradient-to-b from-yellow-200 via-orange-300 to-red-400 rounded-full blur-[2px]" />
              </motion.div>
            </div>
            
            {/* Mini Cake */}
            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2"
            >
              <div className="w-12 h-12 bg-gradient-to-b from-pink-300 to-pink-400 rounded-lg" />
              <div className="w-16 h-3 bg-gradient-to-b from-pink-200 to-pink-300 rounded-full -mt-2" />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export function FloatingHearts() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-200 dark:text-pink-800"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.5, 0],
            scale: [0, 1, 0],
            y: [-20, -40],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  )
}

