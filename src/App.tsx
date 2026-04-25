// App
import { SuperSEO } from 'react-super-seo'

import ContextProviders from '@/context/ContextProviders'
import { Dashboard } from '@/modules/Dashboard'

import { Footer, Header } from './layouts'

const App = () => {
  return (
    <>
      <SuperSEO
        title="WeatherInsight"
        description="WeatherInsight - weather forecast for your neighborhood!"
        lang="en"
        // openGraph={{
        //   ogImage: {
        //     ogImage: '',
        //     ogImageAlt: '',
        //     ogImageWidth: 1200,
        //     ogImageHeight: 630,
        //     ogImageType: 'image/jpeg',
        //   },
        // }}
        // twitter={{
        //   twitterSummaryCard: {
        //     summaryCardImage: '',
        //     summaryCardImageAlt: 'alt text',
        //   },
        // }}
      >
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </SuperSEO>
      <ContextProviders>
        <Header />
        <main className="">
          <Dashboard />
        </main>
        <Footer />
      </ContextProviders>
    </>
  )
}

export default App
