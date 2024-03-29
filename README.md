# WeatherInsight - A React Weather App

![Imgur](https://i.imgur.com/cKxqUlO.png)

## Features

- The default location is set to Odesa, Ukraine;
- Weather search by location and city name;
- For the main weather card a background image is automatically applied with the photo found for the given location on unsplash.com (the image is selected randomly from the first 10 results for the given location);
- Dark Mode Included.

## Techchnologies Used

- React + TypeScript;
- Styled with Tailwind CSS;
- Axios for fetching from API;
- Moment.js to handle time formats;
- [React Toggle Dark Mode](https://www.npmjs.com/package/react-toggle-dark-mode)
- APIs:
  - OpenWeather
  - Unsplash

## Assets Used

- Material Icons

## Live Demo

[Live Demo](https://weather-insight.vercel.app/)

## Local Usage (On your machine)

### Pre-reqisites (for local usage)

- Clone this repo;
- You need to get API keys from [Openweather](https://openweathermap.org/) and [Unsplash](https://unsplash.com/developers/);
- Create .env file in the root folder with corresponding variables:
  - API_KEY_APPID=your-api-key
  - API_KEY_UNSPLASH=your-api-key

### Scripts

To install dependencies:

```sh
yarn install
```

Start development mode:

```sh
yarn run start
```

Create production build:

```sh
yarn run build
```

Lint code:

```sh
yarn run lint
```

Format code with Prettier:

```sh
yarn run format
```

This project uses [Webpack Boilerplate](https://github.com/valentine-samoylov/webpack-react-ts-tw-bp) by Valentine Samoylov.
