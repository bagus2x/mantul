import { Editor } from '@tiptap/core'
import { Level } from '@tiptap/extension-heading'
import {
  BoldIcon,
  ItalicIcon,
  ListIcon,
  ListOrderedIcon,
  Redo2Icon,
  StrikethroughIcon,
  UnderlineIcon,
  Undo2Icon,
} from 'lucide-react'

import { Button } from '@mantul/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@mantul/components/ui/dropdown-menu'
import { Separator } from '@mantul/components/ui/separator'
import { toggleVariants } from '@mantul/components/ui/toggle'
import { ToggleGroup, ToggleGroupItem } from '@mantul/components/ui/toggle-group'
import { cn } from '@mantul/libs/utils'

export interface EditorToolbarProps {
  className?: string
  editor: Editor
}

export const EditorToolbar = ({ editor, className }: EditorToolbarProps) => {
  const textStyles = ['bold', 'italic', 'strike', 'underline', 'orderedList', 'bulletList'].filter(
    (style) => editor.isActive(style),
  )
  const headingLevel = [1, 2, 3, 4].find((level) => editor.isActive('heading', { level }))
  const headingText = headingLevel
    ? `Heading ${headingLevel}`
    : editor.isActive('blockquote')
      ? `Quote`
      : 'Paragraph'

  return (
    <div className={cn('flex flex-wrap items-center gap-1 py-1', className)}>
      <Button
        variant='ghost'
        size='icon'
        className={toggleVariants({ size: 'sm' })}
        onClick={() => editor.commands.undo()}
        disabled={!editor.can().undo()}>
        <Undo2Icon />
      </Button>
      <Button
        variant='ghost'
        size='icon'
        className={toggleVariants({ size: 'sm' })}
        onClick={() => editor.commands.redo()}
        disabled={!editor.can().redo()}>
        <Redo2Icon />
      </Button>
      <Separator orientation='vertical' className='mx-2 h-full min-h-6' />
      <ToggleGroup type='multiple' value={textStyles}>
        <ToggleGroupItem
          size='sm'
          value='bold'
          aria-label='Toggle bold'
          onClick={() => editor.chain().focus().toggleBold().run()}>
          <BoldIcon className='h-4 w-4' />
        </ToggleGroupItem>
        <ToggleGroupItem
          size='sm'
          value='italic'
          aria-label='Toggle italic'
          onClick={() => editor.chain().focus().toggleItalic().run()}>
          <ItalicIcon className='h-4 w-4' />
        </ToggleGroupItem>
        <ToggleGroupItem
          size='sm'
          value='strike'
          aria-label='Toggle strikethrough'
          onClick={() => editor.chain().focus().toggleStrike().run()}>
          <StrikethroughIcon className='h-4 w-4' />
        </ToggleGroupItem>
        <ToggleGroupItem
          size='sm'
          value='underline'
          aria-label='Toggle underline'
          onClick={() => editor.chain().focus().toggleUnderline().run()}>
          <UnderlineIcon className='h-4 w-4' />
        </ToggleGroupItem>
      </ToggleGroup>
      <Separator orientation='vertical' className='mx-2 h-full min-h-6' />
      <ToggleGroup type='multiple' value={textStyles}>
        <ToggleGroupItem
          size='sm'
          value='bulletList'
          aria-label='Toggle bullet list'
          onClick={() => editor.chain().focus().toggleBulletList().run()}>
          <ListIcon className='h-4 w-4' />
        </ToggleGroupItem>
        <ToggleGroupItem
          size='sm'
          value='orderedList'
          aria-label='Toggle ordered list'
          onClick={() => editor.chain().focus().toggleOrderedList().run()}>
          <ListOrderedIcon className='h-4 w-4' />
        </ToggleGroupItem>
      </ToggleGroup>
      <Separator orientation='vertical' className='mx-2 h-full min-h-6' />
      <DropdownMenu>
        <DropdownMenuTrigger className='flex h-10 w-[180px] items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1'>
          {headingText}
        </DropdownMenuTrigger>
        <DropdownMenuContent className='min-w-[180px]'>
          <DropdownMenuItem
            onClick={() => {
              if (headingLevel) {
                editor
                  .chain()
                  .focus()
                  .toggleBlockquote()
                  .toggleHeading({ level: headingLevel as Level })
                  .run()
                return
              }
              editor.chain().focus().toggleBlockquote().run()
            }}>
            Quote
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() =>
              editor.chain().focus().unsetBlockquote().toggleHeading({ level: 1 }).run()
            }>
            Heading 1
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() =>
              editor.chain().focus().unsetBlockquote().toggleHeading({ level: 2 }).run()
            }>
            Heading 2
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() =>
              editor.chain().focus().unsetBlockquote().toggleHeading({ level: 3 }).run()
            }>
            Heading 3
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() =>
              editor.chain().focus().unsetBlockquote().toggleHeading({ level: 4 }).run()
            }>
            Heading 4
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
