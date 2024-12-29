import { useState } from 'react'
import { SuperSEO } from 'react-super-seo'

import './App.css'
import reactLogo from './assets/react.svg'
import tailwindLogo from './assets/tailwindcss.svg'
import typescriptLogo from './assets/typescript.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SuperSEO
        title="Vite⚡ React TS + Tailwind Template"
        description="Explore the Vite⚡ React TS + Tailwind Template, a modern and efficient setup for developing high-performance web applications with Vite, React, TypeScript, and Tailwind CSS."
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
      />
      <div className="mt-[25%]">
        <div className="mb-6 flex items-center justify-center space-x-4">
          <a href="https://vite.dev" target="_blank">
            <img
              src={viteLogo}
              className="logo animate-bounce"
              alt="Vite logo"
            />
          </a>
          <a href="https://react.dev" target="_blank">
            <img
              src={reactLogo}
              className="logo react animate-bounce"
              alt="React logo"
            />
          </a>
          <a href="https://typescriptlang.org/" target="_blank">
            <img
              src={typescriptLogo}
              className="logo ts animate-bounce"
              alt="TypeScript logo"
            />
          </a>
          <a href="https://tailwindcss.com/" target="_blank">
            <img
              src={tailwindLogo}
              className="logo tailwind animate-bounce"
              alt="Tailwind logo"
            />
          </a>
        </div>
      </div>
      <h1 className="font-semibold">Vite⚡ React TS + Tailwind Template</h1>
      <div className="space-y-4 p-[2em]">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p className="mt-auto text-sm">
        *based on official Vite TypeScript Template
      </p>
    </>
  )
}

export default App
