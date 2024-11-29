import { motion } from "framer-motion"

export function BirthdayBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Birthday cake SVG */}
      <motion.svg
        className="absolute bottom-0 left-0 w-32 h-32 text-pink-200 dark:text-pink-900 opacity-50"
        viewBox="0 0 24 24"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 0.5 }}
        transition={{ duration: 1 }}
      >
        <path fill="currentColor" d="M12,6C13.11,6 14,5.1 14,4C14,3.62 13.9,3.27 13.71,2.97L12,0L10.29,2.97C10.1,3.27 10,3.62 10,4A2,2 0 0,0 12,6M16.6,16L15.53,14.92L14.45,16C13.15,17.29 10.87,17.3 9.56,16L8.5,14.92L7.4,16C6.75,16.64 5.88,17 4.96,17C4.23,17 3.56,16.77 3,16.39V21A1,1 0 0,0 4,22H20A1,1 0 0,0 21,21V16.39C20.44,16.77 19.77,17 19.04,17C18.12,17 17.25,16.64 16.6,16M18,9H13V7H11V9H6A3,3 0 0,0 3,12V13.54C3,14.62 3.88,15.5 4.96,15.5C5.5,15.5 6,15.3 6.34,14.93L8.5,12.8L10.61,14.93C11.35,15.67 12.64,15.67 13.38,14.93L15.5,12.8L17.65,14.93C18,15.3 18.5,15.5 19.03,15.5C20.11,15.5 21,14.62 21,13.54V12A3,3 0 0,0 18,9Z" />
      </motion.svg>

      {/* Number 18 */}
      <motion.div
        className="absolute top-20 right-10 text-6xl font-bold text-pink-200/20 dark:text-pink-900/20"
        initial={{ rotate: -20, scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        18
      </motion.div>

      {/* Decorative circles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-br from-pink-300/20 to-purple-300/20 dark:from-pink-800/20 dark:to-purple-800/20"
          style={{
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: Math.random() + 0.5, delay: i * 0.1 }}
        />
      ))}

      {/* Gift box SVG */}
      <motion.svg
        className="absolute top-1/4 left-10 w-24 h-24 text-pink-200 dark:text-pink-900 opacity-50"
        viewBox="0 0 24 24"
        initial={{ rotate: -30, scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <path fill="currentColor" d="M22,12V20A2,2 0 0,1 20,22H4A2,2 0 0,1 2,20V12A1,1 0 0,1 1,11V8A2,2 0 0,1 3,6H6.17C6.06,5.69 6,5.35 6,5A3,3 0 0,1 9,2C10,2 10.88,2.5 11.43,3.24V3.23L12,4L12.57,3.23V3.24C13.12,2.5 14,2 15,2A3,3 0 0,1 18,5C18,5.35 17.94,5.69 17.83,6H21A2,2 0 0,1 23,8V11A1,1 0 0,1 22,12M4,20H11V12H4V20M20,20V12H13V20H20M9,4A1,1 0 0,0 8,5A1,1 0 0,0 9,6A1,1 0 0,0 10,5A1,1 0 0,0 9,4M15,4A1,1 0 0,0 14,5A1,1 0 0,0 15,6A1,1 0 0,0 16,5A1,1 0 0,0 15,4M3,8V10H11V8H3M13,8V10H21V8H13Z" />
      </motion.svg>
    </div>
  )
}

