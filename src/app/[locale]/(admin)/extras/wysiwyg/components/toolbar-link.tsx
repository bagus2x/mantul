import { Button } from '@mantul/components/ui/button'
import { Card } from '@mantul/components/ui/card'
import { Input } from '@mantul/components/ui/input'
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from '@mantul/components/ui/popover'
import { cn } from '@mantul/libs/utils'
import { Editor } from '@tiptap/core'
import { BubbleMenu } from '@tiptap/react'
import { EditIcon, ExternalLink, Link2Icon, UnlinkIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

interface ToolbarLinkProps {
  className?: string
  editor: Editor
}

export const ToolbarLink = ({ editor, className }: ToolbarLinkProps) => {
  const [url, setUrl] = useState('')
  const [open, setOpen] = useState(false)

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant='ghost'
            size='icon'
            className={className}
            disabled={editor.state.selection.from === editor.state.selection.to}
            onClick={() => {
              setOpen(true)
              const href = editor.getAttributes('link').href
              setUrl(href || '')
            }}>
            <Link2Icon className='size-4' />
          </Button>
        </PopoverTrigger>
        <PopoverContent className='flex w-80 flex-col items-end gap-4'>
          <Input placeholder='Url' value={url} onChange={(ev) => setUrl(ev.target.value)} />
          <PopoverClose asChild>
            <Button
              onClick={() => {
                if (url) {
                  editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
                } else {
                  editor.chain().focus().extendMarkRange('link').unsetLink().run()
                }
                setUrl('')
              }}>
              Confirm
            </Button>
          </PopoverClose>
        </PopoverContent>
      </Popover>
      <BubbleLink editor={editor} />
    </>
  )
}

export const BubbleLink = ({ editor, className }: ToolbarLinkProps) => {
  const href = editor.getAttributes('link').href
  const [newHref, setNewHref] = useState('')
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    setNewHref(href)
    setIsEditing(false)
  }, [href])

  return (
    <BubbleMenu
      editor={editor}
      className={cn(className, 'w-full max-w-sm')}
      shouldShow={({ editor }) => !!editor.getAttributes('link').href}>
      {isEditing && (
        <Card className='flex w-full flex-col gap-4 p-1'>
          <Input
            className='min-w-80'
            value={newHref}
            onChange={(ev) => setNewHref(ev.target.value)}
          />
          <Button
            onClick={() => {
              editor.chain().extendMarkRange('link').setLink({ href: newHref }).run()
              setIsEditing(false)
            }}>
            Save
          </Button>
          <Button
            variant='outline'
            onClick={() => {
              setIsEditing(false)
            }}>
            Cancel
          </Button>
        </Card>
      )}
      {!isEditing && (
        <Card className='flex flex-row items-center gap-1 p-1'>
          <span className='min-w-0 flex-1 overflow-hidden text-ellipsis px-2 text-sm text-secondary'>
            {href}
          </span>
          <div className='border-s ps-1'>
            <Button size='icon' variant='ghost' asChild>
              <a href={href} target='_blank'>
                <ExternalLink className='size-4' /> <span className='sr-only'>Visit</span>
              </a>
            </Button>
            <Button
              size='icon'
              variant='ghost'
              onClick={() => {
                editor.chain().focus().extendMarkRange('link').unsetLink().run()
              }}>
              <UnlinkIcon className='size-4' /> <span className='sr-only'>Unlink</span>
            </Button>
            <Button size='icon' variant='ghost' onClick={() => setIsEditing(true)}>
              <EditIcon className='size-4' /> <span className='sr-only'>Edit</span>
            </Button>
          </div>
        </Card>
      )}
    </BubbleMenu>
  )
}
