import { Editor } from '@tiptap/core'
import { Table2Icon } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@mantul/components/ui/button'

export interface ToolbarTableProps {
  className?: string
  editor: Editor
}

export const ToolbarTable = ({ editor }: ToolbarTableProps) => {
  const [counter, setCounter] = useState(1)

  const insertButton = () => {
    // Insert the button with the current counter as raw HTML
    const buttonHtml = `<button class="text-red-50" onclick="alert('Current counter: ${counter}')">Hello Guys ${counter}</button>`

    editor.commands.insertContent(buttonHtml)
  }

  return (
    <Button
      variant='ghost'
      size='icon'
      onClick={() => {
        insertButton() // Insert the button with current counter value
        setCounter(counter + 1) // Update counter
      }}>
      <Table2Icon className='size-4' />{' '}
    </Button>
  )
}
