import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverClose,
} from '@mantul/components/ui/popover'
import { Input } from '@mantul/components/ui/input'
import { Button } from '@mantul/components/ui/button'
import { Link2Icon } from 'lucide-react'
import { useState } from 'react'
import { Editor } from '@tiptap/core'

interface ToolbarLinkProps {
  className?: string
  editor: Editor
}

export const ToolbarLink = ({ editor, className }: ToolbarLinkProps) => {
  const [url, setUrl] = useState('')

  return (
    <Popover >
      <PopoverTrigger asChild>
        <Button variant='ghost' size='icon' className={className}>
          <Link2Icon className='size-4' />
        </Button>
      </PopoverTrigger>
      <PopoverContent  className='flex w-80 flex-col items-end gap-4'>
        <Input placeholder='Url' value={url} onChange={(ev) => setUrl(ev.target.value)} />
        <PopoverClose asChild>
          <Button
            onClick={() =>
              editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
            }>
            Confirm
          </Button>
        </PopoverClose>
      </PopoverContent>
    </Popover>
  )
}
