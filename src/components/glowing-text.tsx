'use client'

import { motion } from "framer-motion"

export function GlowingText({ text }: { text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#FF1493] to-[#FF69B4] font-extrabold">
        {text}
        <div className="absolute inset-0 blur-lg bg-gradient-to-r from-[#FF1493] to-[#FF69B4] opacity-50" />
      </span>
    </motion.div>
  )
}

