# Vite⚡ React TS + Tailwind Template

This project is a template for setting up a modern web development environment using Vite, React, TypeScript, and Tailwind CSS. It includes a comprehensive setup for linting and formatting with ESLint, Stylelint, and Prettier.

## Table of Contents

- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Configuration](#configuration)

## Getting Started

1. **Clone the repository:**

   ```sh
   git clone <repository-url>
   ```

2. **Navigate to the project directory:**

   ```sh
   cd vite-rts-tw-template
   ```

3. **Install dependencies:**

   ```sh
   pnpm install
   ```

4. **Start the development server:**
   ```sh
   pnpm run dev
   ```

## Available Scripts

- **`pnpm run dev`**: Starts the development server.
- **`pnpm run build`**: Builds the project for production.
- **`pnpm run preview`**: Previews the production build.
- **`pnpm run lint:scripts`**: Lints and fixes JavaScript, JSX, TypeScript, and TSX files.
- **`pnpm run lint:format`**: Formats code using Prettier.

## Configuration

### ESLint

ESLint is configured to lint JavaScript, JSX, TypeScript, and TSX files, and it includes plugins for React, React Hooks, and accessibility (jsx-a11y).

### Prettier

Prettier is configured for code formatting and includes a plugin to sort imports.

### PostCSS

PostCSS is configured to support Tailwind CSS, nesting rules, and autoprefixing.

### TypeScript

TypeScript is configured with a `tsconfig.json` file to manage the project's TypeScript settings.
