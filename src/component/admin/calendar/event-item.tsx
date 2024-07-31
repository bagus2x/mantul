import { Badge } from '@mantul/component/ui/badge'

export const WeekEventItem = {
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
