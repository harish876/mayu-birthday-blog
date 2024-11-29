import { useEffect, useState } from 'react'

function Balloon({ delay, duration, left }: { delay: number; duration: number; left: string }) {
  return (
    <div
      className="absolute bottom-0 animate-float-balloon opacity-75"
      style={{
        left,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`
      }}
    >
      <div className="relative">
        <div className="w-12 h-16 rounded-full bg-primary/50 before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:w-1 before:h-12 before:bg-white/30" />
      </div>
    </div>
  )
}

export function FloatingBalloons() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <Balloon delay={0} duration={15} left="5%" />
      <Balloon delay={2} duration={18} left="15%" />
      <Balloon delay={4} duration={16} left="25%" />
      <Balloon delay={6} duration={17} left="75%" />
      <Balloon delay={8} duration={15} left="85%" />
      <Balloon delay={10} duration={14} left="95%" />
    </div>
  )
}

