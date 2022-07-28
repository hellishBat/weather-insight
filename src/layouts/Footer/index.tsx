// Footer
import Container from '@/components/Container'

const Footer = () => {
  return (
    <footer className="py-8">
      <Container>
        <div className="flex flex-wrap justify-center gap-1 text-gray-900">
          <span>Coded with ❤️ by</span>
          <a
            className="font-medium transition-all hover:underline"
            href="https://valentine-samoylov.vercel.app/"
          >
            Valentine Samoylov
          </a>
          <span>using</span>
          <a
            className="font-medium transition-all hover:underline"
            href="https://openweathermap.org/"
          >
            OpenWeather
          </a>
          <span> and </span>
          <a className="font-medium transition-all hover:underline" href="https://unsplash.com/">
            Unsplash
          </a>
          <span>APIs.</span>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
