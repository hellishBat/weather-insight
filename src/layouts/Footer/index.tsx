// Footer
import Container from '@/components/Container'
import Link from '@/components/Link'
import data from '@/data/index.json'
import { HeartIcon } from '@/assets'

const footerLinks = data.footer.links
const footerText = data.footer.text

const Footer = () => {
  return (
    <footer className="py-8 text-xs text-gray-500 dark:bg-slate-800 dark:text-gray-400">
      <Container>
        <div className="flex flex-wrap justify-center items-center gap-1">
          <span>{footerText[0]}</span>
          <HeartIcon className="w-[1.25em] h-[1.25em]" />
          <span>{footerText[1]}</span>
          <Link href={footerLinks.owner.href}>{footerLinks.owner.text}</Link>
          <span>{footerText[2]}</span>
          <Link href={footerLinks.weather.href}>{footerLinks.weather.text}</Link>
          <span>{footerText[3]}</span>
          <Link href={footerLinks.unsplash.href}>{footerLinks.unsplash.text}</Link>
          <span>{footerText[4]}</span>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
