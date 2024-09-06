import { Editor } from '@tiptap/core'

import { ToolbarHeadingStyle } from '@mantul/app/[locale]/(admin)/extras/wysiwyg/components/toolbar-heading-style'
import { ToolbarLink } from '@mantul/app/[locale]/(admin)/extras/wysiwyg/components/toolbar-link'
import { ToolbarListStyle } from '@mantul/app/[locale]/(admin)/extras/wysiwyg/components/toolbar-list-style'
import { ToolbarTextStyle } from '@mantul/app/[locale]/(admin)/extras/wysiwyg/components/toolbar-text-style'
import { ToolbarUndoRedo } from '@mantul/app/[locale]/(admin)/extras/wysiwyg/components/toolbar-undo-redo'
import { Separator } from '@mantul/components/ui/separator'
import { cn } from '@mantul/libs/utils'
import { BubbleMenu } from '@tiptap/react'
import { PropsWithChildren, useCallback, useRef, useState } from 'react'

export interface EditorToolbarProps {
  className?: string
  editor: Editor
  bubble?: boolean
}

export const Toolbar = ({ editor, className, bubble }: EditorToolbarProps) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const Container = useCallback(
    ({ children }: PropsWithChildren) => {
      if (bubble) {
        return (
          <BubbleMenu
            editor={editor}
            className='w-full max-w-screen-2xl'
            tippyOptions={{ maxWidth: 765 }}>
            {children}
          </BubbleMenu>
        )
      }

      return <>{children}</>
    },
    [bubble, editor],
  )

  return (
    <Container>
      <div
        ref={ref}
        className={cn(
          'flex w-full flex-row flex-wrap items-center justify-start gap-1 py-1',
          className,
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
      </div>
    </Container>
  )
}
