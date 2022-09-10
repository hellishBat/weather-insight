// Logo
import { BrandLogo } from '@/assets'

const Logo = () => {
  return (
    <a className="mr-auto w-40 overflow-hidden md:w-48" href="/">
      <BrandLogo width="auto" height="auto" title="WeatherInsight" />
      <span className="sr-only">WeatherInsight Home Page</span>
    </a>
  )
}

export default Logo
