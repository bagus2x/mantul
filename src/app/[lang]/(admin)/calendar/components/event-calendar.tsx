'use client'

import dayjs from 'dayjs'
import { useState } from 'react'
import { Calendar as BigCalendar, dayjsLocalizer, Event, View } from 'react-big-calendar'

import '@mantul/app/[lang]/(admin)/calendar/components/event-calendar.css'
import { WeekEventItem } from '@mantul/app/[lang]/(admin)/calendar/components/event-item'
import { EventToolbar } from '@mantul/app/[lang]/(admin)/calendar/components/event-toolbar'
import { NewEventDrawer } from '@mantul/app/[lang]/(admin)/calendar/components/new-event-sheet'
import { Calendar } from '@mantul/components/ui/calendar'
import { Card } from '@mantul/components/ui/card'
import { cn } from '@mantul/libs/utils'

const localizer = dayjsLocalizer(dayjs)

export interface BigCalendarProps {
  className?: string
}

interface MyEvent extends Event {
  data: {
    type: string
  }
}

const events: MyEvent[] = [
  {
    start: dayjs().toDate(),
    end: dayjs().add(1, 'day').toDate(),
    title: 'MRI Registration',
    data: {
      type: 'Reg',
    },
  },
  {
    start: dayjs().toDate(),
    end: dayjs().add(1, 'day').toDate(),
    title: 'Makan',
    data: {
      type: 'Reg',
    },
  },
  {
    start: dayjs().add(3, 'day').toDate(),
    end: dayjs().add(4, 'day').toDate(),
    title: 'ENT Appointment',
    data: {
      type: 'App',
    },
  },
]

export const EventCalendar = ({ className }: BigCalendarProps) => {
  const [view, setView] = useState<View>('month')
  const [date, setDate] = useState(new Date())

  return (
    <Card className={cn('flex w-full flex-col gap-4 p-4 md:flex-row', className)} asChild>
      <section>
        <div className='hidden w-full flex-col space-y-4 lg:flex lg:max-w-72'>
          <NewEventDrawer />
          <Calendar
            mode='single'
            className='rounded-md border'
            selected={date}
            onSelect={(date) => {
              if (date) setDate(date)
            }}
          />
        </div>
        <BigCalendar
          localizer={localizer}
          events={events}
          components={{
            month: WeekEventItem,
            toolbar: EventToolbar,
            header: (a) => <div className='py-4'>{a.label}</div>,
          }}
          view={view}
          onView={setView}
          date={date}
          onNavigate={setDate}
          className='w-full'
          style={{ minHeight: 768 }}
          eventPropGetter={() => ({ style: { backgroundColor: 'transparent' } })}
          dayPropGetter={(current) => ({
            className: cn(
              'bg-transparent',
              !dayjs(date).isSame(current, 'month') && '!bg-gray-50  dark:!bg-white/20',
              dayjs(date).isSame(current, 'day') && '!bg-primary/10',
            ),
          })}
        />
      </section>
    </Card>
  )
}
