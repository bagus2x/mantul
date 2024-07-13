'use client'

import { CustomersBarChart } from '@mantul/component/admin/dashboard/customers-bar-chart'
import { Earnings } from '@mantul/component/admin/dashboard/earnings'
import { Investments } from '@mantul/component/admin/dashboard/investments'
import { RevenueAreaChart } from '@mantul/component/admin/dashboard/revenue-area-chart'
import { RevenueRadialChart } from '@mantul/component/admin/dashboard/revenue-radial-chart'
import { Savings } from '@mantul/component/admin/dashboard/savings'
import { Spendings } from '@mantul/component/admin/dashboard/spendings'
import { TransactionsTable } from '@mantul/component/admin/dashboard/transactions-table'

export default function DashboardPage() {
  return (
    <main className='mx-auto flex max-w-screen-2xl flex-col px-4 py-4'>
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
