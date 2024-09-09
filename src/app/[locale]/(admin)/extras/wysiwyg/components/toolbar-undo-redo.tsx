import { Editor } from '@tiptap/core'
import { Redo2Icon, Undo2Icon } from 'lucide-react'

import { Button } from '@mantul/components/ui/button'
import { toggleVariants } from '@mantul/components/ui/toggle'
import { cn } from '@mantul/libs/utils'

interface UndoRedoButtonsProps {
  className?: string
  editor: Editor
}

export const ToolbarUndoRedo = ({ editor, className }: UndoRedoButtonsProps) => {
  return (
    <div className={cn(className)}>
      <Button
        variant='ghost'
        size='icon'
        className={toggleVariants({ size: 'sm', className })}
        onClick={() => editor.commands.undo()}
        disabled={!editor.can().undo()}>
        <Undo2Icon className='size-4' />
      </Button>
      <Button
        variant='ghost'
        size='icon'
        className={toggleVariants({ size: 'sm', className })}
        onClick={() => editor.commands.redo()}
        disabled={!editor.can().redo()}>
        <Redo2Icon className='size-4' />
      </Button>
    </div>
  )
}
