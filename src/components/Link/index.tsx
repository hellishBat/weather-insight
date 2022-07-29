// Link
import { FC, ReactNode } from 'react'

type LinkTypes = {
  href: string
  children: ReactNode
}

const Link: FC<LinkTypes> = ({ href, children }) => {
  return (
    <a className="font-medium hover:transition-all hover:underline" href={href}>
      {children}
    </a>
  )
}

export default Link
