import { Editor } from '@tiptap/core'
import { ListIcon, ListOrderedIcon } from 'lucide-react'

import { ToggleGroup, ToggleGroupItem } from '@mantul/components/ui/toggle-group'

interface ListStyleButtonsProps {
  className?: string
  editor: Editor
}

export const ToolbarListStyle = ({ editor, className }: ListStyleButtonsProps) => {
  const textStyles = ['orderedList', 'bulletList'].filter((style) => editor.isActive(style))

  return (
    <ToggleGroup type='multiple' value={textStyles} className={className}>
      <ToggleGroupItem
        size='sm'
        value='bulletList'
        aria-label='Toggle bullet list'
        onClick={() => editor.chain().focus().toggleBulletList().run()}>
        <ListIcon className='size-4' />
      </ToggleGroupItem>
      <ToggleGroupItem
        size='sm'
        value='orderedList'
        aria-label='Toggle ordered list'
        onClick={() => editor.chain().focus().toggleOrderedList().run()}>
        <ListOrderedIcon className='size-4' />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
