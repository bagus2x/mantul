import { Editor } from '@tiptap/core'
import { BubbleMenu } from '@tiptap/react'
import { Fragment, PropsWithChildren, useCallback, useRef, useState } from 'react'

import { ToolbarHeadingStyle } from '@mantul/app/[locale]/(admin)/extras/wysiwyg/components/toolbar-heading-style'
import { ToolbarLink } from '@mantul/app/[locale]/(admin)/extras/wysiwyg/components/toolbar-link'
import { ToolbarListStyle } from '@mantul/app/[locale]/(admin)/extras/wysiwyg/components/toolbar-list-style'
import { ToolbarTextStyle } from '@mantul/app/[locale]/(admin)/extras/wysiwyg/components/toolbar-text-style'
import { ToolbarUndoRedo } from '@mantul/app/[locale]/(admin)/extras/wysiwyg/components/toolbar-undo-redo'
import { Separator } from '@mantul/components/ui/separator'
import { cn } from '@mantul/libs/utils'
import { Button } from '@mantul/components/ui/button'
import { PinIcon, PinOffIcon } from 'lucide-react'
import { useToggle } from '@mantul/hooks/use-toggle'
export interface EditorToolbarProps {
  className?: string
  editor: Editor
}

export const Toolbar = ({ editor, className }: EditorToolbarProps) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isBubble, toggleBubble] = useToggle(false)

  const Container = useCallback(
    ({ children }: PropsWithChildren) => {
      if (isBubble) {
        return (
          <BubbleMenu
            editor={editor}
            className='w-full max-w-screen-2xl'
            tippyOptions={{ maxWidth: 765 }}>
            {children}
          </BubbleMenu>
        )
      }

      return <div>{children}</div>
    },
    [isBubble, editor],
  )

  return (
    <Container>
      <div
        ref={ref}
        className={cn(
          'flex w-full flex-row flex-wrap items-center justify-start gap-1 rounded-md border bg-card p-1',
          className,
          isBubble && 'sticky top-20 z-10',
        )}>
        <ToolbarUndoRedo editor={editor} />
        <Separator orientation='vertical' className='mx-2 h-full min-h-6' />
        <ToolbarTextStyle editor={editor} />
        <Separator orientation='vertical' className='mx-2 h-full min-h-6' />
        <ToolbarListStyle editor={editor} />
        <Separator orientation='vertical' className='mx-2 h-full min-h-6' />
        <ToolbarHeadingStyle editor={editor} container={ref.current} />
        <Separator orientation='vertical' className='mx-2 h-full min-h-6' />
        <ToolbarLink editor={editor} />
        <div className='flex-1' />
        <Button size='icon' variant='ghost' onClick={toggleBubble}>
          {isBubble ? <PinOffIcon className='size-4' /> : <PinIcon className='size-4' />}
        </Button>
      </div>
    </Container>
  )
}
