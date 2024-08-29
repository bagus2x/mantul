import { Card } from '@mantul/components/ui/card'

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='prose w-full max-w-full p-4 prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white'>
      <Card className='rounded-sg border bg-card p-4 text-card-foreground shadow-sm'>
        {children}
      </Card>
    </main>
  )
}
