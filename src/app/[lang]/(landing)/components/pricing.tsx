'use client'

import { CheckCircle2Icon } from 'lucide-react'
import { useState } from 'react'

import BlurFade from '@mantul/components/magicui/blur-fade'
import { Button } from '@mantul/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@mantul/components/ui/card'
import { Tabs, TabsList, TabsTrigger } from '@mantul/components/ui/tabs'
import { cn } from '@mantul/libs/utils'
import { BorderBeam } from '@mantul/components/magicui/border-beam'

type PricingCardProps = {
  isYearly?: boolean
  title: string
  monthlyPrice?: number
  yearlyPrice?: number
  description: string
  features: string[]
  actionLabel: string
  popular?: boolean
  exclusive?: boolean
  className?: string
}

export const PricingCard = ({
  isYearly,
  title,
  monthlyPrice,
  yearlyPrice,
  description,
  features,
  actionLabel,
  popular,
  exclusive,
  className,
}: PricingCardProps) => (
  <Card
    className={cn(
      `relative mx-auto flex w-72 flex-col justify-between py-1 ring-primary sm:mx-0`,
      {
        'animate-background-shine bg-white bg-[length:200%_100%] transition-colors dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)]':
          exclusive,
      },
      popular && 'shadow-2xl ring-2 ring-primary',
      className,
    )}>
    {/* {popular && <BorderBeam size={250} duration={6} delay={9} />} */}
    <div>
      <CardHeader className='pb-8 pt-4'>
        {isYearly && yearlyPrice && monthlyPrice ? (
          <div className='flex justify-between'>
            <CardTitle className='text-lg text-zinc-700 dark:text-zinc-300'>{title}</CardTitle>
            <div
              className={cn(
                'h-fit rounded-xl bg-zinc-200 px-2.5 py-1 text-sm text-black dark:bg-zinc-800 dark:text-white',
                {
                  'bg-gradient-to-r from-orange-400 to-rose-400 dark:text-black': popular,
                },
              )}>
              Save ${monthlyPrice * 12 - yearlyPrice}
            </div>
          </div>
        ) : (
          <CardTitle className='text-lg text-zinc-700 dark:text-zinc-300'>{title}</CardTitle>
        )}
        <div className='flex gap-0.5'>
          <h3 className='text-3xl font-bold'>
            {yearlyPrice && isYearly
              ? '$' + yearlyPrice
              : monthlyPrice
                ? '$' + monthlyPrice
                : 'Custom'}
          </h3>
          <span className='mb-1 flex flex-col justify-end text-sm'>
            {yearlyPrice && isYearly ? '/year' : monthlyPrice ? '/month' : null}
          </span>
        </div>
        <CardDescription className='h-12 pt-1.5'>{description}</CardDescription>
      </CardHeader>
      <CardContent className='flex flex-col gap-2'>
        {features.map((feature: string) => (
          <CheckItem key={feature} text={feature} />
        ))}
      </CardContent>
    </div>
    <CardFooter className='mt-2'>
      <Button className='w-full' variant={popular ? 'default' : 'outline'}>
        {actionLabel}
      </Button>
    </CardFooter>
  </Card>
)

const CheckItem = ({ text }: { text: string }) => (
  <div className='flex gap-2'>
    <CheckCircle2Icon size={18} className='my-auto text-green-400' />
    <p className='pt-0.5 text-sm text-zinc-700 dark:text-zinc-300'>{text}</p>
  </div>
)

export const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false)

  const handleTogglePricing = (value: string) => {
    setIsYearly(parseInt(value) === 1)
  }

  const plans = [
    {
      title: 'Basic',
      monthlyPrice: 10,
      yearlyPrice: 100,
      description: 'Essential features you need to get started',
      features: [
        'Example Feature Number 1',
        'Example Feature Number 2',
        'Example Feature Number 3',
      ],
      actionLabel: 'Get Started',
    },
    {
      title: 'Pro',
      monthlyPrice: 25,
      yearlyPrice: 250,
      description: 'Perfect for owners of small & medium businesses',
      features: [
        'Example Feature Number 1',
        'Example Feature Number 2',
        'Example Feature Number 3',
      ],
      actionLabel: 'Get Started',
      popular: true,
    },
    {
      title: 'Enterprise',
      price: 'Custom',
      description: 'Dedicated support and infrastructure to fit your needs',
      features: [
        'Example Feature Number 1',
        'Example Feature Number 2',
        'Example Feature Number 3',
        'Super Exclusive Feature',
      ],
      actionLabel: 'Contact Sales',
      exclusive: true,
    },
  ]
  return (
    <BlurFade id='pricing' inView as='section' className='bg-gray-50 py-8 dark:bg-background'>
      <div className='text-center'>
        <h2 className='text-3xl font-bold'>Pricing Plans</h2>
        <p className='pt-1 text-xl'>Choose the plan that&apos;s right for you</p>
      </div>
      <Tabs defaultValue='0' className='mx-auto w-40' onValueChange={handleTogglePricing}>
        <TabsList className='px-2 py-6'>
          <TabsTrigger value='0' className='text-base'>
            Monthly
          </TabsTrigger>
          <TabsTrigger value='1' className='text-base'>
            Yearly
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <div className='mt-8 flex flex-col justify-center gap-8 sm:flex-row sm:flex-wrap'>
        {plans.map((plan) => {
          return <PricingCard key={plan.title} {...plan} isYearly={isYearly} />
        })}
      </div>
    </BlurFade>
  )
}
