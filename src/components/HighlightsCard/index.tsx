// HighlightsCard
import { FC } from 'react'
import { ChildrenTypes } from '@/types'

const HighlightCard: FC<ChildrenTypes> = ({ children }) => {
  return (
    <article className="flex justify-center rounded-xl shadow-md p-4 bg-white text-center">
      <div className="flex flex-col justify-center items-center">{children}</div>
    </article>
  )
}

export default HighlightCard
