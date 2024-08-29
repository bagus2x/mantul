import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as colors from 'tailwindcss/colors'
import * as z from 'zod'

import { Button } from '@mantul/components/ui/button'
import { DateTimePicker } from '@mantul/components/ui/date-time-picker'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@mantul/components/ui/drawer'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@mantul/components/ui/form'
import { Input } from '@mantul/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@mantul/components/ui/select'
import { Textarea } from '@mantul/components/ui/textarea'
import { cn } from '@mantul/libs/utils'
import { useDirection } from '@mantul/components/direction-provider'

export interface NewEventDrawerProps {
  className?: string
}

const categories = [
  {
    name: 'Business',
    color: colors.red[400],
  },
  {
    name: 'Holiday',
    color: colors.sky[400],
  },
  {
    name: 'Personal',
    color: colors.purple[400],
  },
] as const
const categoriesName = categories.map((c) => c.name) as [string, ...string[]]

const formSchema = z.object({
  title: z.string().min(1).max(512),
  category: z.enum(categoriesName),
  startDate: z.date(),
  endDate: z.date(),
  description: z.string(),
})

export const NewEventDrawer = ({ className }: NewEventDrawerProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      startDate: new Date(),
      endDate: new Date(),
      category: '',
      description: '',
    },
  })
  const direction = useDirection()

  return (
    <Drawer direction={direction === 'ltr' ? 'right' : 'left'}>
      <DrawerTrigger asChild>
        <Button className={cn('w-full', className)}>Add Event</Button>
      </DrawerTrigger>
      <DrawerContent className='fixed bottom-0 end-0 min-h-screen w-full max-w-md rounded-none'>
        <DrawerHeader>
          <DrawerTitle>Add new event</DrawerTitle>
        </DrawerHeader>
        <Form {...form}>
          <form className='flex flex-col gap-4 p-4'>
            <FormField
              control={form.control}
              name='title'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder='Your event title' {...field} />
                  </FormControl>
                  <FormDescription>This is your title.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='category'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Select category for your event' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.name} value={category.name}>
                          <div className='flex items-center gap-2'>
                            {category.name}{' '}
                            <div
                              className='h-3 w-3 rounded-full'
                              style={{ background: category.color }}
                            />
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='startDate'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Start Date</FormLabel>
                  <DateTimePicker className='w-full' {...field} />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='endDate'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>End Date</FormLabel>
                  <DateTimePicker className='w-full' {...field} />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='description'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <DrawerFooter>
          <Button>Save</Button>
          <DrawerClose asChild>
            <Button variant='outline'>Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
