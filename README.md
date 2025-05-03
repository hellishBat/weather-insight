# WeatherInsight – A React Weather App

![WeatherInsight](https://imgur.com/a/ELxg13p.png)

## Features

- 🌍 Weather search by location on page load or via the location button
- 🔎 Search by city name with autofill (cities over 250,000 population)
- 🖼️ Background image on the main weather card using a random Unsplash photo based on the location or weather description (e.g., "sunny", "cloudy")
- 🌙 Dark Mode included

## Technologies Used

- ⚛️ React + TypeScript
- 🔁 [TanStack/React Query](https://www.npmjs.com/package/@tanstack/react-query) – asynchronous state management
- 🌐 [Axios](https://www.npmjs.com/package/axios) – API fetching
- 🎨 [Tailwind CSS](https://www.npmjs.com/package/tailwindcss) – styling
- 🔌 APIs:
  - [Weather API](https://openweathermap.org/)
  - [Unsplash](https://unsplash.com/developers/)
  - [GeoDB Cities](https://rapidapi.com/wirefreethought/api/geodb-cities/)
  - [IPWHOIS.io](https://ipwhois.io/)

## Credits (In Order of Appearance)

- 📦 Libraries:
  - [React Select](https://www.npmjs.com/package/react-select)
  - [React Select Async Paginate](https://www.npmjs.com/package/react-select-async-paginate)
  - [Countries List](https://www.npmjs.com/package/countries-list)
  - [React World Flags](https://www.npmjs.com/package/react-world-flags)
  - [Swiper](https://www.npmjs.com/package/swiper)
- 🎨 UI Icons: [Material Symbols by Google](https://fonts.google.com/icons)
- 🌤 Forecast Icons: [Google Weather Icons](https://github.com/mrdarrengriffin/google-weather-icons)
- 💙 Ukrainian Heart Icon by [Linector](https://www.iconfinder.com/LINECTOR)

## 🔗 Live Demo

[Live Demo](https://weatherinsight.vercel.app/)

---

## 🛠️ Local Usage

### Prerequisites

1. Clone this repository
2. Obtain API keys from:
   - [OWeather API](https://www.weatherapi.com/)
   - [Unsplash](https://unsplash.com/developers/)
3. Create a `.env` file in the root directory and add:

```env
VITE_API_KEY_GEODB=your-api-key
VITE_API_KEY_WEATHERAPI=your-api-key
VITE_API_KEY_UNSPLASH=your-api-key
```

---

## ⚡ Built With [Vite⚡ React TS + Tailwind Template](https://github.com/hellishBat/vite-rts-tw-template)

### Highlights

- ⚛️ React + TypeScript support
- 🔥 React Fast Refresh (HMR) – dev mode
- 🎨 Styling:
  - Tailwind CSS
  - SASS/SCSS
  - PostCSS
- 🗜️ Minified CSS/JS in production
- 🖼️ Image optimization (WebP/AVIF) in production
- ⭐ Inline SVG with SVGR
- 🧰 ESLint, Stylelint, Prettier
- ⚙️ `.env` support via Vite (`VITE_` prefix required)

---

## 📁 Project Setup

### Getting Started

```sh
git clone <repository-url>
cd vite-rts-tw-template
pnpm install
pnpm run dev
```

### Available Scripts

- `pnpm run dev` – start dev server
- `pnpm run build` – build for production
- `pnpm run preview` – preview the production build
- `pnpm run lint:scripts` – lint JS/TS/TSX files
- `pnpm run lint:format` – format code with Prettier

---

## 🛠 Configuration Overview

### ESLint

Configured for React, Hooks, accessibility, and TypeScript.

### Prettier

Includes plugin for import sorting.

### PostCSS

Supports Tailwind, nesting, and autoprefixing.

### TypeScript

Managed via `tsconfig.json`.
