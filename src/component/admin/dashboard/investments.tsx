import { ArrowUpIcon } from 'lucide-react'

import { Badge } from '@mantul/component/ui/badge'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@mantul/component/ui/card'
import { cn } from '@mantul/lib/utils'

export interface InvestmentsProps {
  className?: string
}

export const Investments = ({ className }: InvestmentsProps) => {
  return (
    <Card className={cn('', className)}>
      <CardHeader className='pb-3'>
        <CardTitle className='text-base text-muted-foreground'>Investments</CardTitle>
      </CardHeader>
      <CardContent className='flex items-center gap-2 pb-3'>
        <span className='text-2xl'>$928.41</span>
        <Badge variant='label-success'>
          <ArrowUpIcon className='mr-1 size-4' />
          <span className='font-semibold'>12.8%</span>
        </Badge>
      </CardContent>
      <CardFooter className='text-sm text-muted-foreground'>
        <span className='font-semibold text-success'>+$118.8</span>&nbsp;than last month
      </CardFooter>
    </Card>
  )
}
