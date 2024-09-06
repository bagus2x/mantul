import { Editor } from '@tiptap/core'
import { BoldIcon, Code2Icon, ItalicIcon, StrikethroughIcon, UnderlineIcon } from 'lucide-react'

import { ToggleGroup, ToggleGroupItem } from '@mantul/components/ui/toggle-group'

interface ToolbarTextStyleProps {
  className?: string
  editor: Editor
}

export const ToolbarTextStyle = ({ editor, className }: ToolbarTextStyleProps) => {
  const textStyles = [
    'bold',
    'italic',
    'strike',
    'underline',
    'orderedList',
    'bulletList',
    'code',
  ].filter((style) => editor.isActive(style))

  return (
    <ToggleGroup type='multiple' value={textStyles} className={className}>
      <ToggleGroupItem
        size='sm'
        value='bold'
        aria-label='Toggle bold'
        onClick={() => editor.chain().focus().toggleBold().run()}>
        <BoldIcon className='size-4' />
      </ToggleGroupItem>
      <ToggleGroupItem
        size='sm'
        value='italic'
        aria-label='Toggle italic'
        onClick={() => editor.chain().focus().toggleItalic().run()}>
        <ItalicIcon className='size-4' />
      </ToggleGroupItem>
      <ToggleGroupItem
        size='sm'
        value='strike'
        aria-label='Toggle strikethrough'
        onClick={() => editor.chain().focus().toggleStrike().run()}>
        <StrikethroughIcon className='size-4' />
      </ToggleGroupItem>
      <ToggleGroupItem
        size='sm'
        value='underline'
        aria-label='Toggle underline'
        onClick={() => editor.chain().focus().toggleUnderline().run()}>
        <UnderlineIcon className='size-4' />
      </ToggleGroupItem>
      <ToggleGroupItem
        size='sm'
        value='code'
        aria-label='Toggle code'
        onClick={() => editor.chain().focus().toggleCode().run()}>
        <Code2Icon className='size-4' />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
