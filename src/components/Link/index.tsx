// Link
import { FC } from 'react'
import { LinkTypes } from '@/types'

const Link: FC<LinkTypes> = ({ href, children }) => {
  return (
    <a className="font-semibold hover:transition-all hover:underline" href={href}>
      {children}
    </a>
  )
}

export default Link
