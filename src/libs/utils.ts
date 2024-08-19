import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function alpha(hex: string, opacity: number) {
  //if it has an alpha, remove it
  if (hex.length > 7) hex = hex.substring(0, hex.length - 2)

  // coerce values so ti is between 0 and 1.
  const _opacity = Math.round(Math.min(Math.max(opacity, 0), 1) * 255)
  let opacityHex = _opacity.toString(16).toUpperCase()

  // opacities near 0 need a trailing 0
  if (opacityHex.length == 1) opacityHex = '0' + opacityHex

  return hex + opacityHex
}
