// Logo
import { BrandLogo } from '@/assets'

const Logo = () => {
  return (
    <a className="w-40 mr-auto overflow-hidden md:w-48" href="/">
      <BrandLogo width="auto" height="auto" title="WeatherInsight" />
      <span className="sr-only">WeatherInsight Home Page</span>
    </a>
  )
}

export default Logo
