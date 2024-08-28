'use client'

import * as React from 'react'
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@mantul/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@mantul/components/ui/chart'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@mantul/components/ui/select'
import { cn } from '@mantul/libs/utils'

const chartData = [
  { date: '2024-04-01', earnings: 222, spendings: 150 },
  { date: '2024-04-02', earnings: 97, spendings: 180 },
  { date: '2024-04-03', earnings: 167, spendings: 120 },
  { date: '2024-04-04', earnings: 242, spendings: 260 },
  { date: '2024-04-05', earnings: 373, spendings: 290 },
  { date: '2024-04-06', earnings: 301, spendings: 340 },
  { date: '2024-04-07', earnings: 245, spendings: 180 },
  { date: '2024-04-08', earnings: 409, spendings: 320 },
  { date: '2024-04-09', earnings: 59, spendings: 110 },
  { date: '2024-04-10', earnings: 261, spendings: 190 },
  { date: '2024-04-11', earnings: 327, spendings: 350 },
  { date: '2024-04-12', earnings: 292, spendings: 210 },
  { date: '2024-04-13', earnings: 342, spendings: 380 },
  { date: '2024-04-14', earnings: 137, spendings: 220 },
  { date: '2024-04-15', earnings: 120, spendings: 170 },
  { date: '2024-04-16', earnings: 138, spendings: 190 },
  { date: '2024-04-17', earnings: 446, spendings: 360 },
  { date: '2024-04-18', earnings: 364, spendings: 410 },
  { date: '2024-04-19', earnings: 243, spendings: 180 },
  { date: '2024-04-20', earnings: 89, spendings: 150 },
  { date: '2024-04-21', earnings: 137, spendings: 200 },
  { date: '2024-04-22', earnings: 224, spendings: 170 },
  { date: '2024-04-23', earnings: 138, spendings: 230 },
  { date: '2024-04-24', earnings: 387, spendings: 290 },
  { date: '2024-04-25', earnings: 215, spendings: 250 },
  { date: '2024-04-26', earnings: 75, spendings: 130 },
  { date: '2024-04-27', earnings: 383, spendings: 420 },
  { date: '2024-04-28', earnings: 122, spendings: 180 },
  { date: '2024-04-29', earnings: 315, spendings: 240 },
  { date: '2024-04-30', earnings: 454, spendings: 380 },
  { date: '2024-05-01', earnings: 165, spendings: 220 },
  { date: '2024-05-02', earnings: 293, spendings: 310 },
  { date: '2024-05-03', earnings: 247, spendings: 190 },
  { date: '2024-05-04', earnings: 385, spendings: 420 },
  { date: '2024-05-05', earnings: 481, spendings: 390 },
  { date: '2024-05-06', earnings: 498, spendings: 520 },
  { date: '2024-05-07', earnings: 388, spendings: 300 },
  { date: '2024-05-08', earnings: 149, spendings: 210 },
  { date: '2024-05-09', earnings: 227, spendings: 180 },
  { date: '2024-05-10', earnings: 293, spendings: 330 },
  { date: '2024-05-11', earnings: 335, spendings: 270 },
  { date: '2024-05-12', earnings: 197, spendings: 240 },
  { date: '2024-05-13', earnings: 197, spendings: 160 },
  { date: '2024-05-14', earnings: 448, spendings: 490 },
  { date: '2024-05-15', earnings: 473, spendings: 380 },
  { date: '2024-05-16', earnings: 338, spendings: 400 },
  { date: '2024-05-17', earnings: 499, spendings: 420 },
  { date: '2024-05-18', earnings: 315, spendings: 350 },
  { date: '2024-05-19', earnings: 235, spendings: 180 },
  { date: '2024-05-20', earnings: 177, spendings: 230 },
  { date: '2024-05-21', earnings: 82, spendings: 140 },
  { date: '2024-05-22', earnings: 81, spendings: 120 },
  { date: '2024-05-23', earnings: 252, spendings: 290 },
  { date: '2024-05-24', earnings: 294, spendings: 220 },
  { date: '2024-05-25', earnings: 201, spendings: 250 },
  { date: '2024-05-26', earnings: 213, spendings: 170 },
  { date: '2024-05-27', earnings: 420, spendings: 460 },
  { date: '2024-05-28', earnings: 233, spendings: 190 },
  { date: '2024-05-29', earnings: 78, spendings: 130 },
  { date: '2024-05-30', earnings: 340, spendings: 280 },
  { date: '2024-05-31', earnings: 178, spendings: 230 },
  { date: '2024-06-01', earnings: 178, spendings: 200 },
  { date: '2024-06-02', earnings: 470, spendings: 410 },
  { date: '2024-06-03', earnings: 103, spendings: 160 },
  { date: '2024-06-04', earnings: 439, spendings: 380 },
  { date: '2024-06-05', earnings: 88, spendings: 140 },
  { date: '2024-06-06', earnings: 294, spendings: 250 },
  { date: '2024-06-07', earnings: 323, spendings: 370 },
  { date: '2024-06-08', earnings: 385, spendings: 320 },
  { date: '2024-06-09', earnings: 438, spendings: 480 },
  { date: '2024-06-10', earnings: 155, spendings: 200 },
  { date: '2024-06-11', earnings: 92, spendings: 150 },
  { date: '2024-06-12', earnings: 492, spendings: 420 },
  { date: '2024-06-13', earnings: 81, spendings: 130 },
  { date: '2024-06-14', earnings: 426, spendings: 380 },
  { date: '2024-06-15', earnings: 307, spendings: 350 },
  { date: '2024-06-16', earnings: 371, spendings: 310 },
  { date: '2024-06-17', earnings: 475, spendings: 520 },
  { date: '2024-06-18', earnings: 107, spendings: 170 },
  { date: '2024-06-19', earnings: 341, spendings: 290 },
  { date: '2024-06-20', earnings: 408, spendings: 450 },
  { date: '2024-06-21', earnings: 169, spendings: 210 },
  { date: '2024-06-22', earnings: 317, spendings: 270 },
  { date: '2024-06-23', earnings: 480, spendings: 530 },
  { date: '2024-06-24', earnings: 132, spendings: 180 },
  { date: '2024-06-25', earnings: 141, spendings: 190 },
  { date: '2024-06-26', earnings: 434, spendings: 380 },
  { date: '2024-06-27', earnings: 448, spendings: 490 },
  { date: '2024-06-28', earnings: 149, spendings: 200 },
  { date: '2024-06-29', earnings: 103, spendings: 160 },
  { date: '2024-06-30', earnings: 446, spendings: 400 },
]

