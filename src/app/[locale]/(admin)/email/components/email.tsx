'use client'

import {
  AlertCircle,
  Archive,
  ArchiveX,
  File,
  Inbox,
  MessagesSquare,
  Search,
  Send,
  ShoppingCart,
  Trash2,
  Users2,
} from 'lucide-react'
import * as React from 'react'

import { MailDisplay } from '@mantul/app/[locale]/(admin)/email/components/email-display'
import { EmailList } from '@mantul/app/[locale]/(admin)/email/components/email-list'
import { Nav } from '@mantul/app/[locale]/(admin)/email/components/nav'
import { useEmail } from '@mantul/app/[locale]/(admin)/email/components/use-email'
import { Mail } from '@mantul/app/[locale]/(admin)/email/data'
import { Card } from '@mantul/components/ui/card'
import { Input } from '@mantul/components/ui/input'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@mantul/components/ui/resizable'
import { Separator } from '@mantul/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@mantul/components/ui/tabs'
import { TooltipProvider } from '@mantul/components/ui/tooltip'
import { cn } from '@mantul/libs/utils'

interface MailProps {
  accounts: {
    label: string
    email: string
    icon: React.ReactNode
  }[]
  mails: Mail[]
  defaultLayout: number[] | undefined
  defaultCollapsed?: boolean
  navCollapsedSize: number
}

export function Email({
  accounts,
  mails,
  defaultLayout = [20, 32, 48],
  defaultCollapsed = false,
  navCollapsedSize,
}: MailProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed)
  const { selectedId } = useEmail()

  return (
    <Card>
      <TooltipProvider delayDuration={0}>
        <ResizablePanelGroup
          direction='horizontal'
          onLayout={(sizes: number[]) => {
            document.cookie = `react-resizable-panels:layout:mail=${JSON.stringify(sizes)}`
          }}
          className='h-full max-h-[800px] items-stretch'>
          <ResizablePanel
            defaultSize={defaultLayout[0]}
            collapsedSize={navCollapsedSize}
            collapsible={true}
            minSize={15}
            maxSize={20}
            onCollapse={() => {
              setIsCollapsed(true)
              document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(true)}`
            }}
            onResize={() => {
              setIsCollapsed(false)
              document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(false)}`
            }}
            className={cn(isCollapsed && 'min-w-[50px] transition-all duration-300 ease-in-out')}>
            <Nav
              isCollapsed={isCollapsed}
              links={[
                {
                  title: 'Inbox',
                  label: '128',
                  icon: Inbox,
                  variant: 'default',
                },
                {
                  title: 'Drafts',
                  label: '9',
                  icon: File,
                  variant: 'ghost',
                },
                {
                  title: 'Sent',
                  label: '',
                  icon: Send,
                  variant: 'ghost',
                },
                {
                  title: 'Junk',
                  label: '23',
                  icon: ArchiveX,
                  variant: 'ghost',
                },
                {
                  title: 'Trash',
                  label: '',
                  icon: Trash2,
                  variant: 'ghost',
                },
                {
                  title: 'Archive',
                  label: '',
                  icon: Archive,
                  variant: 'ghost',
                },
              ]}
            />
            <Separator />
            <Nav
              isCollapsed={isCollapsed}
              links={[
                {
                  title: 'Social',
                  label: '972',
                  icon: Users2,
                  variant: 'ghost',
                },
                {
                  title: 'Updates',
                  label: '342',
                  icon: AlertCircle,
                  variant: 'ghost',
                },
                {
                  title: 'Forums',
                  label: '128',
                  icon: MessagesSquare,
                  variant: 'ghost',
                },
                {
                  title: 'Shopping',
                  label: '8',
                  icon: ShoppingCart,
                  variant: 'ghost',
                },
                {
                  title: 'Promotions',
                  label: '21',
                  icon: Archive,
                  variant: 'ghost',
                },
              ]}
            />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
            <Tabs defaultValue='all'>
              <div className='flex items-center px-4 py-2'>
                <h1 className='text-xl font-bold'>Inbox</h1>
                <TabsList className='ms-auto'>
                  <TabsTrigger value='all' className='text-zinc-600 dark:text-zinc-200'>
                    All mail
                  </TabsTrigger>
                  <TabsTrigger value='unread' className='text-zinc-600 dark:text-zinc-200'>
                    Unread
                  </TabsTrigger>
                </TabsList>
              </div>
              <Separator />
              <div className='bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
                <form>
                  <div className='relative'>
                    <Search className='absolute start-2 top-2.5 h-4 w-4 text-muted-foreground' />
                    <Input placeholder='Search' className='pl-8' />
                  </div>
                </form>
              </div>
              <TabsContent value='all' className='m-0'>
                <EmailList items={mails} />
              </TabsContent>
              <TabsContent value='unread' className='m-0'>
                <EmailList items={mails.filter((item) => !item.read)} />
              </TabsContent>
            </Tabs>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={defaultLayout[2]}>
            <MailDisplay mail={mails.find((item) => item.id === selectedId) || null} />
          </ResizablePanel>
        </ResizablePanelGroup>
      </TooltipProvider>
    </Card>
  )
}
