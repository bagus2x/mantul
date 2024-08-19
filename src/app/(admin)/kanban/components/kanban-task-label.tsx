import { alpha, cn } from '@mantul/libs/utils'
import { Label } from '@mantul/models/task'
import { motion } from 'framer-motion'

export interface KanbanTaskLabelProps {
  label: Label
  expandable?: boolean
  className?: string
}

export const KanbanTaskLabel = ({ label, expandable, className }: KanbanTaskLabelProps) => {
  const props = expandable
    ? {
        whileHover: {
          width: 'fit-content',
          transition: { duration: 0.2, delay: 0.1 },
        },
        animate: {
          width: '16px',
          transition: { duration: 0.2, delay: 1 },
        },
        initial: {
          width: '16px',
        },
      }
    : {}

  return (
    <motion.button
      key={label.id}
      style={
        {
          '--label-bg': alpha(label.color, 0.2),
          '--label-text': label.color,
        } as React.CSSProperties
      }
      {...props}
      className={cn(
        'group overflow-hidden rounded-full bg-[var(--label-bg)] text-xs text-[var(--label-text)]',
        className,
      )}>
      <span
        className={cn(
          'px-2.5 py-0.5 font-semibold transition-all delay-100 group-hover:opacity-100 group-[&:not(:hover)]:delay-1000',
          expandable && 'opacity-0',
        )}>
        {label.name}
      </span>
    </motion.button>
  )
}
