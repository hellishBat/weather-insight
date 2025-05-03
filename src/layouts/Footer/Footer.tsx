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
    <footer className="layout py-8 text-xs">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-1">
          {text[0]}
          <HeartIcon className="h-5 w-5" />{' '}
          {/* Adjusted to Tailwind's em = 1.25em */}
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
