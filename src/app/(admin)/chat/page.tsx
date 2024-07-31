'use client'

import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from '@mantul/component/ui/drawer'

export function MyDrawer() {
  return (
    <Drawer direction='right'>
      <DrawerTrigger asChild>
        <button>Open Drawer</button>
      </DrawerTrigger>

      <DrawerContent className='fixed bottom-0 right-0 mt-24 flex h-screen w-[400px] flex-col overflow-x-hidden overflow-y-scroll rounded-t-[10px] bg-white'>
        <div className='h-full flex-1 bg-white p-4'>
          <div className='mx-auto max-w-md'>
            <DrawerTitle className='mb-4 font-medium'>Unstyled drawer for React.</DrawerTitle>
            <p className='mb-2 text-zinc-600'>
              This component can be used as a replacement for a Dialog on mobile and tablet devices.
            </p>
            <div className='space-y-4 p-4 pb-0'>
              <div className='flex h-32 items-center justify-center rounded-lg bg-zinc-300'>
                <p>Image 1</p>
              </div>
              <div className='flex h-32 items-center justify-center rounded-lg bg-zinc-300'>
                <p>Image 2</p>
              </div>
              <div className='flex h-32 items-center justify-center rounded-lg bg-zinc-300'>
                <p>Image 3</p>
              </div>
              <div className='flex h-32 items-center justify-center rounded-lg bg-zinc-300'>
                <p>Image 4</p>
              </div>
              <div className='flex h-32 items-center justify-center rounded-lg bg-zinc-300'>
                <p>Image 4</p>
              </div>
              <div className='flex h-32 items-center justify-center rounded-lg bg-zinc-300'>
                <p>Image 5</p>
              </div>
              <div className='flex h-32 items-center justify-center rounded-lg bg-zinc-300'>
                <p>Image 6</p>
              </div>
              <div className='flex h-32 items-center justify-center rounded-lg bg-zinc-300'>
                <p>Image 7</p>
              </div>
              <div className='flex h-32 items-center justify-center rounded-lg bg-zinc-300'>
                <p>Image 8</p>
              </div>
              <div className='flex h-32 items-center justify-center rounded-lg bg-zinc-300'>
                <p>Image 9</p>
              </div>
              <div className='flex h-32 items-center justify-center rounded-lg bg-zinc-300'>
                <p>Image 10</p>
              </div>
              <div className='flex h-32 items-center justify-center rounded-lg bg-zinc-300'>
                <p>Image 11</p>
              </div>
            </div>
            <p className='mb-8 text-zinc-600'>
              It uses{' '}
              <a
                href='https://www.radix-ui.com/docs/primitives/components/dialog'
                className='underline'
                target='_blank'>
                Radix&rsquo;s Dialog primitive
              </a>{' '}
              under the hood and is inspired by{' '}
              <a
                href='https://twitter.com/devongovett/status/1674470185783402496'
                className='underline'
                target='_blank'>
                this tweet.
              </a>
            </p>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default function Page() {
  return (
    <main>
      <MyDrawer />
    </main>
  )
}
