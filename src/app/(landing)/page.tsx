import { Button } from '@mantul/component/ui/button'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <main>
      <Button asChild>
        <Link href='/dashboard'>Click !</Link>
      </Button>
      <h1 className=''>
        Whereas disregard and contempt for human rights have resulted
      </h1>
    </main>
  )
}

