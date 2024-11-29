'use client'

import { useEffect } from 'react'
import confetti from 'canvas-confetti'

export function ConfettiEffects() {
  useEffect(() => {
    // Initial burst
    const count = 200
    const defaults = {
      origin: { y: 0.7 },
      zIndex: 1000,
    }

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      })
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
      scalar: 0.8,
      shapes: ['star']
    })

    fire(0.2, {
      spread: 60,
      shapes: ['circle']
    })

    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    })

    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    })

    fire(0.1, {
      spread: 120,
      startVelocity: 45
    })

    // Continuous side confetti
    const interval = setInterval(() => {
      const sides = [0.1, 0.9] // Left and right sides
      sides.forEach(origin => {
        confetti({
          particleCount: 2,
          angle: origin === 0.1 ? 60 : 120,
          spread: 50,
          origin: { x: origin, y: 0.6 },
          colors: ['#ff0000', '#ffa500', '#ffff00', '#008000', '#0000ff', '#4b0082', '#ee82ee'],
        })
      })
    }, 200)

    return () => clearInterval(interval)
  }, [])

  return null
}

