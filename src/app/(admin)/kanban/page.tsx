'use client'

import { startTransition, useState } from 'react'
import { useProgress } from 'react-transition-progress'

export default function Page() {
  return (
    <main>
      <Comp />
    </main>
  )
}
const Comp = () => {
  const startProgress = useProgress()
  const [count, setCount] = useState(0)
  return (
    <button
      onClick={() => {
        startTransition(async () => {
          startProgress()
          // Introduces artificial slowdown
          await new Promise((resolve) => setTimeout(resolve, 2000))
          setCount((count) => count + 1)
        })
      }}>
      Trigger transition
    </button>
  )
}
