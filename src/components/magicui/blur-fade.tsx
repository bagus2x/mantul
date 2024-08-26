'use client'

import { AnimatePresence, motion, useInView, UseInViewOptions, Variants } from 'framer-motion'
import { HTMLProps, useRef } from 'react'

type MarginType = UseInViewOptions['margin']

interface BlurFadeProps extends HTMLProps<any> {
  children: React.ReactNode
  className?: string
  variant?: {
    hidden: { y: number }
    visible: { y: number }
  }
  duration?: number
  delay?: number
  yOffset?: number
  inView?: boolean
  inViewMargin?: MarginType
  blur?: string
  as?: keyof HTMLElementTagNameMap
}

export default function BlurFade({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  yOffset = 6,
  inView = false,
  inViewMargin = '-50px',
  blur = '6px',
  as,
  ...props
}: BlurFadeProps) {
  const ref = useRef(null)
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin })
  const isInView = !inView || inViewResult
  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
    visible: { y: -yOffset, opacity: 1, filter: `blur(0px)` },
  }
  const combinedVariants = variant || defaultVariants
  const Comp = as ? (motion[as as keyof typeof motion] as React.ElementType) : motion.div

  return (
    <AnimatePresence>
      <Comp
        ref={ref}
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
        exit='hidden'
        variants={combinedVariants}
        transition={{
          delay: 0.04 + delay,
          duration,
          ease: 'easeOut',
        }}
        className={className}
        {...props}>
        {children}
      </Comp>
    </AnimatePresence>
  )
}

