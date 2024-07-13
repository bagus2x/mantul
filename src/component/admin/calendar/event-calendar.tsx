'use client'

import dayjs from 'dayjs'
import { useState } from 'react'
import {
  Calendar as BigCalendar,
  dayjsLocalizer,
  Event,
  Navigate,
  ToolbarProps,
  View,
} from 'react-big-calendar'

import '@mantul/component/admin/calendar/event-calendar.css'
import { Badge } from '@mantul/component/ui/badge'
import { Button } from '@mantul/component/ui/button'
import { Calendar } from '@mantul/component/ui/calendar'
import { Card } from '@mantul/component/ui/card'
import { ToggleGroup, ToggleGroupItem } from '@mantul/component/ui/toggle-group'
import { cn } from '@mantul/lib/utils'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const localizer = dayjsLocalizer(dayjs)

export interface BigCalendarProps {
  className?: string
}

const events: (Event & { data: any })[] = [
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

const EventItem = {
  event: (props: any) => {
    const eventType = props?.event?.data?.type
    switch (eventType) {
      case 'Reg':
        return (
          <Badge variant='label-success' className='w-full'>
            {props.title}
          </Badge>
        )
      case 'App':
        return (
          <Badge variant='label-warning' className='w-full'>
            {props.title}
          </Badge>
        )
      default:
        return null
    }
  },
}

const title = (props: ToolbarProps) => {
  switch (props.view) {
    case 'month':
    case 'agenda':
      return dayjs(props.date).format('MMM YYYY')
    case 'week':
    case 'work_week':
      const start = dayjs(props.date).startOf('week')
      const end = dayjs(props.date).endOf('week')
      if (start.isSame(end, 'month')) {
        return `${start.format('D')} - ${end.format('D')} ${start.format('MMM YYYY')}`
      }
      if (start.isSame(end, 'year')) {
        return `${start.format('D MMM')} - ${end.format('D MMM')} ${start.format('YYYY')}`
      }
      return `${start.format('D MMM YYYY')} - ${end.format('D MMM YYYY')}`
    case 'day':
      return dayjs(props.date).format('D MMM YYYY')
  }
}

const EventToolbar = (props: ToolbarProps) => {
  const goToDayView = () => {
    props.onView('day')
  }

  const goToWeekView = () => {
    props.onView('week')
  }

  const goToMonthView = () => {
    props.onView('month')
  }

  const goToAgendaView = () => {
    props.onView('agenda')
  }

  const goToPrevious = () => {
    props.onNavigate(Navigate.PREVIOUS)
  }

  const goToNext = () => {
    props.onNavigate(Navigate.NEXT)
  }

  return (
    <div className='mb-4 flex gap-4'>
      <Button variant='ghost' size='icon' onClick={goToPrevious}>
        <ChevronLeft />
      </Button>
      <Button variant='ghost' size='icon' onClick={goToNext}>
        <ChevronRight />
      </Button>
      <div className='flex flex-1 items-center text-xl'>{title(props)}</div>
      <ToggleGroup type='single' className='gap-0' value={props.view}>
        <Button className='rounded-l-md rounded-r-none' variant='outline' asChild>
          <ToggleGroupItem value='month' aria-label='Toggle month' onClick={goToMonthView}>
            Month
          </ToggleGroupItem>
        </Button>
        <Button className='rounded-none' variant='outline' asChild>
          <ToggleGroupItem value='week' aria-label='Toggle week' onClick={goToWeekView}>
            Week
          </ToggleGroupItem>
        </Button>
        <Button className='rounded-none' variant='outline' asChild>
          <ToggleGroupItem value='day' aria-label='Toggle day' onClick={goToDayView}>
            Day
          </ToggleGroupItem>
        </Button>
        <Button className='rounded-l-none rounded-r-md' variant='outline' asChild>
          <ToggleGroupItem value='agenda' aria-label='Toggle agenda' onClick={goToAgendaView}>
            Agenda
          </ToggleGroupItem>
        </Button>
      </ToggleGroup>
    </div>
  )
}

export const EventCalendar = ({ className }: BigCalendarProps) => {
  const [view, setView] = useState<View>('month')
  const [date, setDate] = useState(new Date())

  return (
    <Card className={cn('flex w-full flex-col gap-4 p-4 md:flex-row', className)} asChild>
      <section>
        <div className='flex w-full flex-col space-y-4 md:max-w-72'>
          <Button className='w-full'>Add Event</Button>
          <Calendar mode='single' className='hidden rounded-md border md:block' />
        </div>
        <BigCalendar
          localizer={localizer}
          events={events}
          components={{ month: EventItem, toolbar: EventToolbar }}
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
              !dayjs(date).isSame(current, 'month') && '!bg-gray-100',
            ),
          })}
        />
      </section>
    </Card>
  )
}
