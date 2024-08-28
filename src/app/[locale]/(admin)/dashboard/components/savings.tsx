import { ArrowDownIcon } from 'lucide-react'

import { Badge } from '@mantul/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@mantul/components/ui/card'
import { cn } from '@mantul/libs/utils'

export interface SavingsProps {
  className?: string
}

export const Savings = ({ className }: SavingsProps) => {
  return (
    <Card className={cn('', className)}>
      <CardHeader className='pb-3'>
        <CardTitle className='text-base text-muted-foreground'>Savings</CardTitle>
      </CardHeader>
      <CardContent className='flex items-center gap-2 pb-3'>
        <span className='text-2xl'>$928.41</span>
        <Badge variant='label-destructive'>
          <ArrowDownIcon className='mr-1 size-4' />
          <span className='font-semibold'>12.8%</span>
        </Badge>
      </CardContent>
      <CardFooter className='text-sm text-muted-foreground'>
        <span className='font-semibold text-destructive'>-$118.8</span>&nbsp;than last month
      </CardFooter>
    </Card>
  )
}
