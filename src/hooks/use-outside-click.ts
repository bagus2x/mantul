import React from 'react'

export const useOutsideClick = <T extends HTMLElement>(
  callback: () => void,
  ref: React.RefObject<T>,
) => {
  const handleClick = (event: MouseEvent) => {
    if (ref.current && event.target && !ref.current.contains(event.target as Node)) {
      callback()
    }
  }

  React.useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  })
}
