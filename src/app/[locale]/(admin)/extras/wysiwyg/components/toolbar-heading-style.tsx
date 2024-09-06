import { Editor } from '@tiptap/core'
import { Level } from '@tiptap/extension-heading'
import { CheckIcon } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@mantul/components/ui/dropdown-menu'

interface HeadingDropdownProps {
  className?: string
  editor: Editor
  container?: Element | null
}

const levels: Level[] = [1, 2, 3, 4, 5, 6]

export const ToolbarHeadingStyle = ({ editor, className, container }: HeadingDropdownProps) => {
  const headingLevel = levels.find((level) => editor.isActive('heading', { level }))
  const isBlockquoteActive = editor.isActive('blockquote')
  const headingText = headingLevel
    ? `Heading ${headingLevel}`
    : isBlockquoteActive
      ? `Quote`
      : 'Paragraph'

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={className}>{headingText}</DropdownMenuTrigger>
      <DropdownMenuContent container={container}>
        <DropdownMenuItem
          onClick={() => {
            if (headingLevel) {
              editor.chain().focus().toggleBlockquote().toggleHeading({ level: headingLevel }).run()
              return
            }
            editor.chain().focus().toggleBlockquote().run()
          }}
          className='flex justify-between gap-4'>
          <span>Quote</span>
          {isBlockquoteActive && <CheckIcon />}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        {levels.map((level) => (
          <DropdownMenuItem
            key={level}
            onClick={() => editor.chain().focus().unsetBlockquote().toggleHeading({ level }).run()}
            className='flex justify-between gap-4'>
            <span>Heading {level}</span>
            {headingLevel === level && <CheckIcon className='size-4' />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
