import dayjs from 'dayjs'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { Navigate, ToolbarProps } from 'react-big-calendar'

import { Button } from '@mantul/components/ui/button'
import { ToggleGroup, ToggleGroupItem } from '@mantul/components/ui/toggle-group'

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

export const EventToolbar = (props: ToolbarProps) => {
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
    <div className='mb-4 flex flex-col gap-4 md:flex-row'>
      <div className='flex w-full gap-4'>
        <Button variant='ghost' size='icon' onClick={goToPrevious}>
          <ChevronLeftIcon />
        </Button>
        <Button variant='ghost' size='icon' onClick={goToNext}>
          <ChevronRightIcon />
        </Button>
        <div className='flex flex-1 items-center justify-end text-xl md:justify-start'>
          {title(props)}
        </div>
      </div>
      <ToggleGroup type='single' className='gap-0' value={props.view}>
        <Button className='rounded-e-none rounded-s-md' variant='outline' asChild>
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
        <Button className='rounded-e-md rounded-s-none' variant='outline' asChild>
          <ToggleGroupItem value='agenda' aria-label='Toggle agenda' onClick={goToAgendaView}>
            Agenda
          </ToggleGroupItem>
        </Button>
      </ToggleGroup>
    </div>
  )
}
