import * as React from 'react'

export const useToggle = (initialValue: boolean) => {
  const [value, setValue] = React.useState(initialValue)

  return [value, () => setValue((value) => !value)] as const
}
