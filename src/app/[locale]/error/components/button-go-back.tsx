'use client'

import { ArrowLeftIcon } from 'lucide-react'

import { Button } from '@mantul/components/ui/button'
import { useRouter } from 'next/navigation'

export const ButtonGoBack = () => {
  const router = useRouter()

  return (
    <Button onClick={router.back}>
      <ArrowLeftIcon className='me-2' /> Go back
    </Button>
  )
}
