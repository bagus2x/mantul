'use client'

import BulletList from '@tiptap/extension-bullet-list'
import Code from '@tiptap/extension-code'
import ListItem from '@tiptap/extension-list-item'
import OrderedList from '@tiptap/extension-ordered-list'
import Underline from '@tiptap/extension-underline'
import {
  EditorContent,
  useEditor
} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import { Toolbar } from '@mantul/app/[locale]/(admin)/extras/wysiwyg/components/toolbar'
import { Card } from '@mantul/components/ui/card'
import { cn } from '@mantul/libs/utils'
import Link from '@tiptap/extension-link'

export interface EditorProps {
  className?: string
}

export const Editor = ({ className }: EditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3, 4, 5, 6],
        },
      }),
      Underline,
      Code,
      BulletList,
      OrderedList,
      ListItem,
      Link.configure({ openOnClick: false }),
    ],
    editorProps: {
      attributes: {
        class:
          'focus:outline-none dark:prose-invert prose-code:before:hidden prose-code:after:hidden prose-code:bg-muted prose-code:text-muted-foreground prose-code:px-1 prose w-full prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white',
      },
    },
    onUpdate: ({ editor }) => {
      console.log(editor.getHTML())
    },
    immediatelyRender: false,
    content: `
      <p>Ini adalah <a href="https://example.com">contoh link</a></p>
    `,
  })

  return (
    <Card className={cn('flex flex-col gap-4 p-4', className)}>
      {editor && <Toolbar editor={editor} />}
      <EditorContent editor={editor} className='w-full rounded-xl border p-4 outline-none' />
    </Card>
  )
}
