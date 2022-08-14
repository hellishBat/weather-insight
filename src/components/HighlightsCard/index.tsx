// HighlightsCard
import { FC } from 'react'
import { ChildrenTypes } from '@/types'

const HighlightCard: FC<ChildrenTypes> = ({ children }) => {
  return (
    <article className="flex flex-col justify-center items-center rounded-xl p-4 bg-white border border-white/5 shadow-md text-center dark:bg-slate-800">
      {children}
    </article>
  )
}

export default HighlightCard
