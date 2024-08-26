import { cn } from '@mantul/libs/utils'

export interface FooterProps {
  className?: string
}

export const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={cn('text-muted-foreground', className)}>
      <div className='mx-auto w-full max-w-screen-2xl p-4 md:flex md:items-center md:justify-between'>
        <span className='text-sm text-muted-foreground sm:text-center'>
          © {new Date().getFullYear()}{' '}
          <a href='https://github.com/bagus2x' className='hover:underline'>
            Mantul™
          </a>
          . All Rights Reserved.
        </span>
        <ul className='mt-3 flex flex-wrap items-center text-sm font-medium text-muted-foreground sm:mt-0'>
          <li>
            <a href='#' className='me-4 hover:underline md:me-6'>
              About
            </a>
          </li>
          <li>
            <a href='#' className='me-4 hover:underline md:me-6'>
              Privacy Policy
            </a>
          </li>
          <li>
            <a href='#' className='me-4 hover:underline md:me-6'>
              Licensing
            </a>
          </li>
          <li>
            <a href='#' className='hover:underline'>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
