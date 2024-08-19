'use client'

import * as React from 'react'
import { add, format } from 'date-fns'
import { Calendar as CalendarIcon, ClockIcon } from 'lucide-react'

import { cn } from '@mantul/libs/utils'
import { Button } from '@mantul/components/ui/button'
import { Calendar } from '@mantul/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@mantul/components/ui/popover'
import { TimePickerInput } from '@mantul/components/ui/time-picker'
import { Label } from '@mantul/components/ui/label'

interface TimePicker {
  date: Date | undefined
  setDate: (date: Date | undefined) => void
}

export function TimePickerDemo({ date, setDate }: TimePicker) {
  const minuteRef = React.useRef<HTMLInputElement>(null)
  const hourRef = React.useRef<HTMLInputElement>(null)
  const secondRef = React.useRef<HTMLInputElement>(null)

  return (
    <div className='flex items-end gap-2'>
      <div className='grid gap-1 text-center'>
        <Label htmlFor='hours' className='text-xs'>
          Hours
        </Label>
        <TimePickerInput
          picker='hours'
          date={date}
          setDate={setDate}
          ref={hourRef}
          onRightFocus={() => minuteRef.current?.focus()}
        />
      </div>
      <div className='grid gap-1 text-center'>
        <Label htmlFor='minutes' className='text-xs'>
          Minutes
        </Label>
        <TimePickerInput
          picker='minutes'
          date={date}
          setDate={setDate}
          ref={minuteRef}
          onLeftFocus={() => hourRef.current?.focus()}
          onRightFocus={() => secondRef.current?.focus()}
        />
      </div>
      <div className='grid gap-1 text-center'>
        <Label htmlFor='seconds' className='text-xs'>
          Seconds
        </Label>
        <TimePickerInput
          picker='seconds'
          date={date}
          setDate={setDate}
          ref={secondRef}
          onLeftFocus={() => minuteRef.current?.focus()}
        />
      </div>
      <div className='flex h-10 items-center'>
        <ClockIcon className='ml-2 h-4 w-4' />
      </div>
    </div>
  )
}

export interface DateTimePickerProps {
  className?: string
  value?: Date
  onChange?: (value?: Date) => void
}

export function DateTimePicker({ className, value, onChange }: DateTimePickerProps) {
  /**
   * carry over the current time when a user clicks a new day
   * instead of resetting to 00:00
   */
  const handleSelect = (newDay: Date | undefined) => {
    if (!newDay || !onChange) return
    if (!value) {
      onChange(newDay)
      return
    }
    const diff = newDay.getTime() - value.getTime()
    const diffInDays = diff / (1000 * 60 * 60 * 24)
    const newDateFull = add(value, { days: Math.ceil(diffInDays) })
    onChange(newDateFull)
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-[280px] justify-start text-left font-normal',
            !value && 'text-muted-foreground',
            className,
          )}>
          <CalendarIcon className='mr-2 h-4 w-4' />
          {value ? format(value, 'PPP HH:mm:ss') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0'>
        <Calendar mode='single' selected={value} onSelect={(d) => handleSelect(d)} initialFocus />
        <div className='border-t border-border p-3'>
          <TimePickerDemo
            setDate={(date) => {
              if (onChange) onChange(date)
            }}
            date={value}
          />
        </div>
      </PopoverContent>
    </Popover>
  )
}