const chartConfig = {
  visitors: {
    label: 'Revenue',
  },
  earnings: {
    label: 'Earnings',
    color: 'hsl(var(--chart-1))',
  },
  spendings: {
    label: 'Spendings',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig

export interface TransactionChartProps {
  className?: string
}

export function RevenueAreaChart({ className }: TransactionChartProps) {
  const [timeRange, setTimeRange] = React.useState('90d')

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const now = new Date()
    let daysToSubtract = 90
    if (timeRange === '30d') {
      daysToSubtract = 30
    } else if (timeRange === '7d') {
      daysToSubtract = 7
    }
    now.setDate(now.getDate() - daysToSubtract)
    return date >= now
  })

  return (
    <Card className={cn(className)}>
      <CardHeader className='flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row'>
        <div className='grid gap-1 text-center sm:text-left'>
          <CardTitle>Revenue Stream</CardTitle>
          <CardDescription>Showing total revenue for the last 3 months</CardDescription>
        </div>
        <div className='flex-1' />
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className='w-[160px] rounded-lg sm:ml-auto' aria-label='Select a value'>
            <SelectValue placeholder='Last 3 months' />
          </SelectTrigger>
          <SelectContent className='rounded-xl'>
            <SelectItem value='90d' className='rounded-lg'>
              Last 3 months
            </SelectItem>
            <SelectItem value='30d' className='rounded-lg'>
              Last 30 days
            </SelectItem>
            <SelectItem value='7d' className='rounded-lg'>
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className='px-2 pt-4 sm:px-6 sm:pt-6'>
        <ChartContainer config={chartConfig} className='aspect-auto h-[250px] w-full'>
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id='fillearnings' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='var(--color-earnings)' stopOpacity={0.8} />
                <stop offset='95%' stopColor='var(--color-earnings)' stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id='fillspendings' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='var(--color-spendings)' stopOpacity={0.8} />
                <stop offset='95%' stopColor='var(--color-spendings)' stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='date'
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                    })
                  }}
                  indicator='dot'
                />
              }
            />
            <Area
              dataKey='spendings'
              type='natural'
              fill='url(#fillspendings)'
              stroke='var(--color-spendings)'
              stackId='a'
            />
            <Area
              dataKey='earnings'
              type='natural'
              fill='url(#fillearnings)'
              stroke='var(--color-earnings)'
              stackId='a'
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
