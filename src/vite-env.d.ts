/// <reference types="vite/client" />
declare module '*.jpg?webp' {
  const src: string
  export default src
}

declare module '*.png?webp' {
  const src: string
  export default src
}

// declare module '*.svg' {
//   import React = require('react')
//   export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
//   const src: string
//   export default src
// }

declare module '*.svg?react' {
  import * as React from 'react'
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  export default ReactComponent
}

declare module '*.json' {
  const value: any
  export default value
}
