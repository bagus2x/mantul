import { Button } from '@mantul/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@mantul/components/ui/card'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Extended UI',
}

export default function ExtendedUiPage() {
  return (
    <main className='mx-auto flex w-full max-w-screen-2xl flex-col gap-4 p-4'>
      <p>
        This dashboard uses components from shadcn/ui and Magic UI. You can add other components to
        this dashboard and modify them.
      </p>
      <section className='flex w-full max-w-screen-sm gap-4'>
        <Card className='flex-1'>
          <CardHeader>
            <CardTitle>shadcn/ui</CardTitle>
          </CardHeader>
          <CardContent className='flex flex-col gap-4'>
            <Image
              src='/brand/shadcn.svg'
              height={0}
              width={0}
              alt='shadcn/ui'
              className='aspect-square h-full w-full'
            />
            <p className='text-sm text-muted-foreground'>
              Beautifully designed components that you can copy and paste into your apps.
              Accessible. Customizable. Open Source.
            </p>
          </CardContent>
          <CardFooter className='flex justify-end'>
            <Button asChild>
              <a href='https://ui.shadcn.com/'>Visit</a>
            </Button>
          </CardFooter>
        </Card>
        <Card className='flex-1'>
          <CardHeader>
            <CardTitle>Magic UI</CardTitle>
          </CardHeader>
          <CardContent className='flex flex-col gap-4'>
            <Image
              src='/brand/magic-ui.png'
              height={400}
              width={400}
              alt='shadcn/ui'
              className='aspect-square h-full w-full'
            />
            <p className='text-sm text-muted-foreground'>
              Magic UI is a collection of re-usable components that you can copy and paste into your
              web apps.
            </p>
          </CardContent>
          <CardFooter className='flex justify-end'>
            <Button asChild>
              <a href='https://ui.shadcn.com/'>Visit</a>
            </Button>
          </CardFooter>
        </Card>
      </section>
    </main>
  )
}
