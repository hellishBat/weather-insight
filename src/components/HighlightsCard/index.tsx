// HighlightsCard
import { FC } from 'react'
import { ChildrenTypes } from '@/types'

const HighlightCard: FC<ChildrenTypes> = ({ children }) => {
  return (
    <article className="flex justify-center rounded-xl p-4 bg-white border border-white/5 shadow-md text-center dark:bg-slate-800">
      <div className="flex flex-col justify-center items-center">{children}</div>
    </article>
  )
}

export default HighlightCard
