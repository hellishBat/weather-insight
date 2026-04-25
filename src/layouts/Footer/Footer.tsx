// Footer
import { HeartIcon } from '@/assets'
import data from '@/data/index.json'

import { Link } from './'

interface FooterLink {
  href: string
  text: string
}

interface FooterData {
  links: {
    owner: FooterLink
    weather: FooterLink
    unsplash: FooterLink
  }
  text: string[]
}

const { links, text } = data.footer as FooterData

export const Footer = () => {
  return (
    <footer className="layout w-full border-t py-6 text-xs font-medium tracking-wide">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-1.5 drop-shadow-sm">
          {text[0]}
          <HeartIcon className="h-4 w-4 drop-shadow-sm" />
          {text[1]}
          <Link href={links.owner.href}>{links.owner.text}</Link>
          {text[2]}
          <Link href={links.weather.href}>{links.weather.text}</Link>
          {text[3]}
          <Link href={links.unsplash.href}>{links.unsplash.text}</Link>
          {text[4]}
        </div>
      </div>
    </footer>
  )
}
