import BlurFade from '@mantul/components/magicui/blur-fade'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@mantul/components/ui/accordion'
import { cn } from '@mantul/libs/utils'
import { Separator } from '@radix-ui/react-dropdown-menu'

export interface FaqProps {
  className?: string
}

const faqs = [
  {
    question: 'What is this dashboard template built with?',
    answer:
      'This dashboard template is built using Next.js and Tailwind CSS, providing a fast and responsive user interface with a modern design.',
  },
  {
    question: 'How can I customize the components?',
    answer:
      "You can customize the components by modifying the Tailwind CSS classes directly in the JSX files. Tailwind's utility-first approach allows for easy and flexible styling.",
  },
  {
    question: 'Is the template responsive?',
    answer:
      "Yes, the template is fully responsive. It uses Tailwind's responsive utilities to ensure it looks great on all screen sizes, from mobile devices to desktops.",
  },
  {
    question: 'How do I deploy this dashboard?',
    answer:
      'You can deploy the dashboard using platforms like Vercel, Netlify, or any other hosting service that supports Next.js applications.',
  },
  {
    question: 'Can I integrate third-party plugins or libraries?',
    answer:
      'Yes, you can easily integrate third-party plugins or libraries. Next.js supports various integrations, and you can install additional npm packages as needed.',
  },
  {
    question: 'Is there any support for dark mode?',
    answer:
      'Yes, the template includes support for dark mode. You can toggle dark mode by adding the relevant Tailwind CSS classes to the root of your application.',
  },
  {
    question: 'How do I add new pages to the dashboard?',
    answer:
      'To add new pages, simply create a new file in the `pages` directory. Next.js automatically handles routing based on the file structure within this directory.',
  },
  {
    question: 'Can I use this template for a commercial project?',
    answer:
      'Yes, you can use this template for commercial projects. It is designed to be flexible and adaptable to various use cases, including business applications.',
  },
]

export const Faq = ({ className }: FaqProps) => {
  return (
    <BlurFade
      id='faq'
      as='section'
      inView
      className={cn('mx-auto w-full max-w-screen-2xl px-4 py-10', className)}>
      <div className='text-center'>
        <h2 className='text-3xl font-bold'>Frequently asked questions</h2>
        <p className='pt-1 text-xl'>
          Explore these FAQs to discover answers to frequently asked questions
        </p>
      </div>
      <div>
        <Accordion type='single' collapsible className='w-full'>
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </BlurFade>
  )
}
