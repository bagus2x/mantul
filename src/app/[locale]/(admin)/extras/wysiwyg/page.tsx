'use client'

import { EditorToolbar } from '@mantul/app/[locale]/(admin)/extras/wysiwyg/components/editor-toolbar'
import { Card } from '@mantul/components/ui/card'
import BulletList from '@tiptap/extension-bullet-list'
import Code from '@tiptap/extension-code'
import ListItem from '@tiptap/extension-list-item'
import OrderedList from '@tiptap/extension-ordered-list'
import Underline from '@tiptap/extension-underline'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

export default function WysiwygPage() {
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
    ],
    editorProps: {
      attributes: {
        class:
          'focus:outline-none prose w-full prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white',
      },
    },
    content: `
      <p>type here</p>
    `,
  })

  return (
    <main className='mx-auto flex w-full max-w-screen-2xl flex-col p-4'>
      <Card className='flex flex-col gap-4 p-4'>
        {editor && <EditorToolbar editor={editor} />}
        <EditorContent editor={editor} className='w-full rounded-xl border p-4 outline-none' />
      </Card>
    </main>
  )
}
