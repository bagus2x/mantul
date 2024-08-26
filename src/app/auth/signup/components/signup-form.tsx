import { Button } from '@mantul/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@mantul/components/ui/card'
import { Input } from '@mantul/components/ui/input'
import { Label } from '@mantul/components/ui/label'
import { Link } from '@mantul/components/ui/link'
import { cn } from '@mantul/libs/utils'

export interface SignUpFormProps {
  className?: string
}

export const SignUpForm = ({ className }: SignUpFormProps) => {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle className='text-2xl'>Login</CardTitle>
        <CardDescription>Enter your email below to login to your account.</CardDescription>
      </CardHeader>
      <CardContent className='grid gap-4'>
        <div className='grid gap-2'>
          <Label htmlFor='email'>Name</Label>
          <Input id='name' type='text' required />
        </div>
        <div className='grid gap-2'>
          <Label htmlFor='email'>Email</Label>
          <Input id='email' type='email' placeholder='m@example.com' required />
        </div>
        <div className='grid gap-2'>
          <Label htmlFor='password'>Password</Label>
          <Input id='password' type='password' required />
        </div>
      </CardContent>
      <CardFooter className='flex flex-col items-end gap-4'>
        <Button className='w-full'>Sign up</Button>
        <p className='text-xs'>
          Already have an account?{' '}
          <Link className='font-semibold' href='/auth/signin'>
            Sign in
          </Link>
        </p>
      </CardFooter>
    </Card>
  )
}
