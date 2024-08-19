'use client'

import { CustomersBarChart } from '@mantul/app/(admin)/dashboard/components/customers-bar-chart'
import { Earnings } from '@mantul/app/(admin)/dashboard/components/earnings'
import { Investments } from '@mantul/app/(admin)/dashboard/components/investments'
import { RevenueAreaChart } from '@mantul/app/(admin)/dashboard/components/revenue-area-chart'
import { RevenueRadialChart } from '@mantul/app/(admin)/dashboard/components/revenue-radial-chart'
import { Savings } from '@mantul/app/(admin)/dashboard/components/savings'
import { Spendings } from '@mantul/app/(admin)/dashboard/components/spendings'
import { TransactionsTable } from '@mantul/app/(admin)/dashboard/components/transactions-table'

export default function DashboardPage() {
  return (
    <main className='mx-auto flex max-w-screen-2xl flex-col p-4'>
      <section className='mb-4 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        <Earnings />
        <Spendings />
        <Savings />
        <Investments />
      </section>
      <section className='mb-4 grid grid-cols-4 gap-4'>
        <RevenueAreaChart className='col-span-4 lg:col-span-3' />
        <RevenueRadialChart className='col-span-4 lg:col-span-1' />
      </section>
      <section className='grid grid-cols-4 gap-4'>
        <CustomersBarChart className='col-span-4 lg:col-span-1' />
        <TransactionsTable className='col-span-4 lg:col-span-3' />
      </section>
    </main>
  )
}
