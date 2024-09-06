import { Editor } from '@mantul/app/[locale]/(admin)/extras/wysiwyg/components/editor'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wysiwyg',
}


export default function WysiwygPage() {
  return (
    <main className='mx-auto flex w-full max-w-screen-2xl flex-col p-4'>
      <Editor />
    </main>
  )
}
